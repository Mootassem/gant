import React from 'react';
import { i18n } from 'src/i18n';
import TypeRevenueListFilter from 'src/view/typeRevenue/list/TypeRevenueListFilter';
import TypeRevenueListTable from 'src/view/typeRevenue/list/TypeRevenueListTable';
import TypeRevenueListToolbar from 'src/view/typeRevenue/list/TypeRevenueListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TypeRevenueListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.typeRevenue.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.typeRevenue.list.title')}
        </PageTitle>

        <TypeRevenueListToolbar />
        <TypeRevenueListFilter />
        <TypeRevenueListTable />
      </ContentWrapper>
    </>
  );
}

export default TypeRevenueListPage;
