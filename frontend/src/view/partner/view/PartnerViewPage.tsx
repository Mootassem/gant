import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/partner/view/partnerViewActions';
import selectors from 'src/modules/partner/view/partnerViewSelectors';
import PartnerView from 'src/view/partner/view/PartnerView';
import PartnerViewToolbar from 'src/view/partner/view/PartnerViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PartnerPage() {
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
          [i18n('entities.partner.menu'), '/partner'],
          [i18n('entities.partner.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.partner.view.title')}
        </PageTitle>

        <PartnerViewToolbar match={match} />

        <PartnerView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PartnerPage;
