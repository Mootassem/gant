import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ProductViewItem from 'src/view/product/view/ProductViewItem';

function ReviewView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.review.fields.review')}
        value={record.review}
      />

      <TextViewItem
        label={i18n('entities.review.fields.rating')}
        value={record.rating}
      />

      <TextViewItem
        label={i18n('entities.review.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.review.enumerators.status.${record.status}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.review.fields.subject')}
        value={record.subject}
      />

      <ProductViewItem
        label={i18n('entities.review.fields.item')}
        value={record.item}
      />

      <UserViewItem
        label={i18n('entities.review.fields.user')}
        value={record.user}
      />
    </ViewWrapper>
  );
}

export default ReviewView;
