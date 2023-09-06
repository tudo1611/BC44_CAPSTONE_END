import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Jan",
    courses: 30,
    students: 167,
    amt: 24,
  },
  {
    name: "Feb",
    courses: 20,
    students: 130,
    amt: 221,
  },
  {
    name: "Mar",
    courses: 24,
    students: 170,
    amt: 229,
  },
  {
    name: "Apr",
    courses: 27,
    students: 218,
    amt: 200,
  },
  {
    name: "May",
    courses: 18,
    students: 179,
    amt: 218,
  },
  {
    name: "Jun",
    courses: 23,
    students: 200,
    amt: 250,
  },
  {
    name: "Jul",
    courses: 25,
    students: 330,
    amt: 210,
  },

  {
    name: "Aug",
    courses: 39,
    students: 360,
    amt: 210,
  },
];

const BigChartBox = () => {
  return (
    <div className="big-chart-box">
      <h3>Recent Courses and Students Number Overview</h3>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="courses" fill="#169bef" />
            <Bar dataKey="students" fill="#4fd1e2" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
