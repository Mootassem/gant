import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/shippingservice/view/shippingserviceViewActions';
import selectors from 'src/modules/shippingservice/view/shippingserviceViewSelectors';
import ShippingserviceView from 'src/view/shippingservice/view/ShippingserviceView';
import ShippingserviceViewToolbar from 'src/view/shippingservice/view/ShippingserviceViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ShippingservicePage() {
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
          [i18n('entities.shippingservice.menu'), '/shippingservice'],
          [i18n('entities.shippingservice.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.shippingservice.view.title')}
        </PageTitle>

        <ShippingserviceViewToolbar match={match} />

        <ShippingserviceView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ShippingservicePage;
