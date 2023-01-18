import React from 'react';
import { i18n } from 'src/i18n';
import TypeProjetListFilter from 'src/view/typeProjet/list/TypeProjetListFilter';
import TypeProjetListTable from 'src/view/typeProjet/list/TypeProjetListTable';
import TypeProjetListToolbar from 'src/view/typeProjet/list/TypeProjetListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TypeProjetListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.typeProjet.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.typeProjet.list.title')}
        </PageTitle>

        <TypeProjetListToolbar />
        <TypeProjetListFilter />
        <TypeProjetListTable />
      </ContentWrapper>
    </>
  );
}

export default TypeProjetListPage;
