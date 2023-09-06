import * as React from "react";
import { useEffect, useState } from "react";
import { https } from "../../service/config";
import { useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Popconfirm, message } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { hideLoading } from "../../redux/loadingSpinnerSlice";
import "./users.scss";

const Users = () => {
  const [userList, setUserList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    https
      .get("api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03")
      .then((res) => {
        console.log(res.data);
        setUserList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOk = (id) => {
    https
      .delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`)
      .then((res) => {
        message.success("Delete user successfully");
        setTimeout(() => {
          window.location.reload();
        }, 100);
      })
      .catch((err) => {
        message.error("Delete user failed");
        dispatch(hideLoading());
      });
  };

  const columns = [
    { field: "taiKhoan", headerName: "Username", width: 150 },
    { field: "hoTen", headerName: "Full name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "soDt", headerName: "Phone number", width: 150 },
    { field: "maLoaiNguoiDung", headerName: "User type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      pinnable: true,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        return (
          <div className="actions">
            <Link to={`user-profile/${params.row.taiKhoan}`}>
              <Visibility className="view-user btn-info" />
            </Link>
            <Link to={`edit-user/${params.row.taiKhoan}`}>
              <Edit className="edit-btn btn-warning" />
            </Link>
            <Popconfirm
              title="Delete username"
              description={`Are you sure to delete username ${params.row.taiKhoan} `}
              okText="Yes"
              icon={
                <QuestionCircleOutlined
                  style={{
                    color: "red",
                  }}
                />
              }
              onConfirm={() => {
                handleOk(params.row.taiKhoan);
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

  const rows = userList;

  return (
    <div className="users">
      <div className="button-section">
        <Link to="add-user" className="add-btn btn-success">
          ＋ New User
        </Link>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.taiKhoan}
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

export default Users;
