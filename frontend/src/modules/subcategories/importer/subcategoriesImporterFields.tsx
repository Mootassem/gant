import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import subcategoriesEnumerators from 'src/modules/subcategories/subcategoriesEnumerators';

export default [
  {
    name: 'name',
    label: i18n('entities.subcategories.fields.name'),
    schema: schemas.string(
      i18n('entities.subcategories.fields.name'),
      {},
    ),
  },
  {
    name: 'slug',
    label: i18n('entities.subcategories.fields.slug'),
    schema: schemas.string(
      i18n('entities.subcategories.fields.slug'),
      {},
    ),
  },
  {
    name: 'status',
    label: i18n('entities.subcategories.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.subcategories.fields.status'),
      {
        "options": subcategoriesEnumerators.status
      },
    ),
  },
  {
    name: 'categoryId',
    label: i18n('entities.subcategories.fields.categoryId'),
    schema: schemas.relationToMany(
      i18n('entities.subcategories.fields.categoryId'),
      {
        "required": true
      },
    ),
  },
];