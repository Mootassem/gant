import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/formule/view/formuleViewActions';
import selectors from 'src/modules/formule/view/formuleViewSelectors';
import FormuleView from 'src/view/formule/view/FormuleView';
import FormuleViewToolbar from 'src/view/formule/view/FormuleViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FormulePage() {
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
          [i18n('entities.formule.menu'), '/formule'],
          [i18n('entities.formule.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.formule.view.title')}
        </PageTitle>

        <FormuleViewToolbar match={match} />

        <FormuleView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default FormulePage;
