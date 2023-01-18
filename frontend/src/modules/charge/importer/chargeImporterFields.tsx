import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import chargeEnumerators from 'src/modules/charge/chargeEnumerators';

export default [
  {
    name: 'type',
    label: i18n('entities.charge.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.charge.fields.type'),
      {
        "options": chargeEnumerators.type
      },
    ),
  },
  {
    name: 'amount',
    label: i18n('entities.charge.fields.amount'),
    schema: schemas.integer(
      i18n('entities.charge.fields.amount'),
      {},
    ),
  },
  {
    name: 'depense',
    label: i18n('entities.charge.fields.depense'),
    schema: schemas.relationToOne(
      i18n('entities.charge.fields.depense'),
      {},
    ),
  },
];