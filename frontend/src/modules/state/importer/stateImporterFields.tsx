import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import stateEnumerators from 'src/modules/state/stateEnumerators';

export default [
  {
    name: 'name',
    label: i18n('entities.state.fields.name'),
    schema: schemas.string(
      i18n('entities.state.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'price',
    label: i18n('entities.state.fields.price'),
    schema: schemas.decimal(
      i18n('entities.state.fields.price'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'status',
    label: i18n('entities.state.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.state.fields.status'),
      {
        "options": stateEnumerators.status
      },
    ),
  },
  {
    name: 'type',
    label: i18n('entities.state.fields.type'),
    schema: schemas.string(
      i18n('entities.state.fields.type'),
      {},
    ),
  },
];