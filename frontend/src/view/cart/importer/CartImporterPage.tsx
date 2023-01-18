import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/cart/importer/cartImporterActions';
import fields from 'src/modules/cart/importer/cartImporterFields';
import selectors from 'src/modules/cart/importer/cartImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CartImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.cart.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.cart.menu'), '/cart'],
          [i18n('entities.cart.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.cart.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default CartImportPage;
