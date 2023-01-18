import React from 'react';
import { i18n } from 'src/i18n';
import ReviewListFilter from 'src/view/review/list/ReviewListFilter';
import ReviewListTable from 'src/view/review/list/ReviewListTable';
import ReviewListToolbar from 'src/view/review/list/ReviewListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ReviewListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.review.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.review.list.title')}
        </PageTitle>

        <ReviewListToolbar />
        <ReviewListFilter />
        <ReviewListTable />
      </ContentWrapper>
    </>
  );
}

export default ReviewListPage;
