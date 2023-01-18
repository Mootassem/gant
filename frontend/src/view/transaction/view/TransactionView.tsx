import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import TaxesViewItem from 'src/view/taxes/view/TaxesViewItem';
import OrderViewItem from 'src/view/order/view/OrderViewItem';

function TransactionView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.transaction.fields.amount')}
        value={record.amount}
      />

      <UserViewItem
        label={i18n('entities.transaction.fields.email')}
        value={record.email}
      />

      <TaxesViewItem
        label={i18n('entities.transaction.fields.tax')}
        value={record.tax}
      />

      <TextViewItem
        label={i18n('entities.transaction.fields.currencySign')}
        value={record.currencySign}
      />

      <TextViewItem
        label={i18n('entities.transaction.fields.currencyValue')}
        value={record.currencyValue}
      />

      <OrderViewItem
        label={i18n('entities.transaction.fields.orderId')}
        value={record.orderId}
      />
    </ViewWrapper>
  );
}

export default TransactionView;
