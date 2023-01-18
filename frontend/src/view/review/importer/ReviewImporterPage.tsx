import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/review/importer/reviewImporterActions';
import fields from 'src/modules/review/importer/reviewImporterFields';
import selectors from 'src/modules/review/importer/reviewImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ReviewImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.review.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.review.menu'), '/review'],
          [i18n('entities.review.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.review.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ReviewImportPage;
