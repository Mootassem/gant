import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import editEnumerators from 'src/modules/edit/editEnumerators';
import moment from 'moment';

export default [
  {
    name: 'campaignTitle',
    label: i18n('entities.edit.fields.campaignTitle'),
    schema: schemas.string(
      i18n('entities.edit.fields.campaignTitle'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'campaignLastDateTime',
    label: i18n('entities.edit.fields.campaignLastDateTime'),
    schema: schemas.datetime(
      i18n('entities.edit.fields.campaignLastDateTime'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'status',
    label: i18n('entities.edit.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.edit.fields.status'),
      {
        "options": editEnumerators.status
      },
    ),
  },
];