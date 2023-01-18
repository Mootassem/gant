import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';

function BrandsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.brands.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.brands.fields.slug')}
        value={record.slug}
      />

      <ImagesViewItem
        label={i18n('entities.brands.fields.photo')}
        value={record.photo}
      />

      <TextViewItem
        label={i18n('entities.brands.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.brands.enumerators.status.${record.status}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.brands.fields.isPopular')}
        value={
          record.isPopular &&
          i18n(
            `entities.brands.enumerators.isPopular.${record.isPopular}`,
          )
        }
      />
    </ViewWrapper>
  );
}

export default BrandsView;
