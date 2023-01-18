import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/chieldCategories/view/chieldCategoriesViewActions';
import selectors from 'src/modules/chieldCategories/view/chieldCategoriesViewSelectors';
import ChieldCategoriesView from 'src/view/chieldCategories/view/ChieldCategoriesView';
import ChieldCategoriesViewToolbar from 'src/view/chieldCategories/view/ChieldCategoriesViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ChieldCategoriesPage() {
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
          [i18n('entities.chieldCategories.menu'), '/chield-categories'],
          [i18n('entities.chieldCategories.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.chieldCategories.view.title')}
        </PageTitle>

        <ChieldCategoriesViewToolbar match={match} />

        <ChieldCategoriesView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ChieldCategoriesPage;
