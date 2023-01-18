import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import shippingserviceEnumerators from 'src/modules/shippingservice/shippingserviceEnumerators';

export default [
  {
    name: 'name',
    label: i18n('entities.shippingservice.fields.name'),
    schema: schemas.string(
      i18n('entities.shippingservice.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'price',
    label: i18n('entities.shippingservice.fields.price'),
    schema: schemas.decimal(
      i18n('entities.shippingservice.fields.price'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'status',
    label: i18n('entities.shippingservice.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.shippingservice.fields.status'),
      {
        "options": shippingserviceEnumerators.status
      },
    ),
  },
  {
    name: 'minimumPrice',
    label: i18n('entities.shippingservice.fields.minimumPrice'),
    schema: schemas.decimal(
      i18n('entities.shippingservice.fields.minimumPrice'),
      {},
    ),
  },
  {
    name: 'isCondition',
    label: i18n('entities.shippingservice.fields.isCondition'),
    schema: schemas.boolean(
      i18n('entities.shippingservice.fields.isCondition'),
      {},
    ),
  },
];