import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/typeCharge/importer/typeChargeImporterActions';
import fields from 'src/modules/typeCharge/importer/typeChargeImporterFields';
import selectors from 'src/modules/typeCharge/importer/typeChargeImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TypeChargeImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.typeCharge.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.typeCharge.menu'), '/type-charge'],
          [i18n('entities.typeCharge.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.typeCharge.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default TypeChargeImportPage;
