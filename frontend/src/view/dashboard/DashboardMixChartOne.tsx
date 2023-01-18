import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import ChargeService from 'src/modules/charge/chargeService';
import DepenseService from 'src/modules/depense/depenseService';
import Chart from 'react-chartjs-2';
import { getHistory } from 'src/modules/store';
export default function DashboardMixChartOne(props) {
  const options = {
    onClick: function (evt, element) {
      getHistory().push('/depense');
    },
    title: {
      display: true,
      text: i18n('common.accounting'),
    },
    tooltips: {
      mode: 'label',
    },
    elements: {
      line: {
        fill: false,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  var title = i18n('dashboard.chart.title');
  var text = i18n('dashboard.chart.content');
  const plugins = [
    {
      afterDraw: function (chart) {
        if (chart.data.datasets[0].data.length === 0) {
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
          ctx.fillText(title, width / 2, 18); // <====   ADDS TITLE
          ctx.fillText(text, width / 2, height / 2);
          ctx.restore();
        }
      },
    },
  ];

  const [charge, setCharge] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [depense, setDepense] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  let chargeArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  let depenseArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  useEffect(() => {
    DepenseService.list('', '', '', '').then((res) => {
      for (let i = 0; i < res.rows.length; i++) {
        for (let j = 0; j < depenseArray.length; j++) {
          if (
            moment(res.rows[i].date).month() === j &&
            moment(res.rows[i].date).year() ===
              moment().year()
          ) {
            depenseArray[j] += res.rows[i].amount;
          }
        }
      }
      setDepense(depenseArray);
    });
    ChargeService.list('', '', '', '').then((res) => {
      for (let i = 0; i < res.rows.length; i++) {
        for (let j = 0; j < chargeArray.length; j++) {
          if (
            moment(res.rows[i].date).month() === j &&
            moment(res.rows[i].date).year() ===
              moment().year()
          ) {
            chargeArray[j] += res.rows[i].amount;
          }
        }
      }
      setCharge(chargeArray);
    });
  }, []);
  const labels = [
    i18n('dashboard.charts.months.1'),
    i18n('dashboard.charts.months.2'),
    i18n('dashboard.charts.months.3'),
    i18n('dashboard.charts.months.4'),
    i18n('dashboard.charts.months.5'),
    i18n('dashboard.charts.months.6'),
    i18n('dashboard.charts.months.7'),
    i18n('dashboard.charts.months.8'),
    i18n('dashboard.charts.months.9'),
    i18n('dashboard.charts.months.10'),
    i18n('dashboard.charts.months.11'),
    i18n('dashboard.charts.months.12'),
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        type: 'line' as const,
        label: i18n('entities.depense.menu'),
        backgroundColor: '#D32F2F',
        borderColor: '#D32F2F',
        data: depense,
        borderWidth: 2,
        fill: false,
      },
      {
        type: 'bar' as const,
        label: i18n('entities.charge.menu'),
        backgroundColor: 'rgb(53, 162, 235)',
        borderColor: 'rgb(53, 162, 235)',
        borderWidth: 2,
        fill: false,
        data: charge,
      },
    ],
  };
  return (
    <Chart
      type="bar"
      data={data}
      options={options}
      plugins={plugins}
    />
  );
}
