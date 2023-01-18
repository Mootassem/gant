import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ShippingserviceView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.shippingservice.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.shippingservice.fields.price')}
        value={record.price}
      />

      <TextViewItem
        label={i18n('entities.shippingservice.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.shippingservice.enumerators.status.${record.status}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.shippingservice.fields.minimumPrice')}
        value={record.minimumPrice}
      />

      <TextViewItem
        label={i18n('entities.shippingservice.fields.isCondition')}
        value={
          record.isCondition
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </ViewWrapper>
  );
}

export default ShippingserviceView;
