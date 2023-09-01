import React from "react";
import Lottie from "lottie-react";
import animation_1 from "./animation_1.json";
import animation_2 from "./animation_2.json";
import { Card } from "antd";
import { CheckOutlined } from "@ant-design/icons";

export default function Carousel() {
  return (
    <div>
      <div className="container  grid grid-cols-4 gap-20  h-screen w-screen items-center justify-center">
        <div className="col-span-2 opacity-75">
          <Lottie animationData={animation_1} loop={true} />
        </div>
        <div className="col-span-2  opacity-75">
          <Lottie animationData={animation_2} loop={true} />
        </div>
      </div>
      <div className="container grid grid-cols-3 gap-8 items-center justify-center">
        <div className="col-span-1 h-full">
          <Card
            className="h-full "
            title="KHÓA HỌC"
            hoverable={true}
            bordered={true}
            style={{
              backgroundColor: "rgba(245, 95, 141, 0.1)",
              color: "#636363",
              width: 300,
            }}
          >
            <p>
              Học qua dự án thực tế, học đi đôi với hành, không lý thuyết lan
              man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến
              thực thi một dự án lớn ngoài thực tế để học viên học xong làm được
              ngay
            </p>
            <br />

            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Hơn 1000 bài tập và dự án thực tế
            </p>
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Công nghệ cập nhật mới nhất
            </p>
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Hình ảnh, ví dụ, bài giảng sinh động trực quan
            </p>
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Tư duy phân tích, giải quyết vấn đề trong dự án
            </p>
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự
              án
            </p>
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Cơ hội thực tập tại các công ty lớn như FPT, Microsoft
            </p>
          </Card>
        </div>
        <div className="col-span-1 h-full">
          <Card
            className="h-1/2"
            title="LỘ TRÌNH PHÙ HỢP"
            hoverable={true}
            bordered={true}
            style={{
              backgroundColor: "rgba(245, 95, 141, 0.1)",
              color: "#636363",
              width: 300,
            }}
          >
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao
            </p>
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Học, luyện tập code, kỹ thuật phân tích, soft skill
            </p>
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Huấn luyện để phát triển năng lực và niềm đam mê lập trình
            </p>
          </Card>
          <br />
          <Card
            title="GIẢNG VIÊN"
            hoverable={true}
            bordered={true}
            style={{
              backgroundColor: "rgba(245, 95, 141, 0.1)",
              color: "#636363",
              width: 300,
            }}
          >
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Tương tác cùng mentor và giảng viên qua phần thảo luận
            </p>
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Review code và đưa ra các nhận xét góp ý
            </p>
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Chấm điểm tương tác thảo luận giữa các học viên
            </p>
          </Card>
        </div>
        <div className="col-span-1">
          <Card
            title="HỆ THỐNG HỌC TẬP"
            hoverable={true}
            bordered={true}
            style={{
              backgroundColor: "rgba(245, 95, 141, 0.1)",
              color: "#636363",
              width: 300,
            }}
          >
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học
              viên
            </p>
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Thống kê lượt xem video, làm bài, điểm số theo chu kỳ
            </p>
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Thống kê, so sánh khả năng học của các học viên cùng level để đưa
              ra mục tiêu học tập
            </p>
          </Card>
          <br />
          <Card
            title="CHỨNG NHẬN"
            hoverable={true}
            bordered={true}
            style={{
              backgroundColor: "rgba(245, 95, 141, 0.1)",
              color: "#636363",
              width: 300,
            }}
          >
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Chấm bài và có thể vấn đáp trực tuyến để review
            </p>

            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc
              đáo
            </p>
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Kết nối CV của bạn đến với các đối tác của V learning
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
