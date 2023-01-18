import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function EntreeView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.entree.fields.type')}
        value={
          record.type &&
          i18n(
            `entities.entree.enumerators.type.${record.type}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.entree.fields.sourceLink')}
        value={record.sourceLink}
      />

      <TextViewItem
        label={i18n('entities.entree.fields.amount')}
        value={record.amount}
      />

      <TextViewItem
        label={i18n('entities.entree.fields.date')}
        value={record.date}
      />
    </ViewWrapper>
  );
}

export default EntreeView;
