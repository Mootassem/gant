import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/typeProjet/view/typeProjetViewActions';
import selectors from 'src/modules/typeProjet/view/typeProjetViewSelectors';
import TypeProjetView from 'src/view/typeProjet/view/TypeProjetView';
import TypeProjetViewToolbar from 'src/view/typeProjet/view/TypeProjetViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TypeProjetPage() {
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
          [i18n('entities.typeProjet.menu'), '/type-projet'],
          [i18n('entities.typeProjet.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.typeProjet.view.title')}
        </PageTitle>

        <TypeProjetViewToolbar match={match} />

        <TypeProjetView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default TypeProjetPage;
