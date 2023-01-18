import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/chieldCategories/importer/chieldCategoriesImporterActions';
import fields from 'src/modules/chieldCategories/importer/chieldCategoriesImporterFields';
import selectors from 'src/modules/chieldCategories/importer/chieldCategoriesImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ChieldCategoriesImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.chieldCategories.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.chieldCategories.menu'), '/chield-categories'],
          [i18n('entities.chieldCategories.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.chieldCategories.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ChieldCategoriesImportPage;
