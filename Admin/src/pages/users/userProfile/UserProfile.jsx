import React, { useEffect, useState } from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./userProfile.scss";
import { useParams } from "react-router-dom";
import { https } from "../../../service/config";
import { singleUser } from "../../../data";

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({});
  let { id } = useParams();
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
  }, []);

  console.log(userInfo);

  return (
    <div className="user-profile">
      <div className="single">
        <div className="info">
          <h5 className="title">Information</h5>
          <div className="view">
            <div className="item">
              <img src="https://i.pravatar.cc/300" alt="" className="itemImg" />
              <div className="details">
                <h4 className="itemTitle">{userInfo.hoTen}</h4>
                <div className="detailItem">
                  <span className="itemKey">Username:</span>
                  <span className="itemValue">{userInfo.taiKhoan}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{userInfo.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{userInfo.soDt}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">User type:</span>
                  <span className="itemValue">{userInfo.tenLoaiNguoiDung}</span>
                </div>
              </div>
            </div>
            <hr />
            {singleUser.chart && (
              <div className="chart">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    width={500}
                    height={300}
                    data={singleUser.chart.data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {singleUser.chart.dataKeys.map((dataKey) => (
                      <Line
                        key={dataKey.name}
                        type="monotone"
                        dataKey={dataKey.name}
                        stroke={dataKey.color}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>
        <div className="activities">
          <h5 className="title">Latest Activities</h5>
          <ul>
            {singleUser.activities.map((activity) => (
              <li key={activity.id}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
