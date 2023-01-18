import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { i18n } from 'src/i18n';
import EntreeService from 'src/modules/entree/entreeService';
import { getHistory } from 'src/modules/store';
import Chart from 'react-chartjs-2';
import DepenseService from 'src/modules/depense/depenseService';
import ChargeService from 'src/modules/charge/chargeService';

export default function DashboardBarChart(props) {
  const options = {
    onClick: function (evt, element) {
      getHistory().push('/entree');
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

  const [entree, setEntree] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  let entreeArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  useEffect(() => {
    EntreeService.list('', '', '', '').then((res) => {
      for (let i = 0; i < res.rows.length; i++) {
        for (let j = 0; j < entreeArray.length; j++) {
          if (
            moment(res.rows[i].date).month() === j &&
            moment(res.rows[i].date).year() ===
              moment().year()
          ) {
            entreeArray[j] += res.rows[i].amount;
          }
        }
      }
      setEntree(entreeArray);
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
        label: i18n('entities.entree.menu'),
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
        data: entree,
      },
    ],
  };

  return <Chart type="bar" data={data} options={options} />;
}
