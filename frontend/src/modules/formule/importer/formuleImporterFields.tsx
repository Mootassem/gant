import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.formule.fields.name'),
    schema: schemas.string(
      i18n('entities.formule.fields.name'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.formule.fields.description'),
    schema: schemas.string(
      i18n('entities.formule.fields.description'),
      {},
    ),
  },
  {
    name: 'amount',
    label: i18n('entities.formule.fields.amount'),
    schema: schemas.decimal(
      i18n('entities.formule.fields.amount'),
      {},
    ),
  },
  {
    name: 'membership',
    label: i18n('entities.formule.fields.membership'),
    schema: schemas.relationToMany(
      i18n('entities.formule.fields.membership'),
      {},
    ),
  },
];