import { useContext, useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { addData } from "./ChartUtils";
import UIContext from "../../../../store/UIContext";

Chart.register(...registerables);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Sales",
      backgroundColor: "rgba(51, 200, 90, 0.1)",
      fill: true,
      borderColor: "#33c863",
      data: addData(12),
      tension: 0.2
    },
    {
      label: "Profit",
      backgroundColor: "rgba(242, 153, 74, 0.1)",
      fill: true,
      borderColor: "#f2994a",
      data: addData(12),
      tension: 0.2
    }
  ]
};

const ChartContainer = () => {
  const uiCtx = useContext(UIContext);
  const chartRef = useRef({} as Chart);

  useEffect(() => {
    const canvasId = document.getElementById("chart-canvas") as HTMLCanvasElement;
    chartRef.current = new Chart(canvasId, {
      type: "line",
      data,
      options: {
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false,
          axis: "x"
        },
        plugins: {
          tooltip: {
            enabled: true
          },
          legend: undefined
        },
        scales: {
          y: {
            display: false
          },
          x: {
            grid: {
              drawBorder: false,
              borderDash: [6],
              color: uiCtx.theme === "light" ? "#dddfe5" : "#26323f"
            },
            ticks: {
              color: uiCtx.theme === "light" ? "#929292" : "#fff",
              font: {
                family: "'Mulish', sans-serif",
                size: 16
              }
            }
          }
        }
      }
    });

    return () => chartRef.current.destroy();
  }, [uiCtx.theme]);
  return <canvas id="chart-canvas"></canvas>;
};

export default ChartContainer;
