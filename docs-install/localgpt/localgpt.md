# Xây dựng hệ thống RAG riêng tư mạnh mẽ với localGPT 2.0

Trong bối cảnh AI phát triển nhanh chóng, khả năng tương tác với dữ liệu một cách riêng tư và an toàn ngày càng trở nên quan trọng. Các giải pháp dựa trên cloud tuy tiện lợi nhưng thường đi kèm với lo ngại về quyền riêng tư và sự phụ thuộc vào nhà cung cấp. Đây là lúc các hệ thống **Retrieval-Augmented Generation (RAG)** chạy local tỏa sáng, cho phép tận dụng sức mạnh của các mô hình ngôn ngữ lớn (**Large Language Models - LLMs**) ngay trên máy cục bộ mà không gửi dữ liệu nhạy cảm ra ngoài.

**localGPT 2.0** là một dự án mã nguồn mở được thiết kế để đáp ứng nhu cầu này, mang đến một framework mạnh mẽ, linh hoạt và hoàn toàn riêng tư để xây dựng hệ thống RAG. Phiên bản này không chỉ là bản cập nhật mà còn là một bước tiến vượt bậc, cung cấp khả năng tùy chỉnh sâu rộng và giao diện thân thiện hơn.

## Tại sao localGPT 2.0 là bước ngoặt cho RAG riêng tư?
**localGPT 2.0** định nghĩa lại cách bạn tương tác với tài liệu bằng cách cung cấp một hệ sinh thái RAG hoàn toàn riêng tư, đảm bảo dữ liệu và tương tác với mô hình được xử lý cục bộ trên máy của bạn. Không phụ thuộc vào các API bên ngoài, localGPT 2.0 nâng cao bảo mật cho các tài liệu nhạy cảm như báo cáo kinh doanh, tài liệu pháp lý hoặc hồ sơ cá nhân.

Giao diện của phiên bản mới được cải tiến đáng kể, trực quan và dễ sử dụng hơn so với các phiên bản trước, giúp đơn giản hóa việc tạo, quản lý và tương tác với các **index** tài liệu. Framework này tập trung vào việc trao quyền cho người dùng để thử nghiệm các **hyperparameters** và chiến lược **retrieval**, giúp tối ưu hóa hệ thống RAG cho các nhu cầu cụ thể.

## Yêu cầu
- **Hệ điều hành**: Ubuntu 20.04, 22.04, 24.04 hoặc Debian 12.
- **RAM**: Tối thiểu 8GB (khuyến nghị 16GB trở lên).
- **CPU**: Tối thiểu 1 core (khuyến nghị 4 core trở lên).
- **Disk**: Tối thiểu 10GB, khuyến nghị nhiều hơn để lưu trữ dữ liệu và mô hình.
- **Tên miền**: Tùy chọn, nếu muốn cấu hình SSL qua Let’s Encrypt.
- **Quyền truy cập**: Root hoặc sudo qua SSH.
- **Kết nối internet**: Ổn định để tải các gói cài đặt và mô hình.

## Các tính năng chính của localGPT 2.0
localGPT 2.0 nổi bật với các tính năng sau:
- **Bảo mật tối ưu**: Toàn bộ dữ liệu được xử lý cục bộ, đảm bảo không gửi dữ liệu ra ngoài.
- **Tùy chỉnh linh hoạt**: Hỗ trợ nhiều mô hình **embedding**, **hybrid search**, và các kỹ thuật **chunking** tiên tiến.
- **Giao diện thân thiện**: Web UI trực quan, dễ dàng quản lý **index** và **chat session**.
- **Hiệu suất cao**: Tối ưu hóa với **caching**, **query decomposition**, và **contextual retrieval** để trả lời nhanh và chính xác.
- **Hỗ trợ đa nền tảng**: Có thể triển khai qua Docker, cài đặt trực tiếp hoặc cấu hình thủ công.

## Cài đặt localGPT 2.0
Dưới đây là hướng dẫn chi tiết để cài đặt localGPT 2.0 trên VPS Ubuntu/Debian. Chúng ta sẽ sử dụng phương pháp **Direct Deployment** để dễ dàng bắt đầu, nhưng bạn cũng có thể chọn **Docker Deployment** hoặc **Manual Component Setup** nếu cần kiểm soát chi tiết hơn.

### 1. Cài đặt môi trường
1. **Đăng nhập VPS qua SSH**:
   ```bash
   ssh root@server-ip
   ```

2. **Cập nhật hệ thống và cài đặt các gói cần thiết**:
   ```bash
   sudo apt update
   sudo apt install -y python3.10 python3-pip nodejs npm docker.io docker-compose
   ```

3. **Cài đặt và khởi động Ollama**:
   ```bash
   curl -fsSL https://ollama.ai/install.sh | sh
   ollama pull qwen3:0.6b
   ollama pull qwen3:8b
   ollama serve
   ```

### 2. Tải và cài đặt localGPT 2.0
1. **Clone repository (branch localgpt-v2)**:
   ```bash
   git clone -b localgpt-v2 https://github.com/PromtEngineer/localGPT.git
   cd localGPT
   ```

2. **Tạo môi trường Conda**:
   ```bash
   conda create -n localgpt_env python=3.10
   conda activate localgpt_env
   ```

3. **Cài đặt Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
   Các gói chính bao gồm:
   - `torch==2.4.1`, `transformers==4.51.0`: Mô hình AI.
   - `lancedb`: Vector database.
   - `rank_bm25`, `fuzzywuzzy`: Thuật toán tìm kiếm.
   - `sentence_transformers`, `rerankers`: Tạo embedding và reranking.
   - `docling`: Xử lý tài liệu.

4. **Cài đặt Node.js dependencies**:
   ```bash
   npm install
   ```

### 3. Cấu hình môi trường
1. **Sao chép file cấu hình mẫu**:
   ```bash
   cp .env.example .env
   nano .env
   ```

2. **Chỉnh sửa file `.env`**:
   ```env
   OLLAMA_HOST=http://localhost:11434
   DATABASE_PATH=./backend/chat_data.db
   VECTOR_DB_PATH=./lancedb
   BACKEND_PORT=8000
   FRONTEND_PORT=3000
   RAG_API_PORT=8001
   GENERATION_MODEL=qwen3:8b
   ENRICHMENT_MODEL=qwen3:0.6b
   EMBEDDING_MODEL=Qwen/Qwen3-Embedding-0.6B
   RERANKER_MODEL=answerdotai/answerai-colbert-small-v1
   ```

3. **Khởi tạo database**:
   ```bash
   python -c "from backend.database import ChatDatabase; ChatDatabase().init_database()"
   ```

### 4. Khởi động localGPT 2.0
1. **Khởi động toàn bộ hệ thống**:
   ```bash
   python run_system.py
   ```
   - Lệnh này khởi động cả **backend**, **RAG API**, và **frontend**.
   - Truy cập giao diện tại: `http://localhost:3000`.

2. **Khởi động từng thành phần (khuyến nghị cho debug)**:
   Mở 3 terminal riêng:
   - Terminal 1 (Backend):
     ```bash
     cd backend && python server.py
     ```
   - Terminal 2 (RAG API):
     ```bash
     python -m rag_system.api_server
     ```
   - Terminal 3 (Frontend):
     ```bash
     npm run dev
     ```

3. **Kiểm tra trạng thái hệ thống**:
   ```bash
   python system_health_check.py
   ```

## Tùy chỉnh Indexing và Retrieval
### Indexing
1. **Tạo Index mới**:
   - Qua giao diện web: Truy cập `http://localhost:3000`, chọn “Create New Index”, tải lên tài liệu (hiện chỉ hỗ trợ PDF) và cấu hình tùy chọn.
   - Qua script:
     ```bash
     ./simple_create_index.sh "My Documents" "path/to/document.pdf"
     ```
   - Qua API:
     ```bash
     curl -X POST http://localhost:8000/indexes -H "Content-Type: application/json" -d '{"name": "My Index", "description": "My documents"}'
     curl -X POST http://localhost:8000/indexes/INDEX_ID/upload -F "files=@document.pdf"
     curl -X POST http://localhost:8000/indexes/INDEX_ID/build
     ```

2. **Tùy chọn Indexing**:
   - **Hybrid Search**: Kết hợp **dense embeddings** và **full-text search** để tối ưu kết quả.
   - **Late Chunking**: Tái cấu trúc tài liệu theo ngữ cảnh tại thời điểm query (tùy chọn nâng cao, có thể làm chậm quá trình).
   - **High Recall Chunking**: Chia nhỏ tài liệu ở mức câu để tăng độ chính xác, nhưng tốn thời gian hơn.

### Retrieval
- **Query Decomposition**: Phân tách câu hỏi phức tạp thành các sub-query để xử lý song song.
- **Contextual Retrieval**: Mở rộng ngữ cảnh quanh các **chunk** được truy xuất để đảm bảo câu trả lời mạch lạc.
- **Pruning**: Loại bỏ các câu không liên quan trong **chunk** để giảm nhiễu.
- **RAG Node Triage**: Buộc hệ thống chỉ sử dụng dữ liệu từ **index**, tránh **hallucination** từ LLM.

## Mẹo sử dụng hiệu quả
- **Câu hỏi cụ thể**: Sử dụng từ khóa chính xác để cải thiện kết quả **retrieval**.
- **Buộc RAG**: Thêm cụm “Theo tài liệu này…” vào đầu câu hỏi để ưu tiên dữ liệu **index**.
- **Quản lý cache**: Nếu câu trả lời không như mong muốn, thử diễn đạt lại câu hỏi để bypass **cache**.

## Lưu ý
- **Chất lượng PDF**: Đảm bảo PDF được định dạng tốt để **docling** phân tích chính xác.
- **Hiệu suất**: **High Recall Chunking** và **Late Chunking** có thể làm chậm quá trình **indexing**, hãy thử nghiệm để tìm cấu hình tối ưu.
- **Bảo mật**: Không cần kết nối internet sau khi cài đặt, đảm bảo dữ liệu hoàn toàn cục bộ.
- **Xử lý lỗi**:
  - Kiểm tra log nếu gặp vấn đề:
    ```bash
    python run_system.py --logs-only
    ```
  - Kiểm tra trạng thái dịch vụ:
    ```bash
    python run_system.py --health
    ```

## Kết luận
**localGPT 2.0** là một bước tiến lớn trong việc xây dựng hệ thống RAG riêng tư, cung cấp khả năng tùy chỉnh sâu rộng và bảo mật tối ưu. Với giao diện thân thiện, tích hợp **Ollama**, và các kỹ thuật **indexing/retrieval** tiên tiến, localGPT 2.0 là lựa chọn lý tưởng cho doanh nghiệp và cá nhân muốn quản lý tài liệu nhạy cảm một cách an toàn.

Hãy cài đặt và khám phá localGPT 2.0 để trải nghiệm cách nó biến đổi cách bạn tương tác với dữ liệu. Đóng góp ý kiến của bạn sẽ giúp dự án ngày càng hoàn thiện!

**Nguồn tham khảo**:[](https://www.geeky-gadgets.com/localgpt-2-0-secure-document-management/)[](https://github.com/PromtEngineer/localGPT)[](https://www.geeky-gadgets.com/localgpt-2-0-unlock-ai-power-without-sacrificing-privacy/)

Chúc bạn cài đặt thành công!