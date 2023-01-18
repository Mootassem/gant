import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/entree/view/entreeViewActions';
import selectors from 'src/modules/entree/view/entreeViewSelectors';
import EntreeView from 'src/view/entree/view/EntreeView';
import EntreeViewToolbar from 'src/view/entree/view/EntreeViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function EntreePage() {
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
          [i18n('entities.entree.menu'), '/entree'],
          [i18n('entities.entree.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.entree.view.title')}
        </PageTitle>

        <EntreeViewToolbar match={match} />

        <EntreeView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default EntreePage;
