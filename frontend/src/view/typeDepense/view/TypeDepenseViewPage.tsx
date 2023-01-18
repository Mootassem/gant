import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/typeDepense/view/typeDepenseViewActions';
import selectors from 'src/modules/typeDepense/view/typeDepenseViewSelectors';
import TypeDepenseView from 'src/view/typeDepense/view/TypeDepenseView';
import TypeDepenseViewToolbar from 'src/view/typeDepense/view/TypeDepenseViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TypeDepensePage() {
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
          [i18n('entities.typeDepense.menu'), '/type-depense'],
          [i18n('entities.typeDepense.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.typeDepense.view.title')}
        </PageTitle>

        <TypeDepenseViewToolbar match={match} />

        <TypeDepenseView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default TypeDepensePage;
