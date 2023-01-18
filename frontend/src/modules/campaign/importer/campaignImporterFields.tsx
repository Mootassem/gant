import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import campaignEnumerators from 'src/modules/campaign/campaignEnumerators';
import moment from 'moment';

export default [
  {
    name: 'name',
    label: i18n('entities.campaign.fields.name'),
    schema: schemas.string(
      i18n('entities.campaign.fields.name'),
      {},
    ),
  },
  {
    name: 'membership',
    label: i18n('entities.campaign.fields.membership'),
    schema: schemas.relationToMany(
      i18n('entities.campaign.fields.membership'),
      {},
    ),
  },
  {
    name: 'status',
    label: i18n('entities.campaign.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.campaign.fields.status'),
      {
        "options": campaignEnumerators.status
      },
    ),
  },
  {
    name: 'year',
    label: i18n('entities.campaign.fields.year'),
    schema: schemas.integer(
      i18n('entities.campaign.fields.year'),
      {},
    ),
  },
  {
    name: 'startDate',
    label: i18n('entities.campaign.fields.startDate'),
    schema: schemas.date(
      i18n('entities.campaign.fields.startDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'endDate',
    label: i18n('entities.campaign.fields.endDate'),
    schema: schemas.date(
      i18n('entities.campaign.fields.endDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
];