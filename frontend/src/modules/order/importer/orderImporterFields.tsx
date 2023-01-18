import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import orderEnumerators from 'src/modules/order/orderEnumerators';

export default [
  {
    name: 'userId',
    label: i18n('entities.order.fields.userId'),
    schema: schemas.relationToOne(
      i18n('entities.order.fields.userId'),
      {},
    ),
  },
  {
    name: 'cart',
    label: i18n('entities.order.fields.cart'),
    schema: schemas.string(
      i18n('entities.order.fields.cart'),
      {},
    ),
  },
  {
    name: 'shipping',
    label: i18n('entities.order.fields.shipping'),
    schema: schemas.string(
      i18n('entities.order.fields.shipping'),
      {},
    ),
  },
  {
    name: 'discount',
    label: i18n('entities.order.fields.discount'),
    schema: schemas.decimal(
      i18n('entities.order.fields.discount'),
      {},
    ),
  },
  {
    name: 'paymentMethod',
    label: i18n('entities.order.fields.paymentMethod'),
    schema: schemas.string(
      i18n('entities.order.fields.paymentMethod'),
      {},
    ),
  },
  {
    name: 'taxe',
    label: i18n('entities.order.fields.taxe'),
    schema: schemas.relationToOne(
      i18n('entities.order.fields.taxe'),
      {},
    ),
  },
  {
    name: 'transactionNumber',
    label: i18n('entities.order.fields.transactionNumber'),
    schema: schemas.relationToMany(
      i18n('entities.order.fields.transactionNumber'),
      {},
    ),
  },
  {
    name: 'orderStatus',
    label: i18n('entities.order.fields.orderStatus'),
    schema: schemas.enumerator(
      i18n('entities.order.fields.orderStatus'),
      {
        "options": orderEnumerators.orderStatus
      },
    ),
  },
];