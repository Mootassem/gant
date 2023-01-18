import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/group/importer/groupImporterActions';
import fields from 'src/modules/group/importer/groupImporterFields';
import selectors from 'src/modules/group/importer/groupImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function GroupImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.group.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.group.menu'), '/group'],
          [i18n('entities.group.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.group.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default GroupImportPage;
