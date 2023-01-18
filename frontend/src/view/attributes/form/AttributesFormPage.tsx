import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/attributes/form/attributesFormActions';
import selectors from 'src/modules/attributes/form/attributesFormSelectors';
import { getHistory } from 'src/modules/store';
import AttributesForm from 'src/view/attributes/form/AttributesForm';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import Spinner from 'src/view/shared/Spinner';
import PageTitle from 'src/view/shared/styles/PageTitle';
// import {useRouteMatch}
function AttributesFormPage(props) {
  const [dispatched, setDispatched] = useState(false);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const ProductId = match.params?.name;

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );
  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );
  const record = useSelector(selectors.selectRecord);
  const isEditing = Boolean(match.params.id);
  const title = isEditing
    ? i18n('entities.attributes.edit.title')
    : i18n('entities.attributes.new.title');
  useEffect(() => {
    dispatch(actions.doInit(match.params.id));
    setDispatched(true);
  }, [dispatch, match.params.id]);

  const doSubmit = (id, data) => {
    if (isEditing) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.attributes.menu'), '/attributes'],
          [title],
        ]}
      />

      <ContentWrapper>
        <PageTitle>{title}</PageTitle>
        {initLoading && <Spinner />}
        {dispatched && !initLoading && (
          <AttributesForm
            saveLoading={saveLoading}
            initLoading={initLoading}
            record={record}
            isEditing={isEditing}
            onSubmit={doSubmit}
            onCancel={() =>
              getHistory().push('/attributes')
            }
            itemId={ProductId}
          />
        )}
      </ContentWrapper>
    </>
  );
}

export default AttributesFormPage;
