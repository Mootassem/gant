import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import DashboardService from 'src/modules/dashboard/DashboardService';

const options = {
  responsive: true,
  legend: {
    display: false,
    position: 'top' as const,
  },
  title: {
    display: true,
    text: i18n('dashboard.charts.projectT'),
  },
  scales: {
    xAxes: [
      {
        display: true,
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          callback: function (value) {
            if (value % 1 === 0) {
              return value;
            }
          },
        },
        display: true,
      },
    ],
  },
};

export default function DashboardBarProjetType(props) {
  const [chartData, setChartData] = useState({});
  const [hasRows, setHasRows] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    DashboardService.ProjetType().then(async (res) => {
      count.current = res.length;
      setChartData({
        labels: res.map((crypto) =>
          crypto.projet.map((item) => item.nom),
        ),
        datasets: [
          {
            backgroundColor: [
              '#97a7b6',
              '#e6a9b3',
              '#dce1e6',
              '#5098cd',
              '#73c779',
              '#b5afd1',
              '#0093a6',
            ],
            hoverBackgroundColor: [
              '#97a7b6',
              '#e6a9b3',
              '#dce1e6',
              '#5098cd',
              '#73c779',
              '#b5afd1',
              '#0093a6',
            ],
            borderWidth: 1,
            hoverBorderWidth: 2,
            borderColor: [
              '#97a7b6',
              '#e6a9b3',
              '#dce1e6',
              '#5098cd',
              '#73c779',
              '#b5afd1',
              '#0093a6',
            ],
            borderAlign: 'inner',
            data: res.map((crypto) => crypto.count),
          },
        ],
      });
    });
  }, []);
  let plugins = [
    {
      afterDraw: function (chart) {
        if (count.current === 0) {
          // No data is present
          var ctx = chart.chart.ctx;
          var width = chart.chart.width;
          var height = chart.chart.height;
          chart.clear();

          ctx.save();
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = "16px normal 'Helvetica Nueue'";
          // chart.options.title.text <=== gets title from chart
          // width / 2 <=== centers title on canvas
          // 18 <=== aligns text 18 pixels from top, just like Chart.js
          ctx.fillText(
            i18n('dashboard.charts.projectT'),
            width / 2,
            18,
          ); // <====   ADDS TITLE
          ctx.fillText(
            i18n('dashboard.charts.nodata'),
            width / 2,
            height / 2,
          );
          ctx.restore();
        }
      },
    },
  ];
  return (
    <Bar
      data={chartData}
      options={options}
      width={100}
      height={50}
      plugins={plugins}
    />
  );
}
