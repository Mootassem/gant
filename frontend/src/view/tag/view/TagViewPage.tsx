import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/tag/view/tagViewActions';
import selectors from 'src/modules/tag/view/tagViewSelectors';
import TagView from 'src/view/tag/view/TagView';
import TagViewToolbar from 'src/view/tag/view/TagViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TagPage() {
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
          [i18n('entities.tag.menu'), '/tag'],
          [i18n('entities.tag.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.tag.view.title')}
        </PageTitle>

        <TagViewToolbar match={match} />

        <TagView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default TagPage;
