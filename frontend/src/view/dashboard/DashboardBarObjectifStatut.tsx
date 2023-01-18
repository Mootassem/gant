import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import DashboardService from 'src/modules/dashboard/DashboardService';

const data = {
  labels: [
    `${i18n('dashboard.charts.day')} 1`,
    `${i18n('dashboard.charts.day')} 2`,
    `${i18n('dashboard.charts.day')} 3`,
    `${i18n('dashboard.charts.day')} 4`,
    `${i18n('dashboard.charts.day')} 5`,
  ],
  datasets: [
    {
      label: i18n('dashboard.charts.red'),
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 82],
    },
  ],
};

const options = {
  responsive: true,
  legend: {
    display: false,
    position: 'top' as const,
  },
  title: {
    display: true,
    text: i18n('dashboard.charts.objectif'),
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

export default function DashboardBarObjectifStatut(props) {
  const [chartData, setChartData] = useState({});
  const count = useRef(0);
  useEffect(() => {
    DashboardService.objectifStatus().then(async (res) => {
      count.current = res.length;

      setChartData({
        labels: res.map((crypto) =>
          i18n(
            `entities.objectif.enumerators.status.${crypto._id}`,
          ),
        ),

        datasets: [
          {
            // label: i18n('dashboard.charts.objectif'),
            data: res.map((crypto) => crypto.count),
            backgroundColor: [
              '#50AF95',
              '#ffbb11',
              '#ecf0f1',
              '#50AF95',
              '#f3ba2f',
              '#2a71d0',
            ],
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
            i18n('dashboard.charts.objectif'),
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
