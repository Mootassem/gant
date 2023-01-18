import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'amount',
    label: i18n('entities.transaction.fields.amount'),
    schema: schemas.decimal(
      i18n('entities.transaction.fields.amount'),
      {},
    ),
  },
  {
    name: 'email',
    label: i18n('entities.transaction.fields.email'),
    schema: schemas.relationToOne(
      i18n('entities.transaction.fields.email'),
      {},
    ),
  },
  {
    name: 'tax',
    label: i18n('entities.transaction.fields.tax'),
    schema: schemas.relationToOne(
      i18n('entities.transaction.fields.tax'),
      {},
    ),
  },
  {
    name: 'currencySign',
    label: i18n('entities.transaction.fields.currencySign'),
    schema: schemas.string(
      i18n('entities.transaction.fields.currencySign'),
      {},
    ),
  },
  {
    name: 'currencyValue',
    label: i18n('entities.transaction.fields.currencyValue'),
    schema: schemas.string(
      i18n('entities.transaction.fields.currencyValue'),
      {},
    ),
  },
  {
    name: 'orderId',
    label: i18n('entities.transaction.fields.orderId'),
    schema: schemas.relationToMany(
      i18n('entities.transaction.fields.orderId'),
      {},
    ),
  },
];