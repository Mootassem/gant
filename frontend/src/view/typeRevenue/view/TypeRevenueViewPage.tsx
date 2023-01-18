import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/typeRevenue/view/typeRevenueViewActions';
import selectors from 'src/modules/typeRevenue/view/typeRevenueViewSelectors';
import TypeRevenueView from 'src/view/typeRevenue/view/TypeRevenueView';
import TypeRevenueViewToolbar from 'src/view/typeRevenue/view/TypeRevenueViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TypeRevenuePage() {
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
          [i18n('entities.typeRevenue.menu'), '/type-revenue'],
          [i18n('entities.typeRevenue.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.typeRevenue.view.title')}
        </PageTitle>

        <TypeRevenueViewToolbar match={match} />

        <TypeRevenueView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default TypeRevenuePage;
