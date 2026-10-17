# Yêu cầu hệ thống {#system-requirements}

AnythingLLM có thể tùy chỉnh hoàn toàn về mọi mặt.

Do tính chất tùy biến này, yêu cầu chính xác để chạy AnythingLLM phụ thuộc vào nhiều yếu tố. Bạn có thể dùng các bảng dưới đây để hình dung sơ bộ về những gì cần có để chạy AnythingLLM.

AnythingLLM có thể là lớp bao quanh nhiều dịch vụ bên ngoài, mỗi dịch vụ đảm nhận một tác vụ - nhờ đó AnythingLLM rất nhẹ và có thể chạy trên những máy nhỏ nhất, thậm chí cả Raspberry Pi!

## Cấu hình khuyến nghị cho AnythingLLM {#recommended-configuration-for-anythingllm}

Đây là giá trị tối thiểu để chạy AnythingLLM. Cấu hình này đủ để bạn lưu một số tài liệu, gửi tin nhắn trò chuyện và dùng các tính năng của AnythingLLM.

| Thuộc tính | Giá trị khuyến nghị |
|----------|-------------------|
| RAM      | 2GB              |
| CPU      | CPU 2 nhân (bất kỳ) |
| Dung lượng lưu trữ | 5GB    |

## Ảnh hưởng của việc chọn LLM {#llm-selection-impact}

Đây là nơi tạo ra các phản hồi trò chuyện. Các giải pháp được lưu trữ phổ biến như OpenAI thường cho phản hồi hiện đại nhất với chi phí vận hành gần như bằng không. Tuy nhiên, bạn cần có khóa API cho bất kỳ nhà cung cấp LLM nào trên đám mây.

**Mẹo:** nếu thiết bị chạy AnythingLLM không có GPU, hãy chạy LLM cục bộ trên một máy khác có GPU. AnythingLLM có thể kết nối tới bất kỳ LLM nào chạy ở bất kỳ đâu qua API.

## Ảnh hưởng của việc chọn Embedder {#embedder-selection-impact}

Đây là mô hình dùng để "nhúng" hay vector hóa văn bản. Tương tự, các dịch vụ bên ngoài kết nối với AnythingLLM không gây thêm tải nào.

Embedder mặc định chạy trên cùng máy với AnythingLLM và chỉ vector hóa bằng CPU. Nếu tài liệu lớn hoặc bạn cần vector hóa nhiều dữ liệu, bạn có thể muốn dùng nhà cung cấp và mô hình embedder bên ngoài.

## Ảnh hưởng của việc chọn cơ sở dữ liệu vector {#vector-database-selection-impact}

Mọi cơ sở dữ liệu vector được hỗ trợ hoặc không gây ảnh hưởng vì được lưu trữ bên ngoài, hoặc có thể mở rộng tới hàng trăm triệu vector với cấu hình khuyến nghị tối thiểu.

Cơ sở dữ liệu vector LanceDB mặc định có thể xử lý mọi thứ bạn đưa vào.