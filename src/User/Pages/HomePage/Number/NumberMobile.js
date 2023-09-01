import React from "react";
import CountUp from "react-countup";
import { Col, Row, Statistic, Image } from "antd";
const formatter = (value) => <CountUp end={value} separator="," />;
export default function Number() {
  return (
    <div
      className="bg-white h-52  grid items-center mt-10 "
      style={{ backgroundImage: "url('./bg14.png')" }}
    >
      <Row gutter={0}>
        <Col className="grid justify-items-center" span={6}>
          <Image
            width={60}
            height={60}
            src="https://demo2.cybersoft.edu.vn/static/media/003-students.e1a7c67b.png"
            alt=""
          />
          <Statistic
            className="grid justify-items-center font-bold"
            valueStyle={{ fontSize: 35, color: "#f55f8d" }}
            value={9000}
            title="Học viên"
            formatter={formatter}
          />
        </Col>
        <Col className="grid justify-items-center" span={6}>
          <Image
            width={60}
            height={60}
            src="https://demo2.cybersoft.edu.vn/static/media/001-timetable.0e009173.png"
            alt=""
          />
          <Statistic
            className="grid justify-items-center font-bold"
            title="Khóa học"
            valueStyle={{ fontSize: 35, color: "#f55f8d" }}
            value={1000}
            formatter={formatter}
          />
        </Col>
        <Col className="grid justify-items-center" span={6}>
          <Image
            width={60}
            height={60}
            src="https://demo2.cybersoft.edu.vn/static/media/002-hourglass.548810be.png"
            alt=""
          />
          <Statistic
            className="grid justify-items-center font-bold"
            title="Giờ học"
            valueStyle={{ fontSize: 35, color: "#f55f8d" }}
            value={33200}
            formatter={formatter}
          />
        </Col>
        <Col className="grid justify-items-center font-bold" span={6}>
          <Image
            width={60}
            height={60}
            src="https://demo2.cybersoft.edu.vn/static/media/004-teacher.5bbd6eec.png"
            alt=""
          />
          <Statistic
            className="grid justify-items-center"
            title="Giảng viên"
            value={400}
            valueStyle={{ fontSize: 35, color: "#f55f8d" }}
            precision={2}
            formatter={formatter}
          />
        </Col>
      </Row>
    </div>
  );
}
