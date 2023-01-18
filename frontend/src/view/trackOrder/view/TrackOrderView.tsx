import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ProductViewItem from 'src/view/product/view/ProductViewItem';
import OrderViewItem from 'src/view/order/view/OrderViewItem';

function TrackOrderView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.trackOrder.fields.title')}
        value={record.title}
      />

      <ProductViewItem
        label={i18n('entities.trackOrder.fields.item')}
        value={record.item}
      />

      <OrderViewItem
        label={i18n('entities.trackOrder.fields.order')}
        value={record.order}
      />
    </ViewWrapper>
  );
}

export default TrackOrderView;
