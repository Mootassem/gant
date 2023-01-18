/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useRef, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import DashboardService from 'src/modules/dashboard/DashboardService';
import projetEnumerators from 'src/modules/projet/projetEnumerators';
let label: string[] = [''];
let counts: number[] = [];
const options = {
  responsive: true,
  legend: {
    display: true,
    position: 'top' as const,
  },
  title: {
    display: true,
    text: i18n('dashboard.charts.projectS'),
  },
};

export default function DashboardBarProjetStatut(props) {
  const [chartData, setChartData] = useState({});
  const count = useRef(0);

  useEffect(() => {
    DashboardService.ProjetStatus().then((res) => {
      count.current = res.length;

      setChartData({
        labels: res.map((item) =>
          i18n(
            `entities.projet.enumerators.statutProjet.${item._id}`,
          ),
        ),
        datasets: [
          {
            // label: 'type',
            data: res.map((item) => item.count),
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
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
            i18n('dashboard.charts.projectS'),
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
    <Doughnut
      options={options}
      data={chartData}
      plugins={plugins}
    />
  );
}
