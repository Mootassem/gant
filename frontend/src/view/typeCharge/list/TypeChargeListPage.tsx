import React from 'react';
import { i18n } from 'src/i18n';
import TypeChargeListFilter from 'src/view/typeCharge/list/TypeChargeListFilter';
import TypeChargeListTable from 'src/view/typeCharge/list/TypeChargeListTable';
import TypeChargeListToolbar from 'src/view/typeCharge/list/TypeChargeListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TypeChargeListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.typeCharge.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.typeCharge.list.title')}
        </PageTitle>

        <TypeChargeListToolbar />
        <TypeChargeListFilter />
        <TypeChargeListTable />
      </ContentWrapper>
    </>
  );
}

export default TypeChargeListPage;
