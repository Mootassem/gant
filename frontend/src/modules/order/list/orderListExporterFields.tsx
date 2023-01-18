import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.order.fields.id'),
  },
  {
    name: 'userId',
    label: i18n('entities.order.fields.userId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'cart',
    label: i18n('entities.order.fields.cart'),
  },
  {
    name: 'shipping',
    label: i18n('entities.order.fields.shipping'),
  },
  {
    name: 'discount',
    label: i18n('entities.order.fields.discount'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'paymentMethod',
    label: i18n('entities.order.fields.paymentMethod'),
  },
  {
    name: 'taxe',
    label: i18n('entities.order.fields.taxe'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'transactionNumber',
    label: i18n('entities.order.fields.transactionNumber'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'orderStatus',
    label: i18n('entities.order.fields.orderStatus'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.order.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.order.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
