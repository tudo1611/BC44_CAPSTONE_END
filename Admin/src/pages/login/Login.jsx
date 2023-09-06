import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Col, Form, Input, Row, message } from "antd";
import { https } from "../../service/config";
import { setLogin } from "../../redux/adminSlice";
import { localServ } from "../../service/localStoreService";
import { hideLoading } from "../../redux/loadingSpinnerSlice";
import "./login.scss";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const onFinish = (values) => {
    https
      .post("api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        if (res.data.maLoaiNguoiDung !== "GV") {
          message.error("Login Unauthorized");
          dispatch(hideLoading());
          window.location.reload();
        } else {
          message.success("Login successfully");
          dispatch(setLogin(res.data));
          localServ.setAdmin(res.data);
          localServ.setAccessToken(res.data.accessToken);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      })
      .catch((err) => {
        message.error("Login failed");
        dispatch(hideLoading());
      });
  };

  return (
    <div className="login-page ">
      <div className="login-box">
        <div className="login-logo">
          <h4>Admin Elearn</h4>
          <h6 className="sub-title">Sign in your account</h6>
        </div>
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
          layout="vertical"
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="taiKhoan"
                label="Username"
                rules={[
                  {
                    required: true,
                    message: "Please enter username",
                  },
                ]}
              >
                <Input placeholder="demo123" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="matKhau"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter password",
                  },
                ]}
              >
                <Input.Password placeholder="*****" />
              </Form.Item>
            </Col>
          </Row>
          <div className="submit-section">
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Sign in
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
