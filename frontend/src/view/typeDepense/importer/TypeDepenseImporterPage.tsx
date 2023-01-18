import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/typeDepense/importer/typeDepenseImporterActions';
import fields from 'src/modules/typeDepense/importer/typeDepenseImporterFields';
import selectors from 'src/modules/typeDepense/importer/typeDepenseImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TypeDepenseImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.typeDepense.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.typeDepense.menu'), '/type-depense'],
          [i18n('entities.typeDepense.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.typeDepense.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default TypeDepenseImportPage;
