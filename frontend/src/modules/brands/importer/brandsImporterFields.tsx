import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import brandsEnumerators from 'src/modules/brands/brandsEnumerators';

export default [
  {
    name: 'name',
    label: i18n('entities.brands.fields.name'),
    schema: schemas.string(
      i18n('entities.brands.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'slug',
    label: i18n('entities.brands.fields.slug'),
    schema: schemas.string(
      i18n('entities.brands.fields.slug'),
      {},
    ),
  },
  {
    name: 'photo',
    label: i18n('entities.brands.fields.photo'),
    schema: schemas.images(
      i18n('entities.brands.fields.photo'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'status',
    label: i18n('entities.brands.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.brands.fields.status'),
      {
        "required": true,
        "options": brandsEnumerators.status
      },
    ),
  },
  {
    name: 'isPopular',
    label: i18n('entities.brands.fields.isPopular'),
    schema: schemas.enumerator(
      i18n('entities.brands.fields.isPopular'),
      {
        "options": brandsEnumerators.isPopular
      },
    ),
  },
];