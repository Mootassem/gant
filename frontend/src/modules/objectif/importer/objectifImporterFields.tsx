import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import objectifEnumerators from 'src/modules/objectif/objectifEnumerators';
import moment from 'moment';

export default [
  {
    name: 'number',
    label: i18n('entities.objectif.fields.number'),
    schema: schemas.integer(
      i18n('entities.objectif.fields.number'),
      {},
    ),
  },
  {
    name: 'title',
    label: i18n('entities.objectif.fields.title'),
    schema: schemas.string(
      i18n('entities.objectif.fields.title'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.objectif.fields.description'),
    schema: schemas.string(
      i18n('entities.objectif.fields.description'),
      {},
    ),
  },
  {
    name: 'status',
    label: i18n('entities.objectif.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.objectif.fields.status'),
      {
        "options": objectifEnumerators.status
      },
    ),
  },
  {
    name: 'year',
    label: i18n('entities.objectif.fields.year'),
    schema: schemas.integer(
      i18n('entities.objectif.fields.year'),
      {},
    ),
  },
  {
    name: 'startDate',
    label: i18n('entities.objectif.fields.startDate'),
    schema: schemas.date(
      i18n('entities.objectif.fields.startDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'endDate',
    label: i18n('entities.objectif.fields.endDate'),
    schema: schemas.date(
      i18n('entities.objectif.fields.endDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'election',
    label: i18n('entities.objectif.fields.election'),
    schema: schemas.relationToOne(
      i18n('entities.objectif.fields.election'),
      {},
    ),
  },
];