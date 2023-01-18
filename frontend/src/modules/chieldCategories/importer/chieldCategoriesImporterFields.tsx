import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.chieldCategories.fields.name'),
    schema: schemas.string(
      i18n('entities.chieldCategories.fields.name'),
      {},
    ),
  },
  {
    name: 'slug',
    label: i18n('entities.chieldCategories.fields.slug'),
    schema: schemas.string(
      i18n('entities.chieldCategories.fields.slug'),
      {},
    ),
  },
  {
    name: 'categoryId',
    label: i18n(
      'entities.chieldCategories.fields.categoryId',
    ),
    schema: schemas.relationToMany(
      i18n('entities.chieldCategories.fields.categoryId'),
      {},
    ),
  },
  {
    name: 'subcategoryId',
    label: i18n(
      'entities.chieldCategories.fields.subcategoryId',
    ),
    schema: schemas.relationToMany(
      i18n(
        'entities.chieldCategories.fields.subcategoryId',
      ),
      {
        required: true,
      },
    ),
  },
];
