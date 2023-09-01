import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { https } from "../../services/config";
import { setDetail } from "../../Redux/detailSlice";
import { Card, Input, Rate, Button, message } from "antd";
import { setBooking } from "../../Redux/bookingSlice";
import { selectItem, deselectItem } from "../../Redux/selectedItemSlice";
import {
  UserOutlined,
  FieldTimeOutlined,
  DatabaseOutlined,
  PlayCircleOutlined,
  ReadOutlined,
  CheckOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

export default function DatailPage() {
  const [course, setCourse] = useState({});
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice.userInfo);
  const { detail } = useSelector((state) => state.setDetail);
  const { hinhAnh, tenKhoaHoc, moTa } = detail;

  const { taiKhoan } = user;
  let { id } = useParams();
  const detailBooking = {
    maKhoaHoc: 0,
    hinhAnh: hinhAnh,
    tenKhoaHoc: tenKhoaHoc,
    moTa: moTa,
    taiKhoan: taiKhoan,
  };
  useEffect(() => {
    https
      .get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
      .then((res) => {
        console.log("res: ", res);
        setCourse(res.data);
        dispatch(setDetail(res.data));
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  return (
    <div className="pt-40 container grid grid-cols-4 gap-5  justify-center">
      <div className="col-span-3">
        <h1 className="text-3xl font-semibold mb-3">{course.tenKhoaHoc}</h1>
        <div className="mb-3 grid grid-cols-3">
          <div className="col-span-1">
            <h3>Giảng viên</h3>
            <p>Trần Quang Sĩ</p>
          </div>
          <div className="col-span-1">
            <h3>Lĩnh vực</h3>
            <p>Lập trình Backend</p>
          </div>
          <div className="col-span-1">
            <Rate
              className="flex justify-center"
              allowHalf
              value={10 / 2}
              style={{ color: "#78ed78", fontSize: 12 }}
            />
            <p className="text-center">100 đánh giá</p>
          </div>
        </div>
        <hr />
        <div className="my-3 text-gray-600 text-sm text-justify">
          {course.moTa}
        </div>
        <hr />
        <br />
        <h1>Những gì bạn sẽ học</h1>
        <div className="grid grid-cols-2 my-3 gap-5 text-sm text-gray-600 text-justify">
          <div className="col-span-1">
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện với
              người dùng và phản ứng nhanh
            </p>
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Đăng ký công việc được trả lương cao hoặc làm freelancer trong một
              trong những lĩnh vực được yêu cầu nhiều nhất mà bạn có thể tìm
              thấy trong web dev ngay bây giờ
            </p>
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận dụng sức
              mạnh của JavaScript một cách dễ dàng
            </p>
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Tìm hiểu tất cả về React Hooks và React Components
            </p>
          </div>
          <div className="col-span-1">
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện với
              người dùng và phản ứng nhanh
            </p>
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Nhận ra sức mạnh của việc xây dựng các thành phần có thể kết hợp
            </p>
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi người,
              bởi vì bạn biết rất rõ các nguyên tắc cơ bản
            </p>
            <p>
              <CheckOutlined style={{ padding: 5 }} />
              Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các ứng dụng
              Redux
            </p>
          </div>
        </div>
        <hr />
        <br />
        <h1>Nội dung khóa học</h1>
        <p
          className="p-2 my-3 flex items-center justify-between"
          style={{ backgroundColor: "rgba(245, 95, 141, 0.1)" }}
        >
          MỤC 1: GIỚI THIỆU <Button className="btn-gradient">XEM TRƯỚC</Button>{" "}
        </p>
        <p>Bài học</p>
        <div className="flex items-center justify-between">
          <p className="flex  items-center">
            <PlayCircleOutlined className="mr-3" /> Các khái niệm về React
            Component{" "}
          </p>
          <span className="flex  items-center">
            {" "}
            <ClockCircleOutlined className="mr-3" />
            14:35
          </span>
        </div>
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <p className="flex  items-center">
            <PlayCircleOutlined className="mr-3" /> Thiết lập môi trường cho
            Windows
          </p>
          <span className="flex  items-center">
            {" "}
            <ClockCircleOutlined className="mr-3" />
            14:35
          </span>
        </div>
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <p className="flex  items-center">
            <PlayCircleOutlined className="mr-3" /> Tạo ứng dụng React -
            React-Scripts
          </p>
          <span className="flex  items-center">
            {" "}
            <ClockCircleOutlined className="mr-3" />
            14:35
          </span>
        </div>
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <p className="flex  items-center">
            <PlayCircleOutlined className="mr-3" /> Ghi chú nhanh về dấu ngoặc
            kép cho string interpolation
          </p>
          <span className="flex  items-center">
            {" "}
            <ClockCircleOutlined className="mr-3" />
            14:35
          </span>
        </div>
        <hr className="my-3" />
        <p
          className="p-2 my-3 flex items-center justify-between"
          style={{ backgroundColor: "rgba(245, 95, 141, 0.1)" }}
        >
          MỤC 2: KIẾN THỨC CĂN BẢN
          <Button className="btn-gradient">XEM TRƯỚC</Button>
        </p>
        <p>Bài học</p>
        <div className="flex items-center justify-between">
          <p className="flex  items-center">
            <PlayCircleOutlined className="mr-3" /> Trang chủ và thành phần thư
            mục
          </p>
          <span className="flex  items-center">
            {" "}
            <ClockCircleOutlined className="mr-3" />
            14:35
          </span>
        </div>
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <p className="flex  items-center">
            <PlayCircleOutlined className="mr-3" /> Hướng dẫn khóa học + Liên
            kết Github
          </p>
          <span className="flex  items-center">
            {" "}
            <ClockCircleOutlined className="mr-3" />
            14:35
          </span>
        </div>
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <p className="flex  items-center">
            <PlayCircleOutlined className="mr-3" /> Trang chủ thương mại điện tử
            + thiết lập SASS
          </p>
          <span className="flex  items-center">
            {" "}
            <ClockCircleOutlined className="mr-3" />
            14:35
          </span>
        </div>
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <p className="flex  items-center">
            <PlayCircleOutlined className="mr-3" /> Tệp CSS và SCSS
          </p>
          <span className="flex  items-center">
            {" "}
            <ClockCircleOutlined className="mr-3" />
            14:35
          </span>
        </div>
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <p className="flex  items-center">
            <PlayCircleOutlined className="mr-3" /> React 17: Cập nhật các gói +
            Phiên bản React mới nhất
          </p>
          <span className="flex  items-center">
            {" "}
            <ClockCircleOutlined className="mr-3" />
            14:35
          </span>
        </div>
        <hr className="my-3" />
        <p
          className="p-2 my-3 flex items-center justify-between"
          style={{ backgroundColor: "rgba(245, 95, 141, 0.1)" }}
        >
          MỤC 3: KIẾN THỨC CHUYÊN SÂU
          <Button className="btn-gradient">XEM TRƯỚC</Button>{" "}
        </p>
        <p>Bài học</p>
        <div className="flex items-center justify-between">
          <p className="flex  items-center">
            <PlayCircleOutlined className="mr-3" /> connect() and
            mapStateToProps
          </p>
          <span className="flex  items-center">
            {" "}
            <ClockCircleOutlined className="mr-3" />
            14:35
          </span>
        </div>
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <p className="flex  items-center">
            <PlayCircleOutlined className="mr-3" /> Trạng thái thư mục vào Redux
          </p>
          <span className="flex  items-center">
            {" "}
            <ClockCircleOutlined className="mr-3" />
            14:35
          </span>
        </div>
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <p className="flex  items-center">
            <PlayCircleOutlined className="mr-3" /> Thành phần Tổng quan về Bộ
            sưu tập
          </p>
          <span className="flex  items-center">
            {" "}
            <ClockCircleOutlined className="mr-3" />
            14:35
          </span>
        </div>
        <hr className="my-3" />
      </div>

      <div className=" col-span-1">
        <Card
          hoverable
          style={{
            width: 280,
          }}
          cover={<img alt="example" src={course.hinhAnh} />}
        >
          <button
            className="w-full btn-gradient inline-block text-center p-1 rounded  transition duration-500 cursor-pointer hover:scale-75"
            onClick={() => {
              detailBooking.maKhoaHoc = id;

              https
                .post(`/api/QuanLyKhoaHoc/DangKyKhoaHoc`, detailBooking)
                .then((res) => {
                  console.log("res: ", res);
                  dispatch(selectItem(detailBooking));
                  console.log("detailBooking: ", detailBooking);
                  message.success(
                    "Đăng ký khóa học thành công, xem chi tiết thông tin tài khoản"
                  );
                })
                .catch((err) => {
                  console.log("err: ", err);
                  message.error("Khóa học đã đăng ký");
                });
            }}
          >
            Đăng ký
          </button>
          <p className="flex items-center justify-between mb-2">
            Ghi danh: <span className="font-bold">10 học viên</span>{" "}
            <UserOutlined />
          </p>
          <hr />
          <p className="flex items-center justify-between mb-2">
            Thời gian: <span className="font-bold">18 giờ</span>{" "}
            <FieldTimeOutlined />
          </p>
          <hr />
          <p className="flex items-center justify-between mb-2">
            Bài học: <span className="font-bold">10</span> <ReadOutlined />
          </p>
          <hr />
          <p className="flex items-center justify-between mb-2">
            Video: <span className="font-bold">14</span> <PlayCircleOutlined />
          </p>
          <hr />
          <p className="flex items-center justify-between mb-2">
            Trình độ: <span className="font-bold">Người mới bắt đầu</span>{" "}
            <DatabaseOutlined />
          </p>
          <hr />
          <Input placeholder="Nhập mã" />
        </Card>
      </div>
    </div>
  );
}
