import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import TaxesViewItem from 'src/view/taxes/view/TaxesViewItem';
import CategoryViewItem from 'src/view/category/view/CategoryViewItem';
import SubcategoriesViewItem from 'src/view/subcategories/view/SubcategoriesViewItem';
import ChieldCategoriesViewItem from 'src/view/chieldCategories/view/ChieldCategoriesViewItem';
import BrandsViewItem from 'src/view/brands/view/BrandsViewItem';
import GalleryViewItem from 'src/view/gallery/view/GalleryViewItem';

function ProductView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.product.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.product.fields.slug')}
        value={record.slug}
      />

      <TextViewItem
        label={i18n('entities.product.fields.tags')}
        value={record.tags}
      />

      <TextViewItem
        label={i18n('entities.product.fields.video')}
        value={record.video}
      />
      <TextViewItem
        label={i18n(
          'entities.product.fields.specificationName',
        )}
        value={record.specificationName}
      />
      <TextViewItem
        label={i18n(
          'entities.product.fields.specificationDesciption',
        )}
        value={record.specificationDesciption}
      />
      <TextViewItem
        label={i18n(
          'entities.product.fields.isSpecification',
        )}
        value={
          record.isSpecification
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
      <TextViewItem
        label={i18n('entities.product.fields.details')}
        value={record.details}
      />
      <ImagesViewItem
        label={i18n('entities.product.fields.photo')}
        value={record.photo}
      />
      <TextViewItem
        label={i18n(
          'entities.product.fields.discountPrice',
        )}
        value={record.discountPrice}
      />
      <TextViewItem
        label={i18n(
          'entities.product.fields.previousPrice',
        )}
        value={record.previousPrice}
      />
      <TextViewItem
        label={i18n('entities.product.fields.stock')}
        value={record.stock}
      />
      <TextViewItem
        label={i18n(
          'entities.product.fields.metaDesctiption',
        )}
        value={record.metaDesctiption}
      />

      <TextViewItem
        label={i18n('entities.product.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.product.enumerators.status.${record.status}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.product.fields.isType')}
        value={record.isType}
      />

      <TextViewItem
        label={i18n('entities.product.fields.date')}
        value={record.date}
      />

      <TextViewItem
        label={i18n('entities.product.fields.itemType')}
        value={
          record.itemType &&
          i18n(
            `entities.product.enumerators.itemType.${record.itemType}`,
          )
        }
      />

      <FilesViewItem
        label={i18n('entities.product.fields.file')}
        value={record.file}
      />

      <TextViewItem
        label={i18n('entities.product.fields.link')}
        value={record.link}
      />

      <TextViewItem
        label={i18n('entities.product.fields.fileType')}
        value={
          record.fileType &&
          i18n(
            `entities.product.enumerators.fileType.${record.fileType}`,
          )
        }
      />

      <TaxesViewItem
        label={i18n('entities.product.fields.taxe')}
        value={record.taxe}
      />

      <CategoryViewItem
        label={i18n('entities.product.fields.category')}
        value={record.category}
      />

      <SubcategoriesViewItem
        label={i18n('entities.product.fields.subcategory')}
        value={record.subcategory}
      />

      <ChieldCategoriesViewItem
        label={i18n(
          'entities.product.fields.childcategory',
        )}
        value={record.childcategory}
      />

      <BrandsViewItem
        label={i18n('entities.product.fields.brand')}
        value={record.brand}
      />

      <GalleryViewItem
        label={i18n('entities.product.fields.gallery')}
        value={record.gallery}
      />
    </ViewWrapper>
  );
}

export default ProductView;
