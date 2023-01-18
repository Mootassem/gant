import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/shippingservice/importer/shippingserviceImporterActions';
import fields from 'src/modules/shippingservice/importer/shippingserviceImporterFields';
import selectors from 'src/modules/shippingservice/importer/shippingserviceImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ShippingserviceImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.shippingservice.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.shippingservice.menu'), '/shippingservice'],
          [i18n('entities.shippingservice.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.shippingservice.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ShippingserviceImportPage;
