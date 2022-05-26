import { ChartProps } from "../../utils";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props: ChartProps): JSX.Element => {
  const dataPointValues = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          {...dataPoint}
          key={dataPoint.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};

export default Chart;
