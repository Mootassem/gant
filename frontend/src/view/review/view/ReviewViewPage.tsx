import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/review/view/reviewViewActions';
import selectors from 'src/modules/review/view/reviewViewSelectors';
import ReviewView from 'src/view/review/view/ReviewView';
import ReviewViewToolbar from 'src/view/review/view/ReviewViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ReviewPage() {
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
          [i18n('entities.review.menu'), '/review'],
          [i18n('entities.review.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.review.view.title')}
        </PageTitle>

        <ReviewViewToolbar match={match} />

        <ReviewView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ReviewPage;
