import React from 'react';
import { i18n } from 'src/i18n';
import TypeDepenseListFilter from 'src/view/typeDepense/list/TypeDepenseListFilter';
import TypeDepenseListTable from 'src/view/typeDepense/list/TypeDepenseListTable';
import TypeDepenseListToolbar from 'src/view/typeDepense/list/TypeDepenseListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TypeDepenseListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.typeDepense.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.typeDepense.list.title')}
        </PageTitle>

        <TypeDepenseListToolbar />
        <TypeDepenseListFilter />
        <TypeDepenseListTable />
      </ContentWrapper>
    </>
  );
}

export default TypeDepenseListPage;
