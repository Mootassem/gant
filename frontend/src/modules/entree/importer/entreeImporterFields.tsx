import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import entreeEnumerators from 'src/modules/entree/entreeEnumerators';
import moment from 'moment';

export default [
  {
    name: 'type',
    label: i18n('entities.entree.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.entree.fields.type'),
      {
        "options": entreeEnumerators.type
      },
    ),
  },
  {
    name: 'sourceLink',
    label: i18n('entities.entree.fields.sourceLink'),
    schema: schemas.string(
      i18n('entities.entree.fields.sourceLink'),
      {},
    ),
  },
  {
    name: 'amount',
    label: i18n('entities.entree.fields.amount'),
    schema: schemas.integer(
      i18n('entities.entree.fields.amount'),
      {},
    ),
  },
  {
    name: 'date',
    label: i18n('entities.entree.fields.date'),
    schema: schemas.date(
      i18n('entities.entree.fields.date'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
];