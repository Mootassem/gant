import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.tag.fields.name'),
    schema: schemas.string(
      i18n('entities.tag.fields.name'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.tag.fields.description'),
    schema: schemas.string(
      i18n('entities.tag.fields.description'),
      {},
    ),
  },
];