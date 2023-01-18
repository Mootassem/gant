import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/brands/view/brandsViewActions';
import selectors from 'src/modules/brands/view/brandsViewSelectors';
import BrandsView from 'src/view/brands/view/BrandsView';
import BrandsViewToolbar from 'src/view/brands/view/BrandsViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function BrandsPage() {
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
          [i18n('entities.brands.menu'), '/brands'],
          [i18n('entities.brands.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.brands.view.title')}
        </PageTitle>

        <BrandsViewToolbar match={match} />

        <BrandsView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default BrandsPage;
