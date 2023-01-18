import React from 'react';
import { i18n } from 'src/i18n';
import AttributesListFilter from 'src/view/attributes/list/AttributesListFilter';
import AttributesListTable from 'src/view/attributes/list/AttributesListTable';
import AttributesListToolbar from 'src/view/attributes/list/AttributesListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { useRouteMatch } from 'react-router-dom';

function AttributesListPage(props) {
  const match = useRouteMatch();
  const idProdcut = match.params?.id;

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.attributes.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.attributes.list.title')}
        </PageTitle>

        <AttributesListToolbar ProductId={idProdcut} />
        <AttributesListFilter ProductId={idProdcut} />
        <AttributesListTable />
      </ContentWrapper>
    </>
  );
}

export default AttributesListPage;
