import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import Widget from "../../components/widget/Widget";
import TopBox from "../../components/topBox/TopBox";
import { barChartOnlineCourses, barChartOfflineCourses } from "../../data.js";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="grid-box">
        <div className="box box1">
          <Widget type="courses" />
        </div>
        <div className="box box2">
          <Widget type="students" />
        </div>
        <div className="box box3">
          <Widget type="teachers" />
        </div>
        <div className="box box4">
          <TopBox />
        </div>
        <div className="box box5">
          <BigChartBox />
        </div>
        <div className="box box6">
          <BarChartBox {...barChartOnlineCourses} />
        </div>
        <div className="box box7">
          <BarChartBox {...barChartOfflineCourses} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
