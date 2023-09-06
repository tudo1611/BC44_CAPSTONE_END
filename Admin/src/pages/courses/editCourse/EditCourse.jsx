import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  message,
} from "antd";
import { Formik, useFormik } from "formik";
import { https } from "../../../service/config";
import { hideLoading } from "../../../redux/loadingSpinnerSlice";
import dayjs from "dayjs";

const { Option } = Select;

const EditCourse = () => {
  const [imgSrc, setImgSrc] = useState("");
  const [courseInfo, setCourseInfo] = useState(null);
  const [courseType, setCourseType] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  let adminInfo = useSelector((state) => state.adminSlice.adminInfo);

  useEffect(() => {
    https
      .get(`api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
      .then((res) => {
        console.log(res.data);
        setCourseInfo(res.data);
      })
      .catch((err) => {});
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
    enableReinitialize: true,
    initialValues: {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: "",
      danhGia: "",
      hinhAnh: "",
      maNhom: "",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: "",
    },

    onSubmit: (values) => {
      console.log("values", values);
      values.maNhom = "GP03";
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh);
        }
      }
      console.log(formData);
      https
        .post("api/QuanLyKhoaHoc/CapNhatKhoaHocUpload", formData)
        .then((res) => {
          console.log(res.data);
          message.success("Update course successfully");
          setTimeout(() => {
            navigate("/courses");
          }, 300);
        })
        .catch((err) => {
          message.error("Update course error");
          dispatch(hideLoading());
        });
    },
  });

  useEffect(() => {
    if (courseInfo) {
      const { danhMucKhoaHoc, nguoiTao, ngayTao, ...newCourseInfo } =
        courseInfo;
      newCourseInfo.maDanhMucKhoaHoc = danhMucKhoaHoc.maDanhMucKhoahoc;
      newCourseInfo.taiKhoanNguoiTao = nguoiTao.taiKhoan;
      newCourseInfo.danhGia = 1;

      formik.setValues(newCourseInfo);
      form.setFieldsValue(newCourseInfo);
      console.log(dayjs(ngayTao).format("MM/DD/YYYY"));
      form.setFieldValue("ngayTao", dayjs(ngayTao));
    }
  }, [courseInfo]);

  const [form] = Form.useForm();

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
    let dateCreate = dayjs(value);
    formik.setFieldValue("ngayTao", dateCreate);
  };

  const handleChangeFile = async (e) => {
    //Lấy file ra từ e
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      //Đem dữ liệu file lưu vào formik
      await formik.setFieldValue("hinhAnh", file);
      //Tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(e.target.result);
        setImgSrc(e.target.result); //Hình base 64
      };
    }
  };

  return (
    <div className="course-form">
      <Form
        form={form}
        onFinish={formik.handleSubmit}
        layout="vertical"
        requiredMark
        initialValues={formik.initialValues}
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
                  required: false,
                  message: "Please enter name",
                },
              ]}
            >
              <Input
                name="biDanh"
                onChange={formik.handleChange}
                placeholder="ReactJS"
                value={formik.values.biDanh}
              />
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
              <Input
                name="tenKhoaHoc"
                value={formik.values.tenKhoaHoc}
                onChange={formik.handleChange}
                placeholder="ReactJS"
              />
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
                name="moTa"
                rows={4}
                value={formik.values.moTa}
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
                name="luotXem"
                value={formik.values.luotXem}
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
                name="danhGia"
                value={formik.values.danhGia}
                onChange={handleChangeInputNumber("danhGia")}
                min={1}
                max={1000}
                placeholder="1"
              />
            </Form.Item>
          </Col>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label="Course Image"
                valuePropName="fileList"
                rules={[
                  {
                    required: true,
                    message: "Please upload course image",
                  },
                ]}
              >
                <input
                  name="hinhAnh"
                  type="file"
                  onChange={handleChangeFile}
                  accept="image/png, image/jpeg,image/gif,image/png"
                />
                <br />
                <img
                  style={{ width: 150, height: 150 }}
                  src={imgSrc === "" ? courseInfo?.hinhAnh : imgSrc}
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
                  required: false,
                  message: "Please enter group number",
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
                name="maDanhMucKhoaHoc"
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
                  required: false,
                  message: "Please enter the date that the course was created",
                },
              ]}
            >
              <DatePicker
                onChange={handleChangeDatePicker}
                format="MM/DD/YYYY"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="taiKhoanNguoiTao"
              label="Admin account"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                name="taiKhoanNguoiTao"
                value={formik.values.taiKhoanNguoiTao}
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

export default EditCourse;
