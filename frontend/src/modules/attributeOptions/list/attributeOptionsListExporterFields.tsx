import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.attributeOptions.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.attributeOptions.fields.name'),
  },
  {
    name: 'price',
    label: i18n('entities.attributeOptions.fields.price'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'keyword',
    label: i18n('entities.attributeOptions.fields.keyword'),
  },
  {
    name: 'item',
    label: i18n('entities.attributeOptions.fields.item'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'attributeId',
    label: i18n('entities.attributeOptions.fields.attributeId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.attributeOptions.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.attributeOptions.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
