import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import taxesEnumerators from 'src/modules/taxes/taxesEnumerators';

export default [
  {
    name: 'name',
    label: i18n('entities.taxes.fields.name'),
    schema: schemas.string(
      i18n('entities.taxes.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'value',
    label: i18n('entities.taxes.fields.value'),
    schema: schemas.decimal(
      i18n('entities.taxes.fields.value'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'status',
    label: i18n('entities.taxes.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.taxes.fields.status'),
      {
        "required": true,
        "options": taxesEnumerators.status
      },
    ),
  },
];