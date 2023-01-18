import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/charge/importer/chargeImporterActions';
import fields from 'src/modules/charge/importer/chargeImporterFields';
import selectors from 'src/modules/charge/importer/chargeImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ChargeImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.charge.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.charge.menu'), '/charge'],
          [i18n('entities.charge.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.charge.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ChargeImportPage;
