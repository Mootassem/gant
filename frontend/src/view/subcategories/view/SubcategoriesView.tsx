import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CategoryViewItem from 'src/view/category/view/CategoryViewItem';

function SubcategoriesView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.subcategories.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.subcategories.fields.slug')}
        value={record.slug}
      />

      <TextViewItem
        label={i18n('entities.subcategories.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.subcategories.enumerators.status.${record.status}`,
          )
        }
      />

      <CategoryViewItem
        label={i18n('entities.subcategories.fields.categoryId')}
        value={record.categoryId}
      />
    </ViewWrapper>
  );
}

export default SubcategoriesView;
