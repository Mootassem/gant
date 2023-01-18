import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import moment from 'moment';

export default [
  {
    name: 'name',
    label: i18n('entities.election.fields.name'),
    schema: schemas.string(
      i18n('entities.election.fields.name'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'members',
    label: i18n('entities.election.fields.members'),
    schema: schemas.relationToMany(
      i18n('entities.election.fields.members'),
      {},
    ),
  },
  {
    name: 'startDate',
    label: i18n('entities.election.fields.startDate'),
    schema: schemas.date(
      i18n('entities.election.fields.startDate'),
      {},
    ),
    render: (value) =>
      value && value instanceof Date
        ? moment(value).format('YYYY-MM-DD')
        : value,
  },
  {
    name: 'endDate',
    label: i18n('entities.election.fields.endDate'),
    schema: schemas.date(
      i18n('entities.election.fields.endDate'),
      {},
    ),
    render: (value) =>
      value && value instanceof Date
        ? moment(value).format('YYYY-MM-DD')
        : value,
  },
  {
    name: 'pv',
    label: i18n('entities.election.fields.pv'),
    schema: schemas.files(
      i18n('entities.election.fields.pv'),
      {},
    ),
  },
  {
    name: 'association',
    label: i18n('entities.election.fields.association'),
    schema: schemas.relationToMany(
      i18n('entities.election.fields.association'),
      {},
    ),
  },
  {
    name: 'objetifs',
    label: i18n('entities.election.fields.objectifs'),
    schema: schemas.relationToMany(
      i18n('entities.election.fields.objectifs'),
      {},
    ),
  },
];
