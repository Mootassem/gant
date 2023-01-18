import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function StateView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.state.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.state.fields.price')}
        value={record.price}
      />

      <TextViewItem
        label={i18n('entities.state.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.state.enumerators.status.${record.status}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.state.fields.type')}
        value={record.type}
      />
    </ViewWrapper>
  );
}

export default StateView;
