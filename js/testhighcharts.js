Highcharts.chart("graph-container-01", {
  // 차트명
  title: {
    text: "설정한 학습명",
  },
  // 차트 부제
  subtitle: {
    text: "ex) Java",
  },
  //   x축
  xAxis: {
    categories: ["월", "화", "수", "목", "금", "토", "일"],
    crosshair: true,
  },
  //   y축
  yAxis: {
    title: {
      text: "학습률",
    },
  },
  //   범례 속성
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "top",
  },
  //   범례, 데이터 값
  series: [
    {
      name: "Spring",
      data: [100, 100, 100, 100, 100, 100, 100],
      type: "column",
    },
    {
      name: "React",
      data: [100, 100, 100, 100, 100, 100, 100],
      type: "column",
    },
    {
      name: "JavaScript",
      data: [100, 100, 100, 100, 100, 100, 100],
      type: "column",
    },
  ],
  credits: {
    enabled: false,
  },
  tooltip: {
    valueSuffix: "%",
  },
  //   반응형 속성
  //   responsive: { }
});
