import React, { useEffect, useState } from "react";
import UserNav from "./UserNav";
import { UnorderedListOutlined } from "@ant-design/icons";
import { Input, Menu } from "antd";
import { useDispatch } from "react-redux";
import { https } from "../../services/config";
import { setMenu } from "../../Redux/menuSlice";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [query, setQuery] = useState("");
  const [danhMuc, setDanhMuc] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    https
      .get("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
      .then((res) => {
        setDanhMuc(res.data);
        dispatch(setMenu(res.data));
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <header className="p-1 dark:bg-gray-800 dark:text-gray-100 bg-white text-white font-bold  w-full">
        <div className="flex justify-between items-center h-16 mx-auto">
          <div>
            <NavLink to={"/"}>
              <img
                src="https://demo2.cybersoft.edu.vn/logo.png"
                className="w-40 hover:scale-110 transition duration-500"
                alt=""
              />
            </NavLink>
          </div>
          <Input
            className="search w-48 mx-3"
            placeholder="Search ..."
            onChange={(e) => setQuery(e.target.value)}
          />

          <div>
            <Menu
              style={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
              onClick={({ key }) => {
                navigate(key);
                window.location.reload();
              }}
              mode="horizontal"
              className="w-full"
              items={[
                {
                  label: "Danh mục ",
                  icon: <UnorderedListOutlined />,
                  children: danhMuc.map(({ maDanhMuc, tenDanhMuc }) => {
                    return {
                      key: `/menu/${maDanhMuc}`,
                      label: <NavLink key={maDanhMuc}>{tenDanhMuc}</NavLink>,
                    };
                  }),
                },
                { label: "Khóa học " },
                { label: "Blog " },
                { label: "Sự kiện " },
                { label: "Thông tin " },
              ]}
            ></Menu>
          </div>
          <UserNav />
        </div>
      </header>
    </div>
  );
}
