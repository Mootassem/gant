import React from 'react';
import { i18n } from 'src/i18n';
import CartListFilter from 'src/view/cart/list/CartListFilter';
import CartListTable from 'src/view/cart/list/CartListTable';
import CartListToolbar from 'src/view/cart/list/CartListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CartListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.cart.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.cart.list.title')}
        </PageTitle>

        <CartListToolbar />
        <CartListFilter />
        <CartListTable />
      </ContentWrapper>
    </>
  );
}

export default CartListPage;
