# Triển khai ứng dụng LLM bằng Docker {#deploying-llm-applications-with-docker}

Làm theo hướng dẫn: [Deploy LLM Applications Using Docker](https://www.datacamp.com/tutorial/deploy-llm-applications-using-docker)

## Các cách phát triển và triển khai ứng dụng AI {#approaches-to-developing-and-deploying-ai-applications}

Có hai cách chính để phát triển và triển khai ứng dụng AI:

- **Mã nguồn mở hoàn toàn**: cách này đề cao quyền riêng tư và bảo vệ dữ liệu.
- **Mã nguồn đóng hoàn toàn**: cách này tích hợp nhiều API và dịch vụ đám mây.

Mỗi cách đều có ưu và nhược điểm riêng. Trong bài này, chúng ta chọn cách thứ hai, tức là tích hợp nhiều dịch vụ AI. Cách này cho phép xây dựng một ứng dụng AI nhanh, chỉ mất vài giây để build và triển khai. Trọng tâm của chúng ta là giảm kích thước Docker image, điều có thể đạt được hiệu quả bằng cách tích hợp nhiều dịch vụ AI.

Chúng ta sẽ xây dựng một chatbot hỏi đáp tài liệu đa năng, cho phép người dùng tải lên bất kỳ tài liệu nào và trò chuyện với nó với tốc độ thời gian thực. Chatbot này khá giống NotebookLM của Google.

![Triển khai ứng dụng LLM bằng Docker](https://github.com/user-attachments/assets/1d82de55-3db6-4f70-8ff3-f2c46a5ed6ee)

## Các công cụ sử dụng trong dự án {#tools-used-in-this-project}

1. **Gradio Blocks**: tạo giao diện cho phép người dùng dễ dàng tải lên tài liệu văn bản bất kỳ và trò chuyện với tài liệu đó.
2. **LlamaCloud**: phân tích tệp và trích xuất dữ liệu văn bản sang định dạng markdown.
3. **MixedBread AI**: chuyển các tài liệu đã tải lên thành embedding, đồng thời chuyển tin nhắn trò chuyện thành embedding để truy xuất ngữ cảnh.
4. **Groq Cloud**: truy cập các phản hồi LLM nhanh. Trong dự án này, chúng ta dùng mô hình llama-3.1-70b.
5. **LlamaIndex**: tạo pipeline RAG (Retrieval Augmented Generation) điều phối toàn bộ các dịch vụ AI. Pipeline dùng tệp đã tải lên và tin nhắn của người dùng để tạo câu trả lời có ngữ cảnh.
6. **Docker**: đóng gói ứng dụng, các phụ thuộc, môi trường và cấu hình.
7. **Hugging Face Cloud**: chúng ta đẩy toàn bộ tệp lên kho Spaces, Hugging Face sẽ tự động build image bằng Dockerfile và triển khai lên máy chủ.

## Mã ứng dụng {#application-code}

### app.py {#apppy}

```python
import os

import gradio as gr
from llama_index.core import SimpleDirectoryReader, VectorStoreIndex
from llama_index.embeddings.mixedbreadai import MixedbreadAIEmbedding
from llama_index.llms.groq import Groq
from llama_parse import LlamaParse

# API keys
llama_cloud_key = os.environ.get("LLAMA_CLOUD_API_KEY")
groq_key = os.environ.get("GROQ_API_KEY")
mxbai_key = os.environ.get("MXBAI_API_KEY")
if not (llama_cloud_key and groq_key and mxbai_key):
    raise ValueError(
        "API Keys not found! Ensure they are passed to the Docker container."
    )

# models name
llm_model_name = "llama-3.1-70b-versatile"
embed_model_name = "mixedbread-ai/mxbai-embed-large-v1"

# Initialize the parser
parser = LlamaParse(api_key=llama_cloud_key, result_type="markdown")

# Define file extractor with various common extensions
file_extractor = {
    ".pdf": parser,
    ".docx": parser,
    ".doc": parser,
    ".txt": parser,
    ".csv": parser,
    ".xlsx": parser,
    ".pptx": parser,
    ".html": parser,
    ".jpg": parser,
    ".jpeg": parser,
    ".png": parser,
    ".webp": parser,
    ".svg": parser,
}

# Initialize the embedding model
embed_model = MixedbreadAIEmbedding(api_key=mxbai_key, model_name=embed_model_name)

# Initialize the LLM

llm = Groq(model="llama-3.1-70b-versatile", api_key=groq_key)


# File processing function
def load_files(file_path: str):
    global vector_index
    if not file_path:
        return "No file path provided. Please upload a file."
    
    valid_extensions = ', '.join(file_extractor.keys())
    if not any(file_path.endswith(ext) for ext in file_extractor):
        return f"The parser can only parse the following file types: {valid_extensions}"

    document = SimpleDirectoryReader(input_files=[file_path], file_extractor=file_extractor).load_data()
    vector_index = VectorStoreIndex.from_documents(document, embed_model=embed_model)
    print(f"Parsing completed for: {file_path}")
    filename = os.path.basename(file_path)
    return f"Ready to provide responses based on: {filename}"


# Respond function
def respond(message, history):
    try:
        # Use the preloaded LLM
        query_engine = vector_index.as_query_engine(streaming=True, llm=llm)
        streaming_response = query_engine.query(message)
        partial_text = ""
        for new_text in streaming_response.response_gen:
            partial_text += new_text
            # Yield an empty string to cleanup the message textbox and the updated conversation history
            yield partial_text
    except (AttributeError, NameError):
        print("An error occurred while processing your request.")
        yield "Please upload the file to begin chat."


# Clear function
def clear_state():
    global vector_index
    vector_index = None
    return [None, None, None]


# UI Setup
with gr.Blocks(
    theme=gr.themes.Default(
        primary_hue="green",
        secondary_hue="blue",
        font=[gr.themes.GoogleFont("Poppins")],
    ),
    css="footer {visibility: hidden}",
) as demo:
    gr.Markdown("# DataCamp Doc Q&A 🤖📃")
    with gr.Row():
        with gr.Column(scale=1):
            file_input = gr.File(
                file_count="single", type="filepath", label="Upload Document"
            )
            with gr.Row():
                btn = gr.Button("Submit", variant="primary")
                clear = gr.Button("Clear")
            output = gr.Textbox(label="Status")
        with gr.Column(scale=3):
            chatbot = gr.ChatInterface(
                fn=respond,
                chatbot=gr.Chatbot(height=300),
                theme="soft",
                show_progress="full",
                textbox=gr.Textbox(
                    placeholder="Ask questions about the uploaded document!",
                    container=False,
                ),
            )

    # Set up Gradio interactions
    btn.click(fn=load_files, inputs=file_input, outputs=output)
    clear.click(
        fn=clear_state,  # Use the clear_state function
        outputs=[file_input, output],
    )

# Launch the demo
if __name__ == "__main__":
    demo.launch()
```

### requirements.txt {#requirementstxt}

```plaintext
gradio
llama-index-embeddings-mixedbreadai
llama-index-llms-groq
llama-index
```

### Dockerfile {#dockerfile}

```dockerfile
# Dockerfile

# Use the official Python image with the desired version
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file to the working directory
COPY requirements.txt /app

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code to the working directory
COPY app.py /app

# Expose the port that Gradio will run on (default is 7860)
EXPOSE 7860

ENV GRADIO_SERVER_NAME="0.0.0.0"

# Command to run your application
CMD ["python", "app.py"]
```