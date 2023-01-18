import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/attributes/view/attributesViewActions';
import selectors from 'src/modules/attributes/view/attributesViewSelectors';
import AttributesView from 'src/view/attributes/view/AttributesView';
import AttributesViewToolbar from 'src/view/attributes/view/AttributesViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AttributesPage() {
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
          [i18n('entities.attributes.menu'), '/attributes'],
          [i18n('entities.attributes.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.attributes.view.title')}
        </PageTitle>

        <AttributesViewToolbar match={match} />

        <AttributesView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default AttributesPage;
