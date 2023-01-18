import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import TaxesViewItem from 'src/view/taxes/view/TaxesViewItem';
import TransactionViewItem from 'src/view/transaction/view/TransactionViewItem';

function OrderView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <UserViewItem
        label={i18n('entities.order.fields.userId')}
        value={record.userId}
      />

      <TextViewItem
        label={i18n('entities.order.fields.cart')}
        value={record.cart}
      />

      <TextViewItem
        label={i18n('entities.order.fields.shipping')}
        value={record.shipping}
      />

      <TextViewItem
        label={i18n('entities.order.fields.discount')}
        value={record.discount}
      />

      <TextViewItem
        label={i18n('entities.order.fields.paymentMethod')}
        value={record.paymentMethod}
      />

      <TaxesViewItem
        label={i18n('entities.order.fields.taxe')}
        value={record.taxe}
      />

      <TransactionViewItem
        label={i18n('entities.order.fields.transactionNumber')}
        value={record.transactionNumber}
      />

      <TextViewItem
        label={i18n('entities.order.fields.orderStatus')}
        value={
          record.orderStatus &&
          i18n(
            `entities.order.enumerators.orderStatus.${record.orderStatus}`,
          )
        }
      />
    </ViewWrapper>
  );
}

export default OrderView;
