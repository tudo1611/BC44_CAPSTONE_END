// import { Link } from "react-router-dom";
import "./widget.scss";
// import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";

const ChartBox = ({ type }) => {
  let data;
  const diff = 20;
  switch (type) {
    case "courses":
      data = {
        title: "COURSES",
        counter: "7.384",
        link: "See all courses",
        icon: (
          <SchoolIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "students":
      data = {
        title: "STUDENTS",
        counter: "87.794",
        link: "See all students",
        icon: (
          <GroupIcon
            className="icon"
            style={{
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              color: "crimson",
            }}
          />
        ),
      };
      break;
    case "teachers":
      data = {
        title: "TEACHERS",
        counter: "98.776",
        link: "See all teachers",
        icon: (
          <CastForEducationIcon
            className="icon"
            style={{
              backgroundColor: "rgba(0, 128, 0, 0.2)",
              color: "green",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.counter}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default ChartBox;
