import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import AttributeOptionsViewItem from 'src/view/attributeOptions/view/AttributeOptionsViewItem';

function CartView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <AttributeOptionsViewItem
        label={i18n('entities.cart.fields.optionsId')}
        value={record.optionsId}
      />

      <TextViewItem
        label={i18n('entities.cart.fields.attribute')}
        value={record.attribute}
      />

      <TextViewItem
        label={i18n('entities.cart.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.cart.fields.slug')}
        value={record.slug}
      />

      <TextViewItem
        label={i18n('entities.cart.fields.qty')}
        value={record.qty}
      />

      <TextViewItem
        label={i18n('entities.cart.fields.price')}
        value={record.price}
      />

      <TextViewItem
        label={i18n('entities.cart.fields.mainPrice')}
        value={record.mainPrice}
      />

      <ImagesViewItem
        label={i18n('entities.cart.fields.photo')}
        value={record.photo}
      />

      <TextViewItem
        label={i18n('entities.cart.fields.itemType')}
        value={record.itemType}
      />

      <TextViewItem
        label={i18n('entities.cart.fields.itemLN')}
        value={record.itemLN}
      />

      <TextViewItem
        label={i18n('entities.cart.fields.itemLK')}
        value={record.itemLK}
      />
    </ViewWrapper>
  );
}

export default CartView;
