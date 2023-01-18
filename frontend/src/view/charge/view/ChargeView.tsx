import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import DepenseViewItem from 'src/view/depense/view/DepenseViewItem';
import moment from 'moment';

function ChargeView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.charge.fields.type')}
        value={
          record.type &&
          i18n(
            `entities.charge.enumerators.type.${record.type}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.charge.fields.amount')}
        value={record.amount}
      />
      <TextViewItem
        label={i18n('entities.depense.fields.date')}
        value={moment(record.date).format('YYYY-MM-DD')}
      />
    </ViewWrapper>
  );
}

export default ChargeView;
