import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/objectif/importer/objectifImporterActions';
import fields from 'src/modules/objectif/importer/objectifImporterFields';
import selectors from 'src/modules/objectif/importer/objectifImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ObjectifImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.objectif.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.objectif.menu')],
          [i18n('entities.objectif.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.objectif.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ObjectifImportPage;
