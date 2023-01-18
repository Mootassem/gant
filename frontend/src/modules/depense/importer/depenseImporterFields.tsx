import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import depenseEnumerators from 'src/modules/depense/depenseEnumerators';
import moment from 'moment';

export default [
  {
    name: 'facture',
    label: i18n('entities.depense.fields.facture'),
    schema: schemas.boolean(
      i18n('entities.depense.fields.facture'),
      {},
    ),
  },
  {
    name: 'charge',
    label: i18n('entities.depense.fields.charge'),
    schema: schemas.relationToMany(
      i18n('entities.depense.fields.charge'),
      {},
    ),
  },
  {
    name: 'amount',
    label: i18n('entities.depense.fields.amount'),
    schema: schemas.integer(
      i18n('entities.depense.fields.amount'),
      {},
    ),
  },
  {
    name: 'type',
    label: i18n('entities.depense.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.depense.fields.type'),
      {
        "options": depenseEnumerators.type
      },
    ),
  },
  {
    name: 'date',
    label: i18n('entities.depense.fields.date'),
    schema: schemas.date(
      i18n('entities.depense.fields.date'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
];