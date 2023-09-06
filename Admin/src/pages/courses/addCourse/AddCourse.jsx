import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Select,
  Input,
  InputNumber,
  Row,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { https } from "../../../service/config";
import { hideLoading } from "../../../redux/loadingSpinnerSlice";
import moment from "moment";

const { Option } = Select;
const validateMessages = {
  types: {
    number: "Please enter only number",
  },
};

const AddCourse = () => {
  const [imgSrc, setImgSrc] = useState("");
  const [courseType, setCourseType] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let courses = useSelector((state) => state.courseSlice.courses);
  let adminInfo = useSelector((state) => state.adminSlice.adminInfo);

  useEffect(() => {
    https
      .get("api/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
      .then((res) => {
        setCourseType(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: {},
      maNhom: "",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: "",
    },

    onSubmit: (values) => {
      values.maKhoaHoc = courses.length + 1;
      values.maNhom = "GP03";
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }
      https
        .post("api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh", formData)
        .then((res) => {
          message.success("Add new course successfully");
          setTimeout(() => {
            navigate("/courses");
          }, 300);
          console.log(res.data);
        })
        .catch((err) => {
          message.error("Add course error");
          dispatch(hideLoading());
        });
    },
  });

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeSelectOption = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeDatePicker = (value) => {
    console.log(value);
    let dateCreate = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayTao", dateCreate);
  };

  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
      formik.setFieldValue("hinhAnh", file);
    }
  };

  return (
    <div className="details-form">
      <Form
        onFinish={formik.handleSubmit}
        layout="vertical"
        validateMessages={validateMessages}
        requiredMark
      >
        <div className="form-header">
          <h5>Course Details</h5>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
        <hr />
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="biDanh"
              label="Alias"
              rules={[
                {
                  required: true,
                  message: "Please enter alias name",
                },
              ]}
            >
              <Input onChange={formik.handleChange} placeholder="ReactJS" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="tenKhoaHoc"
              label="Course Name"
              rules={[
                {
                  required: true,
                  message: "Please enter course name",
                },
              ]}
            >
              <Input onChange={formik.handleChange} placeholder="ReactJS" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="moTa"
              label="Description"
              rules={[
                {
                  required: true,
                  message: "Please enter description",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                onChange={formik.handleChange}
                placeholder="Please enter brief description about the course"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="luotXem"
              label="View Number"
              rules={[
                {
                  required: true,
                  message: "Please enter view number from 1 to 1000",
                },
              ]}
            >
              <InputNumber
                onChange={handleChangeInputNumber("luotXem")}
                min={1}
                max={1000}
                placeholder="1"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="danhGia"
              label="Rate"
              rules={[
                {
                  required: true,
                  message: "Please rate the course from 1 to 1000",
                },
              ]}
            >
              <InputNumber
                onChange={handleChangeInputNumber("danhGia")}
                min={0}
                max={1000}
                placeholder="1"
              />
            </Form.Item>
          </Col>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label="Course Image ( < 1MB )"
                valuePropName="fileList"
                rules={[
                  {
                    required: true,
                    message: "Please upload course image",
                  },
                ]}
              >
                <input
                  type="file"
                  onChange={handleChangeFile}
                  accept="image/png, image/jpeg,image/gif,image/png"
                />
                <br />
                <img
                  style={{ width: 150, height: 150 }}
                  src={imgSrc}
                  alt="..."
                />
              </Form.Item>
            </Col>
          </Row>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="maNhom"
              label="Group"
              rules={[
                {
                  required: true,
                  message: "Please enter group number (GP03)",
                },
              ]}
            >
              <Select placeholder="Select an option" allowClear>
                <Option value="GP03">GP03</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="maDanhMucKhoaHoc"
              label="Course Category"
              rules={[
                {
                  required: true,
                  message: "Please enter course category",
                },
              ]}
            >
              <Select
                placeholder="Select an option"
                onChange={handleChangeSelectOption("maDanhMucKhoaHoc")}
                allowClear
              >
                {courseType.map((item) => {
                  return (
                    <Option key={item.maDanhMuc} value={item.maDanhMuc}>
                      {item.maDanhMuc}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="ngayTao"
              label="Date Create"
              rules={[
                {
                  required: true,
                  message: "Please enter the date that the course was created",
                },
              ]}
            >
              <DatePicker
                onChange={handleChangeDatePicker}
                format={"DD/MM/YYYY"}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="taiKhoanNguoiTao"
              label="Admin account"
              rules={[
                {
                  required: true,
                  message: "Please enter admin information",
                },
              ]}
            >
              <Input
                onChange={formik.handleChange}
                placeholder={adminInfo.taiKhoan}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddCourse;
