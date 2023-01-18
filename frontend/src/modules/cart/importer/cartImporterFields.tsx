import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'optionsId',
    label: i18n('entities.cart.fields.optionsId'),
    schema: schemas.relationToMany(
      i18n('entities.cart.fields.optionsId'),
      {},
    ),
  },
  {
    name: 'attribute',
    label: i18n('entities.cart.fields.attribute'),
    schema: schemas.string(
      i18n('entities.cart.fields.attribute'),
      {},
    ),
  },
  {
    name: 'name',
    label: i18n('entities.cart.fields.name'),
    schema: schemas.string(
      i18n('entities.cart.fields.name'),
      {},
    ),
  },
  {
    name: 'slug',
    label: i18n('entities.cart.fields.slug'),
    schema: schemas.string(
      i18n('entities.cart.fields.slug'),
      {},
    ),
  },
  {
    name: 'qty',
    label: i18n('entities.cart.fields.qty'),
    schema: schemas.decimal(
      i18n('entities.cart.fields.qty'),
      {},
    ),
  },
  {
    name: 'price',
    label: i18n('entities.cart.fields.price'),
    schema: schemas.decimal(
      i18n('entities.cart.fields.price'),
      {},
    ),
  },
  {
    name: 'mainPrice',
    label: i18n('entities.cart.fields.mainPrice'),
    schema: schemas.decimal(
      i18n('entities.cart.fields.mainPrice'),
      {},
    ),
  },
  {
    name: 'photo',
    label: i18n('entities.cart.fields.photo'),
    schema: schemas.images(
      i18n('entities.cart.fields.photo'),
      {},
    ),
  },
  {
    name: 'itemType',
    label: i18n('entities.cart.fields.itemType'),
    schema: schemas.string(
      i18n('entities.cart.fields.itemType'),
      {},
    ),
  },
  {
    name: 'itemLN',
    label: i18n('entities.cart.fields.itemLN'),
    schema: schemas.string(
      i18n('entities.cart.fields.itemLN'),
      {},
    ),
  },
  {
    name: 'itemLK',
    label: i18n('entities.cart.fields.itemLK'),
    schema: schemas.string(
      i18n('entities.cart.fields.itemLK'),
      {},
    ),
  },
];