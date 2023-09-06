import * as React from "react";
import { useEffect, useState } from "react";
import { https } from "../../service/config";
import { useDispatch } from "react-redux";
import { addCourses } from "../../redux/courseSlice";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Popconfirm, message } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { hideLoading } from "../../redux/loadingSpinnerSlice";
import "./courses.scss";

const Courses = () => {
  const [courseArr, setCourseArr] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    https
      .get("api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP03")
      .then((res) => {
        setCourseArr(res.data);
        dispatch(addCourses(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOk = (id) => {
    https
      .delete(`api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`)
      .then((res) => {
        message.success("Delete course successfully");
        setTimeout(() => {
          window.location.reload();
        }, 100);
      })
      .catch((err) => {
        message.error("Delete course failed");
        dispatch(hideLoading());
      });
  };

  const columns = [
    { field: "maKhoaHoc", headerName: "ID", width: 150 },
    {
      field: "tenKhoaHoc",
      headerName: "Course Name",
      renderCell: (params) => (
        <div className="course-items">
          <img
            className="course-img"
            src={params.row.hinhAnh}
            variant="rounded"
          />
          <p className="course-name">{params.row.tenKhoaHoc}</p>
        </div>
      ),
      width: 300,
    },
    {
      field: "danhMucKhoaHoc",
      headerName: "Categories",
      renderCell: (params) => (
        <p>{params.row.danhMucKhoaHoc.maDanhMucKhoahoc}</p>
      ),
      width: 230,
    },
    {
      field: "moTa",
      headerName: "Description",
      width: 250,
    },
    {
      field: "action",
      headerName: "Action",
      pinnable: true,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        return (
          <div className="actions">
            <Link to={`edit-course/${params.row.maKhoaHoc}`}>
              <Edit className="edit-btn btn-warning" />
            </Link>
            <Popconfirm
              title="Delete the course"
              description={`Are you sure to delete ${params.row.tenKhoaHoc} course`}
              okText="Yes"
              icon={
                <QuestionCircleOutlined
                  style={{
                    color: "red",
                  }}
                />
              }
              onConfirm={() => {
                handleOk(params.row.maKhoaHoc);
              }}
            >
              <Delete className="delete-btn btn-danger" />
            </Popconfirm>
          </div>
        );
      },

      width: 200,
    },
  ];

  const rows = courseArr;

  return (
    <div className="course-container">
      <div className="button-section">
        <Link to="add-course" className="add-btn btn-success">
          ＋ New Course
        </Link>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.maKhoaHoc}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </div>
  );
};

export default Courses;
