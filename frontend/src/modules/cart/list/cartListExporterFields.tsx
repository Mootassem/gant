import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.cart.fields.id'),
  },
  {
    name: 'optionsId',
    label: i18n('entities.cart.fields.optionsId'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'attribute',
    label: i18n('entities.cart.fields.attribute'),
  },
  {
    name: 'name',
    label: i18n('entities.cart.fields.name'),
  },
  {
    name: 'slug',
    label: i18n('entities.cart.fields.slug'),
  },
  {
    name: 'qty',
    label: i18n('entities.cart.fields.qty'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'price',
    label: i18n('entities.cart.fields.price'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'mainPrice',
    label: i18n('entities.cart.fields.mainPrice'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'photo',
    label: i18n('entities.cart.fields.photo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'itemType',
    label: i18n('entities.cart.fields.itemType'),
  },
  {
    name: 'itemLN',
    label: i18n('entities.cart.fields.itemLN'),
  },
  {
    name: 'itemLK',
    label: i18n('entities.cart.fields.itemLK'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.cart.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.cart.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
