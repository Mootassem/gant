import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/typeCharge/view/typeChargeViewActions';
import selectors from 'src/modules/typeCharge/view/typeChargeViewSelectors';
import TypeChargeView from 'src/view/typeCharge/view/TypeChargeView';
import TypeChargeViewToolbar from 'src/view/typeCharge/view/TypeChargeViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TypeChargePage() {
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
          [i18n('entities.typeCharge.menu'), '/type-charge'],
          [i18n('entities.typeCharge.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.typeCharge.view.title')}
        </PageTitle>

        <TypeChargeViewToolbar match={match} />

        <TypeChargeView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default TypeChargePage;
