import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import partnerEnumerators from 'src/modules/partner/partnerEnumerators';

export default [
  {
    name: 'acronym',
    label: i18n('entities.partner.fields.acronym'),
    schema: schemas.string(
      i18n('entities.partner.fields.acronym'),
      {},
    ),
  },
  {
    name: 'name',
    label: i18n('entities.partner.fields.name'),
    schema: schemas.string(
      i18n('entities.partner.fields.name'),
      {},
    ),
  },
  {
    name: 'email',
    label: i18n('entities.partner.fields.email'),
    schema: schemas.string(
      i18n('entities.partner.fields.email'),
      {},
    ),
  },
  {
    name: 'logo',
    label: i18n('entities.partner.fields.logo'),
    schema: schemas.images(
      i18n('entities.partner.fields.logo'),
      {
        "max": 1
      },
    ),
  },
  {
    name: 'postalAddress',
    label: i18n('entities.partner.fields.postalAddress'),
    schema: schemas.string(
      i18n('entities.partner.fields.postalAddress'),
      {},
    ),
  },
  {
    name: 'postalCode',
    label: i18n('entities.partner.fields.postalCode'),
    schema: schemas.string(
      i18n('entities.partner.fields.postalCode'),
      {},
    ),
  },
  {
    name: 'city',
    label: i18n('entities.partner.fields.city'),
    schema: schemas.string(
      i18n('entities.partner.fields.city'),
      {},
    ),
  },
  {
    name: 'country',
    label: i18n('entities.partner.fields.country'),
    schema: schemas.string(
      i18n('entities.partner.fields.country'),
      {},
    ),
  },
  {
    name: 'members',
    label: i18n('entities.partner.fields.members'),
    schema: schemas.relationToMany(
      i18n('entities.partner.fields.members'),
      {},
    ),
  },
  {
    name: 'type',
    label: i18n('entities.partner.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.partner.fields.type'),
      {
        "options": partnerEnumerators.type
      },
    ),
  },
  {
    name: 'group',
    label: i18n('entities.partner.fields.group'),
    schema: schemas.relationToMany(
      i18n('entities.partner.fields.group'),
      {},
    ),
  },
];