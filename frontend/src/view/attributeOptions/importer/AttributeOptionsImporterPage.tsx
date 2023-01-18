import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/attributeOptions/importer/attributeOptionsImporterActions';
import fields from 'src/modules/attributeOptions/importer/attributeOptionsImporterFields';
import selectors from 'src/modules/attributeOptions/importer/attributeOptionsImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AttributeOptionsImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.attributeOptions.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.attributeOptions.menu'), '/attribute-options'],
          [i18n('entities.attributeOptions.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.attributeOptions.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default AttributeOptionsImportPage;
