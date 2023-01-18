import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/depense/view/depenseViewActions';
import selectors from 'src/modules/depense/view/depenseViewSelectors';
import DepenseView from 'src/view/depense/view/DepenseView';
import DepenseViewToolbar from 'src/view/depense/view/DepenseViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DepensePage() {
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
          [i18n('entities.depense.menu'), '/depense'],
          [i18n('entities.depense.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.depense.view.title')}
        </PageTitle>

        <DepenseViewToolbar match={match} />

        <DepenseView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default DepensePage;
