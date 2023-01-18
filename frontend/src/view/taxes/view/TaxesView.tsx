import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function TaxesView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.taxes.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.taxes.fields.value')}
        value={record.value}
      />

      <TextViewItem
        label={i18n('entities.taxes.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.taxes.enumerators.status.${record.status}`,
          )
        }
      />
    </ViewWrapper>
  );
}

export default TaxesView;
