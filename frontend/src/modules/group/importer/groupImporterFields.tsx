import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import groupEnumerators from 'src/modules/group/groupEnumerators';

export default [
  {
    name: 'name',
    label: i18n('entities.group.fields.name'),
    schema: schemas.string(
      i18n('entities.group.fields.name'),
      {},
    ),
  },
  {
    name: 'logo',
    label: i18n('entities.group.fields.logo'),
    schema: schemas.images(
      i18n('entities.group.fields.logo'),
      {
        "max": 1
      },
    ),
  },
  {
    name: 'admin',
    label: i18n('entities.group.fields.admin'),
    schema: schemas.relationToOne(
      i18n('entities.group.fields.admin'),
      {},
    ),
  },
  {
    name: 'members',
    label: i18n('entities.group.fields.members'),
    schema: schemas.relationToMany(
      i18n('entities.group.fields.members'),
      {},
    ),
  },
  {
    name: 'partners',
    label: i18n('entities.group.fields.partners'),
    schema: schemas.relationToMany(
      i18n('entities.group.fields.partners'),
      {},
    ),
  },
  {
    name: 'type',
    label: i18n('entities.group.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.group.fields.type'),
      {
        "options": groupEnumerators.type
      },
    ),
  },
];