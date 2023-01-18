import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.attributeOptions.fields.name'),
    schema: schemas.string(
      i18n('entities.attributeOptions.fields.name'),
      {},
    ),
  },
  {
    name: 'price',
    label: i18n('entities.attributeOptions.fields.price'),
    schema: schemas.decimal(
      i18n('entities.attributeOptions.fields.price'),
      {},
    ),
  },
  {
    name: 'keyword',
    label: i18n('entities.attributeOptions.fields.keyword'),
    schema: schemas.string(
      i18n('entities.attributeOptions.fields.keyword'),
      {},
    ),
  },
  {
    name: 'item',
    label: i18n('entities.attributeOptions.fields.item'),
    schema: schemas.relationToOne(
      i18n('entities.attributeOptions.fields.item'),
      {},
    ),
  },
  {
    name: 'attributeId',
    label: i18n(
      'entities.attributeOptions.fields.attributeId',
    ),
    schema: schemas.relationToOne(
      i18n('entities.attributeOptions.fields.attributeId'),
      {},
    ),
  },
];
