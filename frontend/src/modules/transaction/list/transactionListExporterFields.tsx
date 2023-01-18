import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.transaction.fields.id'),
  },
  {
    name: 'amount',
    label: i18n('entities.transaction.fields.amount'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'email',
    label: i18n('entities.transaction.fields.email'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'tax',
    label: i18n('entities.transaction.fields.tax'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'currencySign',
    label: i18n('entities.transaction.fields.currencySign'),
  },
  {
    name: 'currencyValue',
    label: i18n('entities.transaction.fields.currencyValue'),
  },
  {
    name: 'orderId',
    label: i18n('entities.transaction.fields.orderId'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.transaction.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.transaction.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
