import React, { useState, useEffect } from "react";
import { https } from "../../../services/config";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Card } from "antd";
import { addCourses } from "../../../Redux/courseSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const { Meta } = Card;
export default function ListCourse() {
  const [courseArr, setCourseArr] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    https
      .get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
      .then((res) => {
        setCourseArr(res.data);
        dispatch(addCourses(res.data));
      })
      .catch((err) => {});
  }, []);
  let renderCoursesList = () => {
    return courseArr.map(({ hinhAnh, moTa, tenKhoaHoc, maKhoaHoc }) => {
      return (
        <Card
          bordered={true}
          hoverable={true}
          key={maKhoaHoc}
          className="mt-10 rounded-2xl "
          bodyStyle={{ padding: 0 }}
          cover={<img src={hinhAnh} style={{ height: 200 }} />}
        >
          <div
            style={{
              backgroundColor: "rgba(245, 95, 141, 0.1)",
              padding: "0px !important",
              borderEndEndRadius: 15,
              borderBottomLeftRadius: 15,
            }}
          >
            <Meta
              style={{
                fontSize: "12px",
              }}
              title={tenKhoaHoc}
              className="text-center p-2 rounded  border-transparent"
              description={
                moTa.length > 20 ? (
                  <span>{moTa.slice(0, 20)}...</span>
                ) : (
                  <span>{moTa}</span>
                )
              }
            />
            <NavLink
              style={{
                color: "white",
              }}
              className="w-full text-center  btn-gradient  transition duration-500 cursor-pointer hover:scale-75"
              to={`/detail/${maKhoaHoc}`}
            >
              Chi tiết
            </NavLink>
          </div>
        </Card>
      );
    });
  };
  const settings = {
    className: "container ",
    centerMode: false,
    infinite: false,
    centerPadding: "30px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          rows: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          rows: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>{renderCoursesList()}</Slider>
    </div>
  );
}
