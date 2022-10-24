import * as echarts from "echarts";
import { useEffect } from "react";
export default function LineChart(params) {
  const initChart = () => {
    if (document.getElementById("piechart") == null) {
      return;
    }
    echarts.dispose(document.getElementById("piechart"));
    let element = document.getElementById("piechart");
    let myChart = echarts.init(element);
    myChart.clear();
    let option;
    option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    };

    option && myChart.setOption(option);
  };

  useEffect(() => {
    initChart();
  }, []);
  return (
    <div>
      <p>LineChart3</p>
      <div
        id="piechart"
        style={{ width: "80%", margin: "0 auto", height: "400px" }}
      >
        {" "}
      </div>
    </div>
  );
}
