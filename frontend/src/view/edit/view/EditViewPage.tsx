import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/edit/view/editViewActions';
import selectors from 'src/modules/edit/view/editViewSelectors';
import EditView from 'src/view/edit/view/EditView';
import EditViewToolbar from 'src/view/edit/view/EditViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function EditPage() {
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
          [i18n('entities.edit.menu'), '/edit'],
          [i18n('entities.edit.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.edit.view.title')}
        </PageTitle>

        <EditViewToolbar match={match} />

        <EditView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default EditPage;
