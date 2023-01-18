import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.shippingservice.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.shippingservice.fields.name'),
  },
  {
    name: 'price',
    label: i18n('entities.shippingservice.fields.price'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'status',
    label: i18n('entities.shippingservice.fields.status'),
  },
  {
    name: 'minimumPrice',
    label: i18n('entities.shippingservice.fields.minimumPrice'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'isCondition',
    label: i18n('entities.shippingservice.fields.isCondition'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.shippingservice.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.shippingservice.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
