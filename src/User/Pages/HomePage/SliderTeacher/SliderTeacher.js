import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Rate } from "antd";
const { Meta } = Card;
export default function SliderTeacher() {
  const settings = {
    className: "container ",
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          rows: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          rows: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h3 className="text-center mt-5 title">Giảng viên hàng đầu</h3>
      <Slider {...settings}>
        <div>
          <Card
            hoverable
            style={{
              backgroundColor: "rgba(245, 95, 141, 0.1)",

              height: 260,
              width: 160,
            }}
            cover={
              <img
                alt="example"
                src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
              />
            }
          >
            <Meta
              className="text-center"
              title="Big DadMoon"
              description="Chuyên gia lĩnh vực

lập trình"
            />
            <Rate
              className="flex justify-center"
              allowHalf
              value={10 / 2}
              style={{ color: "#78ed78", fontSize: 12 }}
            />
            <p className="text-center">100 đánh giá</p>
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{
              backgroundColor: "rgba(245, 95, 141, 0.1)",
              width: 160,
              height: 260,
            }}
            cover={
              <img
                alt="example"
                src="https://demo2.cybersoft.edu.vn/static/media/instrutor6.64041dca.jpg"
              />
            }
          >
            <Meta
              className="text-center"
              title="IcarDi MenBor"
              description="Chuyên gia ngôn ngữ

Vue Js"
            />
            <Rate
              className="flex justify-center"
              allowHalf
              value={10 / 2}
              style={{ color: "#78ed78", fontSize: 12 }}
            />
            <p className="text-center">100 đánh giá</p>
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{
              backgroundColor: "rgba(245, 95, 141, 0.1)",
              height: 260,
              width: 160,
            }}
            cover={
              <img
                alt="example"
                src="https://demo2.cybersoft.edu.vn/static/media/instrutor7.edd00a03.jpg"
              />
            }
          >
            <Meta
              className="text-center"
              title="Bladin Slaham"
              description="Chuyên gia hệ thống

máy tính"
            />
            <Rate
              className="flex justify-center"
              allowHalf
              value={10 / 2}
              style={{ color: "#78ed78", fontSize: 12 }}
            />
            <p className="text-center">100 đánh giá</p>
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{
              backgroundColor: "rgba(245, 95, 141, 0.1)",
              height: 260,
              width: 160,
            }}
            cover={
              <img
                alt="example"
                src="https://demo2.cybersoft.edu.vn/static/media/instrutor8.aec2f526.jpg"
              />
            }
          >
            <Meta
              className="text-center"
              title="Chris Andersan"
              description="Chuyên gia lĩnh vực

Full Skill"
            />
            <Rate
              className="flex justify-center"
              allowHalf
              value={10 / 2}
              style={{ color: "#78ed78", fontSize: 12 }}
            />
            <p className="text-center">100 đánh giá</p>
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{
              backgroundColor: "rgba(245, 95, 141, 0.1)",
              height: 260,
              width: 160,
            }}
            cover={
              <img
                alt="example"
                src="https://demo2.cybersoft.edu.vn/static/media/instrutor9.504ea6c5.jpg"
              />
            }
          >
            <Meta
              className="text-center"
              title="VueLo Gadi"
              description="Chuyên gia lĩnh vực

Phân tích"
            />
            <Rate
              className="flex justify-center"
              allowHalf
              value={10 / 2}
              style={{ color: "#78ed78", fontSize: 12 }}
            />
            <p className="text-center">100 đánh giá</p>
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{
              backgroundColor: "rgba(245, 95, 141, 0.1)",
              height: 260,
              width: 160,
            }}
            cover={
              <img
                alt="example"
                src="https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg"
              />
            }
          >
            <Meta
              className="text-center"
              title="Hoàng Nam"
              description="Chuyên gia lĩnh vực

PHP"
            />
            <Rate
              className="flex justify-center "
              allowHalf
              value={10 / 2}
              style={{ color: "#78ed78", fontSize: 12 }}
            />
            <p className="text-center">100 đánh giá</p>
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{
              backgroundColor: "rgba(245, 95, 141, 0.1)",
              height: 260,
              width: 160,
            }}
            cover={
              <img
                alt="example"
                src="https://demo2.cybersoft.edu.vn/static/media/instrutor11.0387fe65.jpg"
              />
            }
          >
            <Meta
              className="text-center"
              title="David Ngô Savani"
              description="Chuyên gia lĩnh vực

Front End"
            />
            <Rate
              className="flex justify-center"
              allowHalf
              value={10 / 2}
              style={{ color: "#78ed78", fontSize: 12 }}
            />
            <p className="text-center">100 đánh giá</p>
          </Card>
        </div>
      </Slider>
    </div>
  );
}
