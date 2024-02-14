import ReactECharts from "echarts-for-react";

export default function GaugeChart() {
  /** @type EChartsOption */
  const options = {
    series: [
      {
        type: "gauge",
        progress: {
          show: true,
          width: 20,
        },
        axisLine: {
          lineStyle: {
            width: 20,
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          length: 5,
          lineStyle: {
            width: 2,
            color: "#f0f0f0",
          },
        },
        axisLabel: {
          show: false,
          distance: 25,
          color: "#f0f0f0",
          fontSize: 10,
        },
        anchor: {
          show: true,
          showAbove: true,
          size: 10,
          itemStyle: {
            borderWidth: 9,
          },
        },
        title: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          fontSize: 22,
          formatter: "{value}%",
          offsetCenter: [0, "100%"],
          color: "#f0f0f0",
        },
        data: [
          {
            value: 70,
          },
        ],
      },
    ],
  };
  return (
    <div className="cursor-pointer">
      <ReactECharts
        style={{ width: "250px", height: "180px", padding: 0 }}
        option={options}
      />
    </div>
  );
}
