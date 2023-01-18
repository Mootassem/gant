import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/depense/importer/depenseImporterActions';
import fields from 'src/modules/depense/importer/depenseImporterFields';
import selectors from 'src/modules/depense/importer/depenseImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DepenseImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.depense.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.depense.menu'), '/depense'],
          [i18n('entities.depense.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.depense.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default DepenseImportPage;
