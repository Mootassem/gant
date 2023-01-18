import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/cart/view/cartViewActions';
import selectors from 'src/modules/cart/view/cartViewSelectors';
import CartView from 'src/view/cart/view/CartView';
import CartViewToolbar from 'src/view/cart/view/CartViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CartPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.cart.menu'), '/cart'],
          [i18n('entities.cart.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.cart.view.title')}
        </PageTitle>

        <CartViewToolbar match={match} />

        <CartView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CartPage;
