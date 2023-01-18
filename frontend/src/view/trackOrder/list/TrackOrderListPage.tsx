import React from 'react';
import { i18n } from 'src/i18n';
import TrackOrderListFilter from 'src/view/trackOrder/list/TrackOrderListFilter';
import TrackOrderListTable from 'src/view/trackOrder/list/TrackOrderListTable';
import TrackOrderListToolbar from 'src/view/trackOrder/list/TrackOrderListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TrackOrderListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.trackOrder.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.trackOrder.list.title')}
        </PageTitle>

        <TrackOrderListToolbar />
        <TrackOrderListFilter />
        <TrackOrderListTable />
      </ContentWrapper>
    </>
  );
}

export default TrackOrderListPage;
