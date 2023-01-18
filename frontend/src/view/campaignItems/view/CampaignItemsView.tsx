import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ProductViewItem from 'src/view/product/view/ProductViewItem';

function CampaignItemsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.campaignItems.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.campaignItems.enumerators.status.${record.status}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.campaignItems.fields.isFeature')}
        value={
          record.isFeature &&
          i18n(
            `entities.campaignItems.enumerators.isFeature.${record.isFeature}`,
          )
        }
      />

      <ProductViewItem
        label={i18n('entities.campaignItems.fields.itemId')}
        value={record.itemId}
      />
    </ViewWrapper>
  );
}

export default CampaignItemsView;
