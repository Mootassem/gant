import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/tag/importer/tagImporterActions';
import fields from 'src/modules/tag/importer/tagImporterFields';
import selectors from 'src/modules/tag/importer/tagImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TagImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.tag.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.tag.menu'), '/tag'],
          [i18n('entities.tag.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.tag.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default TagImportPage;
