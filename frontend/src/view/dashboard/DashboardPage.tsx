import React from 'react';
import { i18n } from 'src/i18n';
import DashboardBarChart from 'src/view/dashboard/DashboardBarChart';
import DashboardBarObjectifStatut from 'src/view/dashboard/DashboardBarObjectifStatut';
import DashboardBarProjetStatut from 'src/view/dashboard/DashboardBarProjetStatut';
import DashboardBarProjetType from 'src/view/dashboard/DashboardBarProjetType';
import DashboardProjectCount from 'src/view/dashboard/DashboardProjectCount';
import DashboardMixChartOne from 'src/view/dashboard/DashboardMixChartOne';
import DashboardPartnerCount from 'src/view/dashboard/DashboardPartnerCount';
import DashboardNewsCount from 'src/view/dashboard/DashboardNewsCount';
import DashboardAdherentCount from 'src/view/dashboard/DashboardAdherentCount';

const DashboardPage = (props) => {
  return (
    <>
      <div
        style={{
          padding: 0,
          marginLeft: '-12px',
          marginRight: '-12px',
        }}
      >
        <div className="row no-gutters">
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3"
          >
            <div className="bg-white p-2 border rounded">
              <DashboardProjectCount />
            </div>
          </div>
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3"
          >
            <div className="bg-white p-2 border rounded">
              <DashboardPartnerCount />
            </div>
          </div>
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3"
          >
            <div className="bg-white p-2 border rounded">
              <DashboardNewsCount />
            </div>
          </div>
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3"
          >
            <div className="bg-white p-2 border rounded">
              <DashboardAdherentCount />
            </div>
          </div>
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div className="bg-white p-2 border rounded">
              <DashboardMixChartOne />
            </div>
          </div>

          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div className="bg-white p-2 border rounded">
              <DashboardBarChart />
            </div>
          </div>

          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="bg-white p-2 border rounded">
              <DashboardBarProjetType />
            </div>
          </div>
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="bg-white p-2 border rounded">
              <DashboardBarProjetStatut />
            </div>
          </div>
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="bg-white p-2 border rounded">
              <DashboardBarObjectifStatut />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
