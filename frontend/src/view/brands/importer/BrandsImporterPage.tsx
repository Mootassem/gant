import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/brands/importer/brandsImporterActions';
import fields from 'src/modules/brands/importer/brandsImporterFields';
import selectors from 'src/modules/brands/importer/brandsImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function BrandsImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.brands.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.brands.menu'), '/brands'],
          [i18n('entities.brands.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.brands.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default BrandsImportPage;
