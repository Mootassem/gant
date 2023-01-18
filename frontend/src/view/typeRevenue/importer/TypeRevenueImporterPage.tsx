import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/typeRevenue/importer/typeRevenueImporterActions';
import fields from 'src/modules/typeRevenue/importer/typeRevenueImporterFields';
import selectors from 'src/modules/typeRevenue/importer/typeRevenueImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TypeRevenueImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.typeRevenue.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.typeRevenue.menu'), '/type-revenue'],
          [i18n('entities.typeRevenue.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.typeRevenue.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default TypeRevenueImportPage;
