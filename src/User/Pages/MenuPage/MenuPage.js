import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { https } from "../../services/config";
import { setMenuDetail } from "../../Redux/menuDetailSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "antd";
const { Meta } = Card;
export default function MenuPage() {
  const [menuCourse, setMenuCourse] = useState([]);
  const dispatch = useDispatch();

  let { maDanhMuc } = useParams();
  useEffect(() => {
    https
      .get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}`)
      .then((res) => {
        setMenuCourse(res.data);
        dispatch(setMenuDetail(res.data));
      })
      .catch((err) => {});
  }, []);

  let renderMenuCoursesList = () => {
    return menuCourse.map(
      ({ hinhAnh, moTa, danhMucKhoaHoc, tenKhoaHoc, maKhoaHoc }) => {
        return (
          <Card
            bordered={true}
            hoverable={true}
            key={danhMucKhoaHoc}
            bodyStyle={{ padding: 0 }}
            className="mt-10 rounded-2xl "
            cover={<img src={hinhAnh} style={{ height: 200 }} />}
          >
            <div
              style={{
                backgroundColor: "rgba(245, 95, 141, 0.1)",
                borderEndEndRadius: 15,
                borderBottomLeftRadius: 15,
              }}
            >
              <Meta
                style={{ fontSize: "12px" }}
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
                className="w-full btn-gradient inline-block text-center py-2 m-0 rounded  transition duration-500 cursor-pointer hover:scale-75"
                to={`/detail/${maKhoaHoc}`}
              >
                Chi tiết
              </NavLink>
            </div>
          </Card>
        );
      }
    );
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
      <Slider {...settings}>{renderMenuCoursesList()}</Slider>
    </div>
  );
}
