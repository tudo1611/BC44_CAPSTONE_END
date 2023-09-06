import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Form, Select, Input, Row, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { https } from "../../../service/config";
import { hideLoading } from "../../../redux/loadingSpinnerSlice";
import { useForm } from "antd/es/form/Form";

const { Option } = Select;
const validateMessages = {
  types: {
    email: "Please enter valid email!",
    // number: "Please enter only number",
  },
};

const EditUser = () => {
  const [userInfo, setUserInfo] = useState({});
  const [userType, setUserType] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  const [form] = Form.useForm();

  useEffect(() => {
    https
      .get("api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP03", {
        params: {
          tuKhoa: id,
        },
      })
      .then((res) => {
        setUserInfo(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    https
      .get("api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung")
      .then((res) => {
        setUserType(res.data);
      })
      .catch((err) => {
        message.error("Get data failed");
        dispatch(hideLoading());
      });
  }, []);

  useEffect(() => {
    form.setFieldsValue({ ...userInfo, maNhom: "GP03" });
  }, [userInfo]);

  const onFinish = (values) => {
    https
      .put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", values)
      .then((res) => {
        message.success("Update user successfully");
        setTimeout(() => {
          navigate("/users");
        }, 600);
      })
      .catch((err) => {
        message.error("Update user failed");
        dispatch(hideLoading());
      });
  };

  return (
    <div className="details-form">
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        // initialValues={initialValues}
        validateMessages={validateMessages}
        requiredMark
      >
        <div className="form-header">
          <h5>User Details</h5>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
        <hr />
        <Row gutter={16}>
          <Col span={12}>
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
              <Input placeholder="Username" />
            </Form.Item>
          </Col>
          <Col span={12}>
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
              <Input.Password placeholder="Password" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="hoTen"
              label="Full name"
              rules={[
                {
                  required: true,
                  message: "Please enter full name",
                },
              ]}
            >
              <Input placeholder="Full name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="soDt"
              label="Phone number"
              rules={[
                {
                  required: true,
                  message: "Please enter phone number",
                },
                // { type: "number" },
              ]}
            >
              <Input placeholder="Phone number" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="maLoaiNguoiDung"
              label="User type"
              rules={[
                {
                  required: true,
                  message: "Please enter user type",
                },
              ]}
            >
              <Select placeholder="Select an option" allowClear>
                {userType.map((item) => {
                  return (
                    <Option
                      key={item.maLoaiNguoiDung}
                      value={item.maLoaiNguoiDung}
                    >
                      {item.maLoaiNguoiDung}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="maNhom"
              label="Group"
              rules={[
                {
                  required: true,
                  message: "Please enter group",
                },
              ]}
            >
              <Select placeholder="Select an option" allowClear>
                <Option value="GP03">GP03</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name={["email"]}
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please enter email",
                },
                { type: "email" },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default EditUser;
