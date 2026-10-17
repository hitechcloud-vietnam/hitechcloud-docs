# API {#api}

## Các endpoint {#endpoints}

- [Tạo completion](#generate-a-completion)
- [Tạo chat completion](#generate-a-chat-completion)
- [Tạo mô hình](#create-a-model)
- [Liệt kê các mô hình cục bộ](#list-local-models)
- [Xem thông tin mô hình](#show-model-information)
- [Sao chép mô hình](#copy-a-model)
- [Xóa mô hình](#delete-a-model)
- [Tải mô hình (pull)](#pull-a-model)
- [Đẩy mô hình (push)](#push-a-model)
- [Tạo embedding](#generate-embeddings)
- [Liệt kê các mô hình đang chạy](#list-running-models)
- [Phiên bản](#version)

## Quy ước {#conventions}

### Tên mô hình {#model-names}

Tên mô hình có định dạng `model:tag`, trong đó `model` có thể có thêm namespace (không bắt buộc) như `example/model`. Một số ví dụ là `orca-mini:3b-q8_0` và `llama3:70b`. Tag là tùy chọn và nếu không cung cấp sẽ mặc định là `latest`. Tag dùng để xác định một phiên bản cụ thể.

### Khoảng thời gian {#durations}

Mọi khoảng thời gian đều được trả về theo nano giây.

### Phản hồi dạng luồng (streaming) {#streaming-responses}

Một số endpoint trả phản hồi dạng luồng các đối tượng JSON. Có thể tắt streaming bằng cách truyền `{"stream": false}` cho các endpoint này.

## Tạo completion {#generate-a-completion}

```
POST /api/generate
```

Tạo phản hồi cho một prompt với mô hình được chỉ định. Đây là endpoint streaming nên sẽ có một chuỗi các phản hồi. Đối tượng phản hồi cuối cùng sẽ gồm số liệu thống kê và dữ liệu bổ sung của yêu cầu.

### Tham số {#parameters}

- `model`: (bắt buộc) [tên mô hình](#model-names)
- `prompt`: prompt cần tạo phản hồi
- `suffix`: văn bản đứng sau phản hồi của mô hình
- `images`: (tùy chọn) danh sách ảnh mã hóa base64 (cho các mô hình đa phương thức như `llava`)
- `think`: (cho các mô hình có suy nghĩ) mô hình có nên suy nghĩ trước khi phản hồi hay không

Tham số nâng cao (tùy chọn):

- `format`: định dạng trả về phản hồi. Có thể là `json` hoặc một JSON schema
- `system`: system message (ghi đè giá trị đã định nghĩa trong `Modelfile`)
- `template`: mẫu prompt cần dùng (ghi đè giá trị đã định nghĩa trong `Modelfile`)
- `stream`: nếu là `false`, phản hồi sẽ được trả về dưới dạng một đối tượng phản hồi duy nhất thay vì một luồng đối tượng
- `raw`: nếu là `true`, sẽ không áp dụng định dạng nào cho prompt. Bạn có thể dùng tham số `raw` nếu đang chỉ định một prompt đã áp mẫu đầy đủ trong yêu cầu gửi tới API
- `keep_alive`: điều khiển thời gian mô hình ở lại trong bộ nhớ sau yêu cầu (mặc định: `5m`)
- `context` (không còn khuyến nghị): tham số context trả về từ một yêu cầu `/generate` trước đó, có thể dùng để giữ một bộ nhớ hội thoại ngắn

#### Kết quả có cấu trúc {#structured-outputs}

Kết quả có cấu trúc được hỗ trợ bằng cách cung cấp một JSON schema trong tham số `format`. Mô hình sẽ tạo phản hồi khớp với schema. Xem ví dụ [kết quả có cấu trúc](#request-structured-outputs) bên dưới.

#### Chế độ JSON {#json-mode}

Bật chế độ JSON bằng cách đặt tham số `format` là `json`. Phản hồi sẽ có cấu trúc là một đối tượng JSON hợp lệ. Xem [ví dụ](#request-json-mode) chế độ JSON bên dưới.

> [!IMPORTANT]
> Điều quan trọng là phải hướng dẫn mô hình dùng JSON trong `prompt`. Nếu không, mô hình có thể sinh ra rất nhiều khoảng trắng.

### Ví dụ {#examples}

#### Yêu cầu generate (Streaming) {#generate-request-streaming}

##### Yêu cầu {#request}

```shell
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Why is the sky blue?"
}'
```

##### Phản hồi {#response}

Trả về một luồng các đối tượng JSON:

```json
{
  "model": "llama3.2",
  "created_at": "2023-08-04T08:52:19.385406455-07:00",
  "response": "The",
  "done": false
}
```

Phản hồi cuối cùng trong luồng cũng chứa thêm dữ liệu về quá trình tạo:

- `total_duration`: thời gian dành để tạo phản hồi
- `load_duration`: thời gian (nano giây) dành để nạp mô hình
- `prompt_eval_count`: số token trong prompt
- `prompt_eval_duration`: thời gian (nano giây) dành để đánh giá prompt
- `eval_count`: số token trong phản hồi
- `eval_duration`: thời gian (nano giây) dành để tạo phản hồi
- `context`: bản mã hóa của cuộc hội thoại dùng trong phản hồi này, có thể gửi trong yêu cầu tiếp theo để giữ bộ nhớ hội thoại
- `response`: rỗng nếu phản hồi được truyền theo luồng; nếu không truyền theo luồng, trường này chứa toàn bộ phản hồi

Để tính tốc độ tạo phản hồi theo token trên giây (token/s), hãy lấy `eval_count` / `eval_duration` * `10^9`.

```json
{
  "model": "llama3.2",
  "created_at": "2023-08-04T19:22:45.499127Z",
  "response": "",
  "done": true,
  "context": [1, 2, 3],
  "total_duration": 10706818083,
  "load_duration": 6338219291,
  "prompt_eval_count": 26,
  "prompt_eval_duration": 130079000,
  "eval_count": 259,
  "eval_duration": 4232710000
}
```

#### Yêu cầu (không streaming) {#request-no-streaming}

##### Yêu cầu {#request-1}

Khi tắt streaming, có thể nhận phản hồi trong một lần trả lời duy nhất.

```shell
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Why is the sky blue?",
  "stream": false
}'
```

##### Phản hồi {#response-1}

Nếu `stream` được đặt là `false`, phản hồi sẽ là một đối tượng JSON duy nhất:

```json
{
  "model": "llama3.2",
  "created_at": "2023-08-04T19:22:45.499127Z",
  "response": "The sky is blue because it is the color of the sky.",
  "done": true,
  "context": [1, 2, 3],
  "total_duration": 5043500667,
  "load_duration": 5025959,
  "prompt_eval_count": 26,
  "prompt_eval_duration": 325953000,
  "eval_count": 290,
  "eval_duration": 4709213000
}
```

#### Yêu cầu (có suffix) {#request-with-suffix}

##### Yêu cầu {#request-2}

```shell
curl http://localhost:11434/api/generate -d '{
  "model": "codellama:code",
  "prompt": "def compute_gcd(a, b):",
  "suffix": "    return result",
  "options": {
    "temperature": 0
  },
  "stream": false
}'
```

##### Phản hồi {#response-2}

```json5
{
  "model": "codellama:code",
  "created_at": "2024-07-22T20:47:51.147561Z",
  "response": "\n  if a == 0:\n    return b\n  else:\n    return compute_gcd(b % a, a)\n\ndef compute_lcm(a, b):\n  result = (a * b) / compute_gcd(a, b)\n",
  "done": true,
  "done_reason": "stop",
  "context": [...],
  "total_duration": 1162761250,
  "load_duration": 6683708,
  "prompt_eval_count": 17,
  "prompt_eval_duration": 201222000,
  "eval_count": 63,
  "eval_duration": 953997000
}
```

#### Yêu cầu (kết quả có cấu trúc) {#request-structured-outputs}

##### Yêu cầu {#request-3}

```shell
curl -X POST http://localhost:11434/api/generate -H "Content-Type: application/json" -d '{
  "model": "llama3.1:8b",
  "prompt": "Ollama is 22 years old and is busy saving the world. Respond using JSON",
  "stream": false,
  "format": {
    "type": "object",
    "properties": {
      "age": {
        "type": "integer"
      },
      "available": {
        "type": "boolean"
      }
    },
    "required": [
      "age",
      "available"
    ]
  }
}'
```

##### Phản hồi {#response-3}

```json
{
  "model": "llama3.1:8b",
  "created_at": "2024-12-06T00:48:09.983619Z",
  "response": "{\n  \"age\": 22,\n  \"available\": true\n}",
  "done": true,
  "done_reason": "stop",
  "context": [1, 2, 3],
  "total_duration": 1075509083,
  "load_duration": 567678166,
  "prompt_eval_count": 28,
  "prompt_eval_duration": 236000000,
  "eval_count": 16,
  "eval_duration": 269000000
}
```

#### Yêu cầu (chế độ JSON) {#request-json-mode}

> [!IMPORTANT]
> Khi `format` được đặt là `json`, kết quả luôn là một đối tượng JSON đúng cú pháp. Điều quan trọng là cũng phải hướng dẫn mô hình phản hồi bằng JSON.

##### Yêu cầu {#request-4}

```shell
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "What color is the sky at different times of the day? Respond using JSON",
  "format": "json",
  "stream": false
}'
```

##### Phản hồi {#response-4}

```json
{
  "model": "llama3.2",
  "created_at": "2023-11-09T21:07:55.186497Z",
  "response": "{\n\"morning\": {\n\"color\": \"blue\"\n},\n\"noon\": {\n\"color\": \"blue-gray\"\n},\n\"afternoon\": {\n\"color\": \"warm gray\"\n},\n\"evening\": {\n\"color\": \"orange\"\n}\n}\n",
  "done": true,
  "context": [1, 2, 3],
  "total_duration": 4648158584,
  "load_duration": 4071084,
  "prompt_eval_count": 36,
  "prompt_eval_duration": 439038000,
  "eval_count": 180,
  "eval_duration": 4196918000
}
```

Giá trị của `response` sẽ là một chuỗi chứa JSON tương tự như:

```json
{
  "morning": {
    "color": "blue"
  },
  "noon": {
    "color": "blue-gray"
  },
  "afternoon": {
    "color": "warm gray"
  },
  "evening": {
    "color": "orange"
  }
}
```

#### Yêu cầu (có ảnh) {#request-with-images}

Để gửi ảnh cho các mô hình đa phương thức như `llava` hoặc `bakllava`, hãy cung cấp danh sách `images` mã hóa base64:

#### Yêu cầu {#request-5}

```shell
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt":"What is in this picture?",
  "stream": false,
  "images": ["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"]
}'
```

#### Phản hồi {#response-5}

```json
{
  "model": "llava",
  "created_at": "2023-11-03T15:36:02.583064Z",
  "response": "A happy cartoon character, which is cute and cheerful.",
  "done": true,
  "context": [1, 2, 3],
  "total_duration": 2938432250,
  "load_duration": 2559292,
  "prompt_eval_count": 1,
  "prompt_eval_duration": 2195557000,
  "eval_count": 44,
  "eval_duration": 736432000
}
```

#### Yêu cầu (chế độ Raw) {#request-raw-mode}

Trong một số trường hợp, bạn có thể muốn bỏ qua hệ thống mẫu và cung cấp một prompt đầy đủ. Khi đó, bạn có thể dùng tham số `raw` để tắt việc áp mẫu. Lưu ý chế độ raw sẽ không trả về context.

##### Yêu cầu {#request-6}

```shell
curl http://localhost:11434/api/generate -d '{
  "model": "mistral",
  "prompt": "[INST] why is the sky blue? [/INST]",
  "raw": true,
  "stream": false
}'
```

#### Yêu cầu (kết quả có thể tái lập) {#request-reproducible-outputs}

Để có kết quả tái lập được, hãy đặt `seed` là một số:

##### Yêu cầu {#request-7}

```shell
curl http://localhost:11434/api/generate -d '{
  "model": "mistral",
  "prompt": "Why is the sky blue?",
  "options": {
    "seed": 123
  }
}'
```

##### Phản hồi {#response-6}

```json
{
  "model": "mistral",
  "created_at": "2023-11-03T15:36:02.583064Z",
  "response": " The sky appears blue because of a phenomenon called Rayleigh scattering.",
  "done": true,
  "total_duration": 8493852375,
  "load_duration": 6589624375,
  "prompt_eval_count": 14,
  "prompt_eval_duration": 119039000,
  "eval_count": 110,
  "eval_duration": 1779061000
}
```

#### Yêu cầu generate (có options) {#generate-request-with-options}

Nếu muốn đặt các tùy chọn riêng cho mô hình khi chạy thay vì trong Modelfile, bạn có thể dùng tham số `options`. Ví dụ này đặt mọi tùy chọn có sẵn, nhưng bạn có thể đặt riêng từng tùy chọn và bỏ qua những tùy chọn không muốn ghi đè.

##### Yêu cầu {#request-8}

```shell
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Why is the sky blue?",
  "stream": false,
  "options": {
    "num_keep": 5,
    "seed": 42,
    "num_predict": 100,
    "top_k": 20,
    "top_p": 0.9,
    "min_p": 0.0,
    "typical_p": 0.7,
    "repeat_last_n": 33,
    "temperature": 0.8,
    "repeat_penalty": 1.2,
    "presence_penalty": 1.5,
    "frequency_penalty": 1.0,
    "penalize_newline": true,
    "stop": ["\n", "user:"],
    "numa": false,
    "num_ctx": 1024,
    "num_batch": 2,
    "num_gpu": 1,
    "main_gpu": 0,
    "use_mmap": true,
    "num_thread": 8
  }
}'
```

##### Phản hồi {#response-7}

```json
{
  "model": "llama3.2",
  "created_at": "2023-08-04T19:22:45.499127Z",
  "response": "The sky is blue because it is the color of the sky.",
  "done": true,
  "context": [1, 2, 3],
  "total_duration": 4935886791,
  "load_duration": 534986708,
  "prompt_eval_count": 26,
  "prompt_eval_duration": 107345000,
  "eval_count": 237,
  "eval_duration": 4289432000
}
```

#### Nạp mô hình {#load-a-model}

Nếu cung cấp prompt rỗng, mô hình sẽ được nạp vào bộ nhớ.

##### Yêu cầu {#request-9}

```shell
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2"
}'
```

##### Phản hồi {#response-8}

Trả về một đối tượng JSON duy nhất:

```json
{
  "model": "llama3.2",
  "created_at": "2023-12-18T19:52:07.071755Z",
  "response": "",
  "done": true
}
```

#### Gỡ mô hình khỏi bộ nhớ {#unload-a-model}

Nếu cung cấp prompt rỗng và tham số `keep_alive` được đặt là `0`, mô hình sẽ được gỡ khỏi bộ nhớ.

##### Yêu cầu {#request-10}

```shell
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "keep_alive": 0
}'
```

##### Phản hồi {#response-9}

Trả về một đối tượng JSON duy nhất:

```json
{
  "model": "llama3.2",
  "created_at": "2024-09-12T03:54:03.516566Z",
  "response": "",
  "done": true,
  "done_reason": "unload"
}
```

## Tạo chat completion {#generate-a-chat-completion}

```
POST /api/chat
```

Tạo tin nhắn tiếp theo trong một cuộc trò chuyện với mô hình được chỉ định. Đây là endpoint streaming nên sẽ có một chuỗi các phản hồi. Có thể tắt streaming bằng `"stream": false`. Đối tượng phản hồi cuối cùng sẽ gồm số liệu thống kê và dữ liệu bổ sung của yêu cầu.

### Tham số {#parameters-1}

- `model`: (bắt buộc) [tên mô hình](#model-names)
- `messages`: các tin nhắn của cuộc trò chuyện, có thể dùng để giữ bộ nhớ hội thoại
- `tools`: danh sách các công cụ dạng JSON để mô hình dùng nếu được hỗ trợ
- `think`: (cho các mô hình có suy nghĩ) mô hình có nên suy nghĩ trước khi phản hồi hay không

Đối tượng `message` có các trường sau:

- `role`: vai trò của tin nhắn, là `system`, `user`, `assistant` hoặc `tool`
- `content`: nội dung của tin nhắn
- `thinking`: (cho các mô hình có suy nghĩ) quá trình suy nghĩ của mô hình
- `images` (tùy chọn): danh sách ảnh đưa vào tin nhắn (cho các mô hình đa phương thức như `llava`)
- `tool_calls` (tùy chọn): danh sách các công cụ dạng JSON mà mô hình muốn dùng
- `tool_name` (tùy chọn): thêm tên công cụ đã được thực thi để thông báo kết quả cho mô hình

Tham số nâng cao (tùy chọn):

- `format`: định dạng trả về phản hồi. Có thể là `json` hoặc một JSON schema.
- `stream`: nếu là `false`, phản hồi sẽ được trả về dưới dạng một đối tượng phản hồi duy nhất thay vì một luồng đối tượng
- `keep_alive`: điều khiển thời gian mô hình ở lại trong bộ nhớ sau yêu cầu (mặc định: `5m`)

### Gọi công cụ (tool calling) {#tool-calling}

Gọi công cụ được hỗ trợ bằng cách cung cấp danh sách công cụ trong tham số `tools`. Mô hình sẽ tạo phản hồi gồm danh sách các lệnh gọi công cụ. Xem ví dụ [Yêu cầu chat (Streaming có công cụ)](#chat-request-streaming-with-tools) bên dưới.

Mô hình cũng có thể giải thích kết quả của lệnh gọi công cụ trong phản hồi. Xem ví dụ [Yêu cầu chat (có lịch sử, có công cụ)](#chat-request-with-history-with-tools) bên dưới.

[Xem các mô hình có khả năng gọi công cụ](https://ollama.com/search?c=tool).

### Kết quả có cấu trúc {#structured-outputs-1}

Kết quả có cấu trúc được hỗ trợ bằng cách cung cấp một JSON schema trong tham số `format`. Mô hình sẽ tạo phản hồi khớp với schema. Xem ví dụ [Yêu cầu chat (kết quả có cấu trúc)](#chat-request-structured-outputs) bên dưới.

### Ví dụ {#examples-1}

#### Yêu cầu chat (Streaming) {#chat-request-streaming}

##### Yêu cầu {#request-11}

Gửi một tin nhắn chat với phản hồi dạng luồng.

```shell
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "messages": [
    {
      "role": "user",
      "content": "why is the sky blue?"
    }
  ]
}'
```

##### Phản hồi {#response-10}

Trả về một luồng các đối tượng JSON:

```json
{
  "model": "llama3.2",
  "created_at": "2023-08-04T08:52:19.385406455-07:00",
  "message": {
    "role": "assistant",
    "content": "The",
    "images": null
  },
  "done": false
}
```

Phản hồi cuối cùng:

```json
{
  "model": "llama3.2",
  "created_at": "2023-08-04T19:22:45.499127Z",
  "message": {
    "role": "assistant",
    "content": ""
  },
  "done": true,
  "total_duration": 4883583458,
  "load_duration": 1334875,
  "prompt_eval_count": 26,
  "prompt_eval_duration": 342546000,
  "eval_count": 282,
  "eval_duration": 4535599000
}
```

#### Yêu cầu chat (Streaming có công cụ) {#chat-request-streaming-with-tools}

##### Yêu cầu {#request-12}

```shell
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "messages": [
    {
      "role": "user",
      "content": "what is the weather in tokyo?"
    }
  ],
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "get_weather",
        "description": "Get the weather in a given city",
        "parameters": {
          "type": "object",
          "properties": {
            "city": {
              "type": "string",
              "description": "The city to get the weather for"
            }
          },
          "required": ["city"]
        }
      }
    }
  ],
  "stream": true
}'
```

##### Phản hồi {#response-11}

Trả về một luồng các đối tượng JSON:
```json
{
    "model": "llama3.2",
    "created_at": "2025-07-07T20:22:19.184789Z",
    "message": {
        "role": "assistant",
        "content": "",
        "tool_calls": [
            {
                "function": {
                    "name": "get_weather",
                    "arguments": {
                        "city": "Tokyo"
                    }
                },
            }
        ]
    },
    "done": false
}
```

Phản hồi cuối cùng:

```json
{
  "model":"llama3.2",
  "created_at":"2025-07-07T20:22:19.19314Z",
  "message": {
    "role": "assistant",
    "content": ""
  },
  "done_reason": "stop",
  "done": true,
  "total_duration": 182242375,
  "load_duration": 41295167,
  "prompt_eval_count": 169,
  "prompt_eval_duration": 24573166,
  "eval_count": 15,
  "eval_duration": 115959084
}
```

#### Yêu cầu chat (không streaming) {#chat-request-no-streaming}

##### Yêu cầu {#request-13}

```shell
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "messages": [
    {
      "role": "user",
      "content": "why is the sky blue?"
    }
  ],
  "stream": false
}'
```

##### Phản hồi {#response-12}

```json
{
  "model": "llama3.2",
  "created_at": "2023-12-12T14:13:43.416799Z",
  "message": {
    "role": "assistant",
    "content": "Hello! How are you today?"
  },
  "done": true,
  "total_duration": 5191566416,
  "load_duration": 2154458,
  "prompt_eval_count": 26,
  "prompt_eval_duration": 383809000,
  "eval_count": 298,
  "eval_duration": 4799921000
}
```

#### Yêu cầu chat (không streaming, có công cụ) {#chat-request-no-streaming-with-tools}

##### Yêu cầu {#request-14}


```shell
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "messages": [
    {
      "role": "user",
      "content": "what is the weather in tokyo?"
    }
  ],
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "get_weather",
        "description": "Get the weather in a given city",
        "parameters": {
          "type": "object",
          "properties": {
            "city": {
              "type": "string",
              "description": "The city to get the weather for"
            }
          },
          "required": ["city"]
        }
      }
    }
  ],
  "stream": false 
}'
```

##### Phản hồi {#response-13}

```json
{
  "model": "llama3.2",
  "created_at": "2025-07-07T20:32:53.844124Z",
  "message": {
    "role": "assistant",
    "content": "",
    "tool_calls": [
      {
        "function": {
          "name": "get_weather",
          "arguments": {
            "city": "Tokyo"
          }
        },
      }
    ]
  },
  "done_reason": "stop",
  "done": true,
  "total_duration": 3244883583,
  "load_duration": 2969184542,
  "prompt_eval_count": 169,
  "prompt_eval_duration": 141656333,
  "eval_count": 18,
  "eval_duration": 133293625
}
```

#### Yêu cầu chat (kết quả có cấu trúc) {#chat-request-structured-outputs}

##### Yêu cầu {#request-15}

```shell
curl -X POST http://localhost:11434/api/chat -H "Content-Type: application/json" -d '{
  "model": "llama3.1",
  "messages": [{"role": "user", "content": "Ollama is 22 years old and busy saving the world. Return a JSON object with the age and availability."}],
  "stream": false,
  "format": {
    "type": "object",
    "properties": {
      "age": {
        "type": "integer"
      },
      "available": {
        "type": "boolean"
      }
    },
    "required": [
      "age",
      "available"
    ]
  },
  "options": {
    "temperature": 0
  }
}'
```

##### Phản hồi {#response-14}

```json
{
  "model": "llama3.1",
  "created_at": "2024-12-06T00:46:58.265747Z",
  "message": { "role": "assistant", "content": "{\"age\": 22, \"available\": false}" },
  "done_reason": "stop",
  "done": true,
  "total_duration": 2254970291,
  "load_duration": 574751416,
  "prompt_eval_count": 34,
  "prompt_eval_duration": 1502000000,
  "eval_count": 12,
  "eval_duration": 175000000
}
```

#### Yêu cầu chat (có lịch sử) {#chat-request-with-history}

Gửi một tin nhắn chat kèm lịch sử hội thoại. Bạn có thể dùng cùng cách này để bắt đầu cuộc trò chuyện bằng prompt multi-shot hoặc chain-of-thought.

##### Yêu cầu {#request-16}

```shell
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "messages": [
    {
      "role": "user",
      "content": "why is the sky blue?"
    },
    {
      "role": "assistant",
      "content": "due to rayleigh scattering."
    },
    {
      "role": "user",
      "content": "how is that different than mie scattering?"
    }
  ]
}'
```

##### Phản hồi {#response-15}

Trả về một luồng các đối tượng JSON:

```json
{
  "model": "llama3.2",
  "created_at": "2023-08-04T08:52:19.385406455-07:00",
  "message": {
    "role": "assistant",
    "content": "The"
  },
  "done": false
}
```

Phản hồi cuối cùng:

```json
{
  "model": "llama3.2",
  "created_at": "2023-08-04T19:22:45.499127Z",
  "done": true,
  "total_duration": 8113331500,
  "load_duration": 6396458,
  "prompt_eval_count": 61,
  "prompt_eval_duration": 398801000,
  "eval_count": 468,
  "eval_duration": 7701267000
}
```


#### Yêu cầu chat (có lịch sử, có công cụ) {#chat-request-with-history-with-tools}

##### Yêu cầu {#request-17}

```shell
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "messages": [
    {
      "role": "user",
      "content": "what is the weather in Toronto?"
    },
    // the message from the model appended to history
    {
      "role": "assistant",
      "content": "",
      "tool_calls": [
        {
          "function": {
            "name": "get_temperature",
            "arguments": {
              "city": "Toronto"
            }
          },
        }
      ]
    },
    // the tool call result appended to history
    {
      "role": "tool",
      "content": "11 degrees celsius",
      "tool_name": "get_temperature",
    }
  ],
  "stream": false,
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "get_weather",
        "description": "Get the weather in a given city",
        "parameters": {
          "type": "object",
          "properties": {
            "city": {
              "type": "string",
              "description": "The city to get the weather for"
            }
          },
          "required": ["city"]
        }
      }
    }
  ]
}'
```

##### Phản hồi {#response-16}

```json
{
  "model": "llama3.2",
  "created_at": "2025-07-07T20:43:37.688511Z",
  "message": {
    "role": "assistant",
    "content": "The current temperature in Toronto is 11°C."
  },
  "done_reason": "stop",
  "done": true,
  "total_duration": 890771750,
  "load_duration": 707634750,
  "prompt_eval_count": 94,
  "prompt_eval_duration": 91703208,
  "eval_count": 11,
  "eval_duration": 90282125
}

```


#### Yêu cầu chat (có ảnh) {#chat-request-with-images}

##### Yêu cầu {#request-18}

Gửi một tin nhắn chat kèm ảnh. Các ảnh cần được cung cấp dưới dạng mảng, từng ảnh được mã hóa Base64.

```shell
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    {
      "role": "user",
      "content": "what is in this image?",
      "images": ["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"]
    }
  ]
}'
```

##### Phản hồi {#response-17}

```json
{
  "model": "llava",
  "created_at": "2023-12-13T22:42:50.203334Z",
  "message": {
    "role": "assistant",
    "content": " The image features a cute, little pig with an angry facial expression. It's wearing a heart on its shirt and is waving in the air. This scene appears to be part of a drawing or sketching project.",
    "images": null
  },
  "done": true,
  "total_duration": 1668506709,
  "load_duration": 1986209,
  "prompt_eval_count": 26,
  "prompt_eval_duration": 359682000,
  "eval_count": 83,
  "eval_duration": 1303285000
}
```

#### Yêu cầu chat (kết quả có thể tái lập) {#chat-request-reproducible-outputs}

##### Yêu cầu {#request-19}

```shell
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "messages": [
    {
      "role": "user",
      "content": "Hello!"
    }
  ],
  "options": {
    "seed": 101,
    "temperature": 0
  }
}'
```

##### Phản hồi {#response-18}

```json
{
  "model": "llama3.2",
  "created_at": "2023-12-12T14:13:43.416799Z",
  "message": {
    "role": "assistant",
    "content": "Hello! How are you today?"
  },
  "done": true,
  "total_duration": 5191566416,
  "load_duration": 2154458,
  "prompt_eval_count": 26,
  "prompt_eval_duration": 383809000,
  "eval_count": 298,
  "eval_duration": 4799921000
}
```

#### Yêu cầu chat (có công cụ) {#chat-request-with-tools}

##### Yêu cầu {#request-20}

```shell
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "messages": [
    {
      "role": "user",
      "content": "What is the weather today in Paris?"
    }
  ],
  "stream": false,
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "get_current_weather",
        "description": "Get the current weather for a location",
        "parameters": {
          "type": "object",
          "properties": {
            "location": {
              "type": "string",
              "description": "The location to get the weather for, e.g. San Francisco, CA"
            },
            "format": {
              "type": "string",
              "description": "The format to return the weather in, e.g. 'celsius' or 'fahrenheit'",
              "enum": ["celsius", "fahrenheit"]
            }
          },
          "required": ["location", "format"]
        }
      }
    }
  ]
}'
```

##### Phản hồi {#response-19}

```json
{
  "model": "llama3.2",
  "created_at": "2024-07-22T20:33:28.123648Z",
  "message": {
    "role": "assistant",
    "content": "",
    "tool_calls": [
      {
        "function": {
          "name": "get_current_weather",
          "arguments": {
            "format": "celsius",
            "location": "Paris, FR"
          }
        }
      }
    ]
  },
  "done_reason": "stop",
  "done": true,
  "total_duration": 885095291,
  "load_duration": 3753500,
  "prompt_eval_count": 122,
  "prompt_eval_duration": 328493000,
  "eval_count": 33,
  "eval_duration": 552222000
}
```

#### Nạp mô hình {#load-a-model-1}

Nếu mảng messages rỗng, mô hình sẽ được nạp vào bộ nhớ.

##### Yêu cầu {#request-21}

```shell
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "messages": []
}'
```

##### Phản hồi {#response-20}

```json
{
  "model": "llama3.2",
  "created_at":"2024-09-12T21:17:29.110811Z",
  "message": {
    "role": "assistant",
    "content": ""
  },
  "done_reason": "load",
  "done": true
}
```

#### Gỡ mô hình khỏi bộ nhớ {#unload-a-model-1}

Nếu mảng messages rỗng và tham số `keep_alive` được đặt là `0`, mô hình sẽ được gỡ khỏi bộ nhớ.

##### Yêu cầu {#request-22}

```shell
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "messages": [],
  "keep_alive": 0
}'
```

##### Phản hồi {#response-21}

Trả về một đối tượng JSON duy nhất:

```json
{
  "model": "llama3.2",
  "created_at":"2024-09-12T21:33:17.547535Z",
  "message": {
    "role": "assistant",
    "content": ""
  },
  "done_reason": "unload",
  "done": true
}
```

## Tạo mô hình {#create-a-model}

```
POST /api/create
```

Tạo mô hình từ:
 * một mô hình khác;
 * một thư mục safetensors; hoặc
 * một tệp GGUF.

Nếu bạn tạo mô hình từ thư mục safetensors hoặc từ tệp GGUF, bạn phải [tạo một blob](#create-a-blob) cho từng tệp, rồi dùng tên tệp và mã băm SHA256 tương ứng với mỗi blob trong trường `files`.

### Tham số {#parameters-2}

- `model`: tên mô hình cần tạo
- `from`: (tùy chọn) tên mô hình có sẵn dùng để tạo mô hình mới
- `files`: (tùy chọn) từ điển ánh xạ tên tệp tới mã băm SHA256 của các blob dùng để tạo mô hình
- `adapters`: (tùy chọn) từ điển ánh xạ tên tệp tới mã băm SHA256 của các blob cho adapter LORA
- `template`: (tùy chọn) mẫu prompt của mô hình
- `license`: (tùy chọn) một chuỗi hoặc danh sách chuỗi chứa giấy phép của mô hình
- `system`: (tùy chọn) một chuỗi chứa system prompt của mô hình
- `messages`: (tùy chọn) danh sách các đối tượng tin nhắn dùng để tạo cuộc hội thoại
- `stream`: (tùy chọn) nếu là `false`, phản hồi sẽ được trả về dưới dạng một đối tượng phản hồi duy nhất thay vì một luồng đối tượng
- `quantize` (tùy chọn): lượng tử hóa một mô hình chưa lượng tử hóa (ví dụ float16)

#### Các kiểu lượng tử hóa {#quantization-types}

| Kiểu | Khuyến nghị |
| --- | :-: |
| q4_K_M | * |
| q4_K_S | |
| q8_0 | * |

### Ví dụ {#examples-2}

#### Tạo mô hình mới {#create-a-new-model}

Tạo mô hình mới từ một mô hình có sẵn.

##### Yêu cầu {#request-23}

```shell
curl http://localhost:11434/api/create -d '{
  "model": "mario",
  "from": "llama3.2",
  "system": "You are Mario from Super Mario Bros."
}'
```

##### Phản hồi {#response-22}

Trả về một luồng các đối tượng JSON:

```json
{"status":"reading model metadata"}
{"status":"creating system layer"}
{"status":"using already created layer sha256:22f7f8ef5f4c791c1b03d7eb414399294764d7cc82c7e94aa81a1feb80a983a2"}
{"status":"using already created layer sha256:8c17c2ebb0ea011be9981cc3922db8ca8fa61e828c5d3f44cb6ae342bf80460b"}
{"status":"using already created layer sha256:7c23fb36d80141c4ab8cdbb61ee4790102ebd2bf7aeff414453177d4f2110e5d"}
{"status":"using already created layer sha256:2e0493f67d0c8c9c68a8aeacdf6a38a2151cb3c4c1d42accf296e19810527988"}
{"status":"using already created layer sha256:2759286baa875dc22de5394b4a925701b1896a7e3f8e53275c36f75a877a82c9"}
{"status":"writing layer sha256:df30045fe90f0d750db82a058109cecd6d4de9c90a3d75b19c09e5f64580bb42"}
{"status":"writing layer sha256:f18a68eb09bf925bb1b669490407c1b1251c5db98dc4d3d81f3088498ea55690"}
{"status":"writing manifest"}
{"status":"success"}
```

#### Lượng tử hóa mô hình {#quantize-a-model}

Lượng tử hóa một mô hình chưa lượng tử hóa.

##### Yêu cầu {#request-24}

```shell
curl http://localhost:11434/api/create -d '{
  "model": "llama3.2:quantized",
  "from": "llama3.2:3b-instruct-fp16",
  "quantize": "q4_K_M"
}'
```

##### Phản hồi {#response-23}

Trả về một luồng các đối tượng JSON:

```json
{"status":"quantizing F16 model to Q4_K_M","digest":"0","total":6433687776,"completed":12302}
{"status":"quantizing F16 model to Q4_K_M","digest":"0","total":6433687776,"completed":6433687552}
{"status":"verifying conversion"}
{"status":"creating new layer sha256:fb7f4f211b89c6c4928ff4ddb73db9f9c0cfca3e000c3e40d6cf27ddc6ca72eb"}
{"status":"using existing layer sha256:966de95ca8a62200913e3f8bfbf84c8494536f1b94b49166851e76644e966396"}
{"status":"using existing layer sha256:fcc5a6bec9daf9b561a68827b67ab6088e1dba9d1fa2a50d7bbcc8384e0a265d"}
{"status":"using existing layer sha256:a70ff7e570d97baaf4e62ac6e6ad9975e04caa6d900d3742d37698494479e0cd"}
{"status":"using existing layer sha256:56bb8bd477a519ffa694fc449c2413c6f0e1d3b1c88fa7e3c9d88d3ae49d4dcb"}
{"status":"writing manifest"}
{"status":"success"}
```

#### Tạo mô hình từ GGUF {#create-a-model-from-gguf}

Tạo mô hình từ một tệp GGUF. Tham số `files` cần điền tên tệp và mã băm SHA256 của tệp GGUF bạn muốn dùng. Hãy dùng [/api/blobs/:digest](#push-a-blob) để đẩy tệp GGUF lên máy chủ trước khi gọi API này.


##### Yêu cầu {#request-25}

```shell
curl http://localhost:11434/api/create -d '{
  "model": "my-gguf-model",
  "files": {
    "test.gguf": "sha256:432f310a77f4650a88d0fd59ecdd7cebed8d684bafea53cbff0473542964f0c3"
  }
}'
```

##### Phản hồi {#response-24}

Trả về một luồng các đối tượng JSON:

```json
{"status":"parsing GGUF"}
{"status":"using existing layer sha256:432f310a77f4650a88d0fd59ecdd7cebed8d684bafea53cbff0473542964f0c3"}
{"status":"writing manifest"}
{"status":"success"}
```


#### Tạo mô hình từ thư mục Safetensors {#create-a-model-from-a-safetensors-directory}

Tham số `files` cần chứa một từ điển các tệp của mô hình safetensors, gồm tên tệp và mã băm SHA256 của từng tệp. Hãy dùng [/api/blobs/:digest](#push-a-blob) để đẩy từng tệp lên máy chủ trước khi gọi API này. Các tệp sẽ nằm trong cache cho đến khi máy chủ Ollama được khởi động lại.

##### Yêu cầu {#request-26}

```shell
curl http://localhost:11434/api/create -d '{
  "model": "fred",
  "files": {
    "config.json": "sha256:dd3443e529fb2290423a0c65c2d633e67b419d273f170259e27297219828e389",
    "generation_config.json": "sha256:88effbb63300dbbc7390143fbbdd9d9fa50587b37e8bfd16c8c90d4970a74a36",
    "special_tokens_map.json": "sha256:b7455f0e8f00539108837bfa586c4fbf424e31f8717819a6798be74bef813d05",
    "tokenizer.json": "sha256:bbc1904d35169c542dffbe1f7589a5994ec7426d9e5b609d07bab876f32e97ab",
    "tokenizer_config.json": "sha256:24e8a6dc2547164b7002e3125f10b415105644fcf02bf9ad8b674c87b1eaaed6",
    "model.safetensors": "sha256:1ff795ff6a07e6a68085d206fb84417da2f083f68391c2843cd2b8ac6df8538f"
  }
}'
```

##### Phản hồi {#response-25}

Trả về một luồng các đối tượng JSON:

```shell
{"status":"converting model"}
{"status":"creating new layer sha256:05ca5b813af4a53d2c2922933936e398958855c44ee534858fcfd830940618b6"}
{"status":"using autodetected template llama3-instruct"}
{"status":"using existing layer sha256:56bb8bd477a519ffa694fc449c2413c6f0e1d3b1c88fa7e3c9d88d3ae49d4dcb"}
{"status":"writing manifest"}
{"status":"success"}
```

## Kiểm tra blob có tồn tại không {#check-if-a-blob-exists}

```shell
HEAD /api/blobs/:digest
```

Bảo đảm blob tệp (Binary Large Object) dùng để tạo mô hình tồn tại trên máy chủ. Việc này kiểm tra máy chủ Ollama của bạn chứ không phải ollama.com.

### Tham số truy vấn {#query-parameters}

- `digest`: mã băm SHA256 của blob

### Ví dụ {#examples-3}

#### Yêu cầu {#request-27}

```shell
curl -I http://localhost:11434/api/blobs/sha256:29fdb92e57cf0827ded04ae6461b5931d01fa595843f55d36f5b275a52087dd2
```

#### Phản hồi {#response-26}

Trả về 200 OK nếu blob tồn tại, 404 Not Found nếu không tồn tại.

## Đẩy blob lên {#push-a-blob}

```
POST /api/blobs/:digest
```

Đẩy một tệp lên máy chủ Ollama để tạo một "blob" (Binary Large Object).

### Tham số truy vấn {#query-parameters-1}

- `digest`: mã băm SHA256 mong đợi của tệp

### Ví dụ {#examples-4}

#### Yêu cầu {#request-28}

```shell
curl -T model.gguf -X POST http://localhost:11434/api/blobs/sha256:29fdb92e57cf0827ded04ae6461b5931d01fa595843f55d36f5b275a52087dd2
```

#### Phản hồi {#response-27}

Trả về 201 Created nếu blob được tạo thành công, 400 Bad Request nếu mã băm sử dụng không như mong đợi.

## Liệt kê các mô hình cục bộ {#list-local-models}

```
GET /api/tags
```

Liệt kê các mô hình có sẵn cục bộ.

### Ví dụ {#examples-5}

#### Yêu cầu {#request-29}

```shell
curl http://localhost:11434/api/tags
```

#### Phản hồi {#response-28}

Sẽ trả về một đối tượng JSON duy nhất.

```json
{
  "models": [
    {
      "name": "deepseek-r1:latest",
      "model": "deepseek-r1:latest",
      "modified_at": "2025-05-10T08:06:48.639712648-07:00",
      "size": 4683075271,
      "digest": "0a8c266910232fd3291e71e5ba1e058cc5af9d411192cf88b6d30e92b6e73163",
      "details": {
        "parent_model": "",
        "format": "gguf",
        "family": "qwen2",
        "families": [
          "qwen2"
        ],
        "parameter_size": "7.6B",
        "quantization_level": "Q4_K_M"
      }
    },
    {
      "name": "llama3.2:latest",
      "model": "llama3.2:latest",
      "modified_at": "2025-05-04T17:37:44.706015396-07:00",
      "size": 2019393189,
      "digest": "a80c4f17acd55265feec403c7aef86be0c25983ab279d83f3bcd3abbcb5b8b72",
      "details": {
        "parent_model": "",
        "format": "gguf",
        "family": "llama",
        "families": [
          "llama"
        ],
        "parameter_size": "3.2B",
        "quantization_level": "Q4_K_M"
      }
    }
  ]
}
```

## Xem thông tin mô hình {#show-model-information}

```
POST /api/show
```

Hiển thị thông tin về một mô hình gồm chi tiết, modelfile, mẫu, tham số, giấy phép và system prompt.

### Tham số {#parameters-3}

- `model`: tên mô hình cần xem
- `verbose`: (tùy chọn) nếu đặt là `true`, trả về dữ liệu đầy đủ cho các trường phản hồi chi tiết

### Ví dụ {#examples-6}

#### Yêu cầu {#request-30}

```shell
curl http://localhost:11434/api/show -d '{
  "model": "llava"
}'
```

#### Phản hồi {#response-29}

```json5
{
  "modelfile": "# Modelfile generated by \"ollama show\"\n# To build a new Modelfile based on this one, replace the FROM line with:\n# FROM llava:latest\n\nFROM /Users/matt/.ollama/models/blobs/sha256:200765e1283640ffbd013184bf496e261032fa75b99498a9613be4e94d63ad52\nTEMPLATE \"\"\"{{ .System }}\nUSER: {{ .Prompt }}\nASSISTANT: \"\"\"\nPARAMETER num_ctx 4096\nPARAMETER stop \"\u003c/s\u003e\"\nPARAMETER stop \"USER:\"\nPARAMETER stop \"ASSISTANT:\"",
  "parameters": "num_keep                       24\nstop                           \"<|start_header_id|>\"\nstop                           \"<|end_header_id|>\"\nstop                           \"<|eot_id|>\"",
  "template": "{{ if .System }}<|start_header_id|>system<|end_header_id|>\n\n{{ .System }}<|eot_id|>{{ end }}{{ if .Prompt }}<|start_header_id|>user<|end_header_id|>\n\n{{ .Prompt }}<|eot_id|>{{ end }}<|start_header_id|>assistant<|end_header_id|>\n\n{{ .Response }}<|eot_id|>",
  "details": {
    "parent_model": "",
    "format": "gguf",
    "family": "llama",
    "families": [
      "llama"
    ],
    "parameter_size": "8.0B",
    "quantization_level": "Q4_0"
  },
  "model_info": {
    "general.architecture": "llama",
    "general.file_type": 2,
    "general.parameter_count": 8030261248,
    "general.quantization_version": 2,
    "llama.attention.head_count": 32,
    "llama.attention.head_count_kv": 8,
    "llama.attention.layer_norm_rms_epsilon": 0.00001,
    "llama.block_count": 32,
    "llama.context_length": 8192,
    "llama.embedding_length": 4096,
    "llama.feed_forward_length": 14336,
    "llama.rope.dimension_count": 128,
    "llama.rope.freq_base": 500000,
    "llama.vocab_size": 128256,
    "tokenizer.ggml.bos_token_id": 128000,
    "tokenizer.ggml.eos_token_id": 128009,
    "tokenizer.ggml.merges": [],            // populates if `verbose=true`
    "tokenizer.ggml.model": "gpt2",
    "tokenizer.ggml.pre": "llama-bpe",
    "tokenizer.ggml.token_type": [],        // populates if `verbose=true`
    "tokenizer.ggml.tokens": []             // populates if `verbose=true`
  },
  "capabilities": [
    "completion",
    "vision"
  ],
}
```

## Sao chép mô hình {#copy-a-model}

```
POST /api/copy
```

Sao chép một mô hình. Tạo một mô hình với tên khác từ một mô hình có sẵn.

### Ví dụ {#examples-7}

#### Yêu cầu {#request-31}

```shell
curl http://localhost:11434/api/copy -d '{
  "source": "llama3.2",
  "destination": "llama3-backup"
}'
```

#### Phản hồi {#response-30}

Trả về 200 OK nếu thành công, hoặc 404 Not Found nếu mô hình nguồn không tồn tại.

## Xóa mô hình {#delete-a-model}

```
DELETE /api/delete
```

Xóa một mô hình và dữ liệu của nó.

### Tham số {#parameters-4}

- `model`: tên mô hình cần xóa

### Ví dụ {#examples-8}

#### Yêu cầu {#request-32}

```shell
curl -X DELETE http://localhost:11434/api/delete -d '{
  "model": "llama3:13b"
}'
```

#### Phản hồi {#response-31}

Trả về 200 OK nếu thành công, 404 Not Found nếu mô hình cần xóa không tồn tại.

## Tải mô hình (pull) {#pull-a-model}

```
POST /api/pull
```

Tải một mô hình từ thư viện ollama. Các lần pull bị hủy sẽ được tiếp tục từ chỗ đã dừng, và nhiều lệnh gọi sẽ dùng chung tiến trình tải.

### Tham số {#parameters-5}

- `model`: tên mô hình cần pull
- `insecure`: (tùy chọn) cho phép kết nối không an toàn tới thư viện. Chỉ dùng khi bạn pull từ thư viện của chính mình trong quá trình phát triển.
- `stream`: (tùy chọn) nếu là `false`, phản hồi sẽ được trả về dưới dạng một đối tượng phản hồi duy nhất thay vì một luồng đối tượng

### Ví dụ {#examples-9}

#### Yêu cầu {#request-33}

```shell
curl http://localhost:11434/api/pull -d '{
  "model": "llama3.2"
}'
```

#### Phản hồi {#response-32}

Nếu không chỉ định `stream`, hoặc đặt là `true`, sẽ trả về một luồng các đối tượng JSON:

Đối tượng đầu tiên là manifest:

```json
{
  "status": "pulling manifest"
}
```

Sau đó là một chuỗi các phản hồi tải xuống. Cho đến khi một lượt tải nào đó hoàn tất, khóa `completed` có thể chưa xuất hiện. Số tệp cần tải phụ thuộc vào số layer được chỉ định trong manifest.

```json
{
  "status": "pulling digestname",
  "digest": "digestname",
  "total": 2142590208,
  "completed": 241970
}
```

Sau khi tải xong tất cả các tệp, các phản hồi cuối cùng là:

```json
{
    "status": "verifying sha256 digest"
}
{
    "status": "writing manifest"
}
{
    "status": "removing any unused layers"
}
{
    "status": "success"
}
```

nếu `stream` được đặt là false, phản hồi sẽ là một đối tượng JSON duy nhất:

```json
{
  "status": "success"
}
```

## Đẩy mô hình (push) {#push-a-model}

```
POST /api/push
```

Tải một mô hình lên thư viện mô hình. Cần đăng ký tại ollama.ai và thêm khóa công khai trước.

### Tham số {#parameters-6}

- `model`: tên mô hình cần push, theo dạng `<namespace>/<model>:<tag>`
- `insecure`: (tùy chọn) cho phép kết nối không an toàn tới thư viện. Chỉ dùng khi bạn push lên thư viện của chính mình trong quá trình phát triển.
- `stream`: (tùy chọn) nếu là `false`, phản hồi sẽ được trả về dưới dạng một đối tượng phản hồi duy nhất thay vì một luồng đối tượng

### Ví dụ {#examples-10}

#### Yêu cầu {#request-34}

```shell
curl http://localhost:11434/api/push -d '{
  "model": "mattw/pygmalion:latest"
}'
```

#### Phản hồi {#response-33}

Nếu không chỉ định `stream`, hoặc đặt là `true`, sẽ trả về một luồng các đối tượng JSON:

```json
{ "status": "retrieving manifest" }
```

và sau đó:

```json
{
  "status": "starting upload",
  "digest": "sha256:bc07c81de745696fdf5afca05e065818a8149fb0c77266fb584d9b2cba3711ab",
  "total": 1928429856
}
```

Sau đó là một chuỗi các phản hồi tải lên:

```json
{
  "status": "starting upload",
  "digest": "sha256:bc07c81de745696fdf5afca05e065818a8149fb0c77266fb584d9b2cba3711ab",
  "total": 1928429856
}
```

Cuối cùng, khi tải lên hoàn tất:

```json
{"status":"pushing manifest"}
{"status":"success"}
```

Nếu `stream` được đặt là `false`, phản hồi sẽ là một đối tượng JSON duy nhất:

```json
{ "status": "success" }
```

## Tạo embedding {#generate-embeddings}

```
POST /api/embed
```

Tạo embedding từ một mô hình

### Tham số {#parameters-7}

- `model`: tên mô hình dùng để tạo embedding
- `input`: văn bản hoặc danh sách văn bản cần tạo embedding

Tham số nâng cao:

- `truncate`: cắt phần cuối của mỗi đầu vào để vừa trong độ dài ngữ cảnh. Trả về lỗi nếu là `false` và vượt quá độ dài ngữ cảnh. Mặc định là `true`
- `keep_alive`: điều khiển thời gian mô hình ở lại trong bộ nhớ sau yêu cầu (mặc định: `5m`)

### Ví dụ {#examples-11}

#### Yêu cầu {#request-35}

```shell
curl http://localhost:11434/api/embed -d '{
  "model": "all-minilm",
  "input": "Why is the sky blue?"
}'
```

#### Phản hồi {#response-34}

```json
{
  "model": "all-minilm",
  "embeddings": [[
    0.010071029, -0.0017594862, 0.05007221, 0.04692972, 0.054916814,
    0.008599704, 0.105441414, -0.025878139, 0.12958129, 0.031952348
  ]],
  "total_duration": 14143917,
  "load_duration": 1019500,
  "prompt_eval_count": 8
}
```

#### Yêu cầu (nhiều đầu vào) {#request-multiple-input}

```shell
curl http://localhost:11434/api/embed -d '{
  "model": "all-minilm",
  "input": ["Why is the sky blue?", "Why is the grass green?"]
}'
```

#### Phản hồi {#response-35}

```json
{
  "model": "all-minilm",
  "embeddings": [[
    0.010071029, -0.0017594862, 0.05007221, 0.04692972, 0.054916814,
    0.008599704, 0.105441414, -0.025878139, 0.12958129, 0.031952348
  ],[
    -0.0098027075, 0.06042469, 0.025257962, -0.006364387, 0.07272725,
    0.017194884, 0.09032035, -0.051705178, 0.09951512, 0.09072481
  ]]
}
```

## Liệt kê các mô hình đang chạy {#list-running-models}
```
GET /api/ps
```

Liệt kê các mô hình hiện đang được nạp vào bộ nhớ.

#### Ví dụ {#examples-12}

### Yêu cầu {#request-36}

```shell
curl http://localhost:11434/api/ps
```

#### Phản hồi {#response-36}

Sẽ trả về một đối tượng JSON duy nhất.

```json
{
  "models": [
    {
      "name": "mistral:latest",
      "model": "mistral:latest",
      "size": 5137025024,
      "digest": "2ae6f6dd7a3dd734790bbbf58b8909a606e0e7e97e94b7604e0aa7ae4490e6d8",
      "details": {
        "parent_model": "",
        "format": "gguf",
        "family": "llama",
        "families": [
          "llama"
        ],
        "parameter_size": "7.2B",
        "quantization_level": "Q4_0"
      },
      "expires_at": "2024-06-04T14:38:31.83753-07:00",
      "size_vram": 5137025024
    }
  ]
}
```

## Tạo embedding (endpoint cũ) {#generate-embedding}

> Lưu ý: endpoint này đã được thay thế bởi `/api/embed`

```
POST /api/embeddings
```

Tạo embedding từ một mô hình

### Tham số {#parameters-8}

- `model`: tên mô hình dùng để tạo embedding
- `prompt`: văn bản cần tạo embedding

Tham số nâng cao:

- `keep_alive`: điều khiển thời gian mô hình ở lại trong bộ nhớ sau yêu cầu (mặc định: `5m`)

### Ví dụ {#examples-13}

#### Yêu cầu {#request-37}

```shell
curl http://localhost:11434/api/embeddings -d '{
  "model": "all-minilm",
  "prompt": "Here is an article about llamas..."
}'
```

#### Phản hồi {#response-37}

```json
{
  "embedding": [
    0.5670403838157654, 0.009260174818336964, 0.23178744316101074, -0.2916173040866852, -0.8924556970596313,
    0.8785552978515625, -0.34576427936553955, 0.5742510557174683, -0.04222835972905159, -0.137906014919281
  ]
}
```

## Phiên bản {#version}

```
GET /api/version
```

Lấy phiên bản Ollama

### Ví dụ {#examples-14}

#### Yêu cầu {#request-38}

```shell
curl http://localhost:11434/api/version
```

#### Phản hồi {#response-38}

```json
{
  "version": "0.5.1"
}
```

