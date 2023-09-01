import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Tabs, Progress, Space, Card, message } from "antd";
import { https } from "../../services/config";
import { deselectItem } from "../../Redux/selectedItemSlice";
import {
  FieldTimeOutlined,
  BarsOutlined,
  WifiOutlined,
  LaptopOutlined,
  CalculatorOutlined,
  StarOutlined,
} from "@ant-design/icons";
const { Meta } = Card;
function UserInfo() {
  const user = useSelector((state) => state.userSlice.userInfo);
  const { hoTen } = user;

  return (
    <div>
      <div className="container ">
        <div className="mt-10 text-center space-y-2  ">
          <img
            style={{ margin: "0 auto" }}
            className="rounded-full"
            src="https://picsum.photos/100"
          />
          <p className="font-bold text-lg">{hoTen}</p>
          <p className="text-sm">Lập trình viên Front end</p>
          <button className="btn-gradient">Hồ sơ cá nhân</button>
        </div>
      </div>
    </div>
  );
}
function Course() {
  const { selectedCourse } = useSelector((state) => state.selectItem);
  console.log("selectedCourse", selectedCourse);
  return selectedCourse.map(({ maKhoaHoc, hinhAnh, tenKhoaHoc, moTa }) => {
    const user = useSelector((state) => state.userSlice.userInfo);
    const { taiKhoan } = user;
    const detailBooking = {
      maKhoaHoc: 0,
      hinhAnh: hinhAnh,
      tenKhoaHoc: tenKhoaHoc,
      moTa: moTa,
      taiKhoan: taiKhoan,
    };
    return (
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <Card
            key={maKhoaHoc}
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={hinhAnh} />}
          >
            <Meta title={tenKhoaHoc} />
          </Card>
        </div>
        <div className="col-span-1">{moTa.slice(0, 300)}...</div>
        <div>
          <button
            className="btn-gradient grid justify-items-center"
            onClick={() => {
              https
                .post(`/api/QuanLyKhoaHoc/HuyGhiDanh`, detailBooking)
                .then((res) => {
                  console.log("res: ", res);
                  dispatch(deselectItem(detailBooking));
                  message.success("Hủy khóa học thành công");
                })
                .catch((err) => {
                  console.log("err: ", err);
                });
            }}
          >
            Hủy
          </button>
        </div>
      </div>
    );
  });
}
function Infomation() {
  const user = useSelector((state) => state.userSlice.userInfo);
  console.log("user: ", user);
  const { email, hoTen, maNhom, maLoaiNguoiDung, soDT, taiKhoan } = user;
  return (
    <div>
      <div className="grid grid-cols-2 my-3">
        <div className="col-span-1 space-y-3">
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Họ và Tên:</strong> {hoTen}
          </p>
          <p>
            <strong>Số điện thoại:</strong> {soDT}
          </p>
        </div>
        <div className="col-span-1 space-y-3">
          <p>
            <strong>Tai khoản:</strong> {taiKhoan}
          </p>
          <p>
            <strong>Nhóm:</strong> {maNhom}
          </p>
          <p>
            <strong>Đối tượng:</strong> {maLoaiNguoiDung}
          </p>
          <button className="btn-gradient">Cập nhật</button>
        </div>
      </div>
      <h1 className="text-3xl font-bold my-10 ">KỸ NĂNG CỦA TÔI</h1>
      <div className="grid grid-cols-3 mt-5">
        <div className="col-span-2">
          <Space wrap>
            <div className="text-center">
              <h1 className="mb-3 font-bold text-lg ">HTML</h1>
              <Progress
                strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
                type="circle"
                percent={90}
              />
            </div>
            <div className="text-center">
              <h1 className="mb-3 font-bold text-lg ">CSS</h1>
              <Progress
                strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
                type="circle"
                percent={90}
              />
            </div>
            <div className="text-center">
              <h1 className="mb-3 font-bold text-lg ">JS</h1>
              <Progress
                strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
                type="circle"
                percent={80}
              />
            </div>
            <div className="text-center">
              <h1 className="mb-3 font-bold text-lg ">REACT</h1>
              <Progress
                strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
                type="circle"
                percent={85}
              />
            </div>
          </Space>
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-2 gap-3 text-white">
            <div
              style={{
                backgroundColor: "rgb(87, 204, 153)",
              }}
              className="col-span-1 p-3 text-center rounded-xl flex items-center justify-center"
            >
              {" "}
              <FieldTimeOutlined className="mr-3" />
              <div>
                <p>Giờ học</p>
                <p>80</p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgb(87, 204, 153)",
              }}
              className="col-span-1 p-3 text-center rounded-xl flex items-center justify-center"
            >
              {" "}
              <BarsOutlined className="mr-3" />
              <div>
                <p>Điểm tổng</p>
                <p>80</p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgb(87, 204, 153)",
              }}
              className="col-span-1 p-3 text-center rounded-xl flex items-center justify-center"
            >
              {" "}
              <LaptopOutlined className="mr-3" />
              <div>
                <p>Buổi học</p>
                <p>40</p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgb(87, 204, 153)",
              }}
              className="col-span-1 p-3 text-center rounded-xl flex items-center justify-center"
            >
              {" "}
              <WifiOutlined className="mr-3" />
              <div>
                <p>Cấp độ</p>
                <p>Trung cấp</p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgb(87, 204, 153)",
              }}
              className="col-span-1 p-3 text-center rounded-xl flex items-center justify-center"
            >
              {" "}
              <StarOutlined className="mr-3" />
              <div>
                <p>Học lực</p>
                <p>Khá</p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgb(87, 204, 153)",
              }}
              className="col-span-1 p-3 text-center rounded-xl flex items-center justify-center"
            >
              {" "}
              <CalculatorOutlined className="mr-3" />
              <div>
                <p>Bài tập</p>
                <p>100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: `Thông tin cá nhân`,
    children: <Infomation />,
  },
  {
    key: "2",
    label: `Khóa học`,
    children: <Course />,
  },
];
const App = () => (
  <div>
    <div className="p-14 text-white" style={{ backgroundColor: "#57cc99" }}>
      <h1 className="font-bold text-2xl ">THÔNG TIN CÁ NHÂN</h1>
      <h3 className="text-sm">Thông Tin Học Viên</h3>
    </div>
    <div className="container grid grid-cols-4 mt-10  ">
      <div className="col-span-1 text-center space-y-2  ">
        <UserInfo />
      </div>
      <div className="col-span-3">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  </div>
);
export default App;
