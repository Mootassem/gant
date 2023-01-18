import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/entree/importer/entreeImporterActions';
import fields from 'src/modules/entree/importer/entreeImporterFields';
import selectors from 'src/modules/entree/importer/entreeImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function EntreeImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.entree.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.entree.menu'), '/entree'],
          [i18n('entities.entree.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.entree.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default EntreeImportPage;
