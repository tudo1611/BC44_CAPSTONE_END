import React from "react";
import Lottie from "lottie-react";
import bgAnimate from "./bg_animate.json";
import { setLogin } from "../../Redux/userSlice";
import { https } from "../../services/config";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { localServ } from "../../services/localStoreService";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
export default function LoginPage() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  //login
  const onFinish = (values) => {
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        message.success("Đăng nhập thành công");
        dispatch(setLogin(res.data));
        localServ.setUser(res.data);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        message.error("Đăng nhập thất bại");
      });
  };
  return (
    <div className="p-10 grid grid-cols-4 gap-5  h-screen w-screen items-center justify-center">
      <div className="col-span-2 h-full opacity-75">
        <Lottie animationData={bgAnimate} loop={true} />
      </div>
      <div
        style={{
          backgroundColor: "rgb(200,232,188)",
          background:
            "linear-gradient(45deg, rgba(200,232,188,1) 18%, rgba(11,238,83,0.9360994397759104) 46%, rgba(66,224,185,0.9529061624649859) 76%)",
          opacity: 0.8,
        }}
        className=" bg-white col-span-2 mx-20 p-10 rounded-lg"
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
          style={{ fontWeight: "bold" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              style={{ fontWeight: "bold", border: "1px solid #fff" }}
              className="bg-green-400 hover:bg-white rounded"
              htmlType="submit"
            >
              Submit
            </Button>
            <NavLink
              style={{
                fontWeight: "bold",
                border: "1px solid #fff",
              }}
              className="bg-green-400 hover:bg-white ml-3 p-1.5 rounded"
              to={"/register"}
            >
              SignUp
            </NavLink>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
