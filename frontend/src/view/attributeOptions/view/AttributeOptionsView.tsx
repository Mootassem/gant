import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ProductViewItem from 'src/view/product/view/ProductViewItem';
import AttributesViewItem from 'src/view/attributes/view/AttributesViewItem';

function AttributeOptionsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.attributeOptions.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.attributeOptions.fields.price')}
        value={record.price}
      />

      <TextViewItem
        label={i18n('entities.attributeOptions.fields.keyword')}
        value={record.keyword}
      />

      <ProductViewItem
        label={i18n('entities.attributeOptions.fields.item')}
        value={record.item}
      />

      <AttributesViewItem
        label={i18n('entities.attributeOptions.fields.attributeId')}
        value={record.attributeId}
      />
    </ViewWrapper>
  );
}

export default AttributeOptionsView;
