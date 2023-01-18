import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CategoryViewItem from 'src/view/category/view/CategoryViewItem';
import SubcategoriesViewItem from 'src/view/subcategories/view/SubcategoriesViewItem';

function ChieldCategoriesView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.chieldCategories.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.chieldCategories.fields.slug')}
        value={record.slug}
      />

      <CategoryViewItem
        label={i18n('entities.chieldCategories.fields.categoryId')}
        value={record.categoryId}
      />

      <SubcategoriesViewItem
        label={i18n('entities.chieldCategories.fields.subcategoryId')}
        value={record.subcategoryId}
      />
    </ViewWrapper>
  );
}

export default ChieldCategoriesView;
