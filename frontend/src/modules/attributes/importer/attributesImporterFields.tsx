import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.attributes.fields.name'),
    schema: schemas.string(
      i18n('entities.attributes.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'itemId',
    label: i18n('entities.attributes.fields.itemId'),
    schema: schemas.relationToOne(
      i18n('entities.attributes.fields.itemId'),
      {},
    ),
  },
];