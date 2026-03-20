# PRD: Nền tảng Thi thử và Luyện tập Adaptive cho Học sinh lớp 12

**Ngôn ngữ:** Tiếng Việt
**Sản phẩm:** Thi thử và luyện tập adaptive cho học sinh 12

## 1. Tổng quan (Overview)

Sản phẩm là một nền tảng giáo dục trực tuyến, tập trung vào việc cung cấp các bài thi thử và lộ trình luyện tập theo hình thức "adaptive" (thích ứng) cho học sinh lớp 12, giúp các em chuẩn bị cho kỳ thi tốt nghiệp THPT Quốc gia.

**Giá trị cốt lõi (Core Value):**
*   **Đúng năng lực:** Hệ thống tự động điều chỉnh độ khó của câu hỏi dựa trên câu trả lời của học sinh, giúp đánh giá chính xác năng lực.
*   **Lấp đầy lỗ hổng kiến thức:** Phân tích kết quả và chỉ ra các chuyên đề, đơn vị kiến thức học sinh còn yếu để tập trung luyện tập.
*   **Cam kết đạt mục tiêu:** Cung cấp lộ trình luyện tập cá nhân hóa để học sinh chắc chắn đạt được điểm số mục tiêu đã đề ra.

## 2. Đối tượng người dùng (Target Audience)

*   Học sinh lớp 12 trên toàn quốc đang chuẩn bị cho kỳ thi THPT Quốc gia.

## 3. Tính năng (Features)

### 3.1. Phòng thi thử

Đây là khu vực cho phép học sinh làm các đề thi thử có cấu trúc và thời gian giống với kỳ thi thật.

*   **Danh sách đề thi:**
    *   Tổng cộng 10 đề thi, được mở khóa hàng tuần.
    *   **Đề 1:** Có sẵn cho tất cả người dùng.
    *   **Đề 2-5:** Dành cho người dùng miễn phí (Free users), mở khóa mỗi tuần một đề.
    *   **Đề 6-10:** Chỉ dành cho người dùng trả phí (VIP users), mở khóa mỗi tuần một đề.
*   **Metadata mỗi đề thi:**
    *   Tên đề thi (ví dụ: "Đề thi thử tuần 1")
    *   Ngày publish (ngày mở khóa)
    *   Số lượt học sinh đã làm bài
*   **Giao diện làm bài:**
    *   Giao diện tối giản, tập trung vào nội dung.
    *   **Hiển thị từng câu hỏi một:** Mỗi lần chỉ hiển thị một câu hỏi. Với các câu hỏi dạng Đúng/Sai có nhiều ý nhỏ (ví dụ: 1a, 1b, 1c, 1d), tất cả các ý này sẽ được nhóm lại và hiển thị cùng lúc trên một trang câu hỏi.
    *   Khu vực câu hỏi.
    *   Khu vực điều hướng câu hỏi (Question navigation section): Cho phép chuyển đổi giữa các câu hỏi và hiển thị trạng thái (đã làm, chưa làm, đã đánh dấu).
    *   Khu vực trả lời (Answering section - multiple choice, true/false, short answer).
    *   Đồng hồ đếm ngược (90 phút).

### 3.2. Phòng luyện tập

Khu vực luyện tập chuyên sâu theo từng chuyên đề, giúp học sinh củng cố kiến thức và nâng cao năng lực.

*   **Danh sách chuyên đề:**
    *   Bao gồm tất cả các chuyên đề trong chương trình thi THPT Quốc gia.
    *   **Metadata mỗi chuyên đề:**
        *   Tên chuyên đề.
        *   Các đơn vị kiến thức thuộc chuyên đề (hiển thị khi hover).
        *   Số học sinh đã luyện tập.
*   **Cơ chế luyện tập:**
    *   **Xác định level ban đầu:** Hệ thống đưa ra một số câu hỏi ban đầu để đánh giá nhanh năng lực của học sinh trong chuyên đề đó.
    *   **Luyện tập adaptive:** Các câu hỏi tiếp theo được đưa ra dựa trên câu trả lời trước đó của học sinh.
    *   **Phản hồi tức thì:** Học sinh biết được câu trả lời đúng/sai ngay sau khi nộp từng câu.
    *   **Thanh tiến trình (Progress Bar):** Hiển thị sự tiến bộ của học sinh qua 3 cấp độ năng lực: **Biết** (Đỏ) - **Hiểu** (Vàng) - **Vận dụng** (Xanh lá).

### 3.3. Quyền lợi VIP (299.000 VNĐ)

*   Truy cập toàn bộ 10 đề thi thử tốt nghiệp.
*   Luyện tập không giới hạn tất cả các chuyên đề.
*   Các quyền lợi khác sẽ được bổ sung trong tương lai.

## 4. Luồng người dùng (User Journey)

### 4.1. Luồng người dùng khách (Guest) và miễn phí (Free User)

Đây là luồng dành cho người dùng chưa có tài khoản (Guest) và người dùng đã có tài khoản nhưng chưa mua gói VIP (Free User).

**A. Luồng Thi thử:**

1.  **Truy cập (Guest):** Người dùng truy cập vào trang chủ/landing page.
2.  **Khám phá:** Người dùng có thể vào "Phòng thi thử" để xem danh sách các đề thi. Các đề từ 1-5 có thể xem được thông tin (tên, ngày publish, số lượt làm). Các đề 6-10 bị khóa với nhãn "VIP".
3.  **Bắt đầu làm bài:** Người dùng chọn một đề thi thử có sẵn (ví dụ: "Đề thi thử tuần 2") và nhấn nút **"Bắt đầu thi thử"**.
4.  **Yêu cầu Đăng nhập/Đăng ký:** Một pop-up hiện ra, yêu cầu người dùng **Đăng nhập** (nếu đã có tài khoản) hoặc **Đăng ký** (nếu chưa có).
5.  **Nhập mục tiêu (Free User):** Sau khi đăng nhập/đăng ký thành công, người dùng (giờ là Free User) sẽ thấy một pop-up khác: **"Nhập điểm số mục tiêu của bạn"**. Người dùng nhập điểm mong muốn (ví dụ: 8.5).
6.  **Bắt đầu:** Nhấn **"Bắt đầu"**. Giao diện làm bài hiện ra.
7.  **Làm bài:** Người dùng làm bài trong 90 phút.
8.  **Nộp bài:** Sau khi hoàn thành hoặc hết giờ, người dùng nhấn **"Nộp bài"**.
9.  **Xem Kết quả:** Hệ thống chuyển đến trang **Kết quả**:
    *   Hiển thị điểm số đạt được (ví dụ: 7.0/10).
    *   Danh sách câu trả lời, đánh dấu đúng/sai.
    *   **Biểu đồ năng lực (Radar Chart):** Hiển thị một biểu đồ dạng radar/cánh hoa (tương tự ảnh tham khảo) để trực quan hóa năng lực của học sinh trên tất cả các chuyên đề có trong bài thi.
        *   Mỗi "cánh" của biểu đồ tương ứng với một chuyên đề.
        *   Độ dài của cánh biểu thị mức độ thành thạo, tính theo % câu trả lời đúng trong chuyên đề đó.
        *   Màu sắc của cánh cũng có thể phản ánh 3 cấp độ năng lực: **Biết** (ví dụ: 0-40%, màu đỏ), **Hiểu** (ví dụ: 41-70%, màu vàng), **Vận dụng** (ví dụ: 71-100%, màu xanh lá).
        *   *(Ghi chú cho phát triển sau):* Có thể phát triển thêm các tab để so sánh năng lực của người dùng với nhóm người dùng khác (top performers, cohort,...).
10. **CTA Mua VIP:** Dưới bảng đánh giá, một Call-to-Action (CTA) nổi bật hiện ra: **"Chỉ với 299K, luyện tập không giới hạn để đạt điểm số mục tiêu! Mua ngay!"**.

**B. Luồng Luyện tập (Trải nghiệm thử):**

1.  **Truy cập (Guest):** Người dùng truy cập vào trang chủ/landing page.
2.  **Khám phá:** Người dùng có thể vào "Phòng luyện tập" để xem danh sách tất cả các chuyên đề và thông tin liên quan.
3.  **Bắt đầu luyện tập:** Người dùng chọn một chuyên đề (ví dụ: "Hàm số và đồ thị") và nhấn **"Bắt đầu luyện tập"**.
4.  **Yêu cầu Đăng nhập/Đăng ký:** Một pop-up hiện ra, yêu cầu người dùng **Đăng nhập** hoặc **Đăng ký**.
5.  **Xác định level (Free User):** Sau khi đăng nhập/đăng ký thành công, hệ thống đưa ra X câu hỏi (ví dụ: 5 câu) để xác định level ban đầu.
6.  **Xem kết quả ban đầu:** Sau khi hoàn thành X câu, hệ thống hiển thị kết quả:
    *   "Năng lực hiện tại của bạn trong chuyên đề này là: **Hiểu**".
    *   Gợi ý các đơn vị kiến thức cần cải thiện.
7.  **CTA Mua VIP:** Một CTA hiện ra: **"Bạn đã sẵn sàng chinh phục chuyên đề này? Mua gói VIP chỉ 299K để luyện tập không giới hạn và truy cập toàn bộ đề thi!"**.

### 4.2. Luồng người dùng trả phí (VIP User)

**A. Luồng Thi thử:**

*   Tương tự như người dùng miễn phí, nhưng có quyền truy cập vào tất cả 10 đề thi (theo lịch mở khóa hàng tuần).

**B. Luồng Luyện tập:**

1.  Chọn **"Phòng luyện tập"**.
2.  Chọn một chuyên đề bất kỳ.
3.  Nhấn **"Bắt đầu luyện tập"**.
4.  Hệ thống có thể bắt đầu với vài câu hỏi để xác định level hoặc tiếp tục từ lần luyện tập trước.
5.  Người dùng vào không gian luyện tập:
    *   Làm từng câu hỏi.
    *   Sau khi trả lời 1 câu, hệ thống báo đúng/sai ngay lập tức kèm giải thích (nếu có).
    *   Thanh tiến trình (progress bar) 3 cấp độ được cập nhật liên tục.
6.  Quá trình luyện tập là không giới hạn. Người dùng có thể dừng bất cứ lúc nào và hệ thống sẽ lưu lại tiến trình.

## 5. Mô hình kinh doanh (Monetization)

*   **Freemium:** Cung cấp các tính năng cơ bản miễn phí để thu hút người dùng và cho phép họ trải nghiệm giá trị của sản phẩm.
*   **One-time Purchase (Mua một lần):** Bán gói "VIP" với giá 299.000 VNĐ để mở khóa toàn bộ tính năng cao cấp.
