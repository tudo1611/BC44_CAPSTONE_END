import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.scss";

const BarChartBox = (props) => {
  return (
    <div className="bar-chart-box">
      <h3>{props.title}</h3>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
