import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/trackOrder/importer/trackOrderImporterActions';
import fields from 'src/modules/trackOrder/importer/trackOrderImporterFields';
import selectors from 'src/modules/trackOrder/importer/trackOrderImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TrackOrderImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.trackOrder.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.trackOrder.menu'), '/track-order'],
          [i18n('entities.trackOrder.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.trackOrder.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default TrackOrderImportPage;
