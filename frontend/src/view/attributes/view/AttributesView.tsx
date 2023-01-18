import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ProductViewItem from 'src/view/product/view/ProductViewItem';

function AttributesView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.attributes.fields.name')}
        value={record.name}
      />

      <ProductViewItem
        label={i18n('entities.attributes.fields.itemId')}
        value={record.itemId}
      />
    </ViewWrapper>
  );
}

export default AttributesView;
