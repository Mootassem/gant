import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.association.fields.name'),
    schema: schemas.string(
      i18n('entities.association.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'logo',
    label: i18n('entities.association.fields.logo'),
    schema: schemas.images(
      i18n('entities.association.fields.logo'),
      {
        "max": 1
      },
    ),
  },
  {
    name: 'email',
    label: i18n('entities.association.fields.email'),
    schema: schemas.string(
      i18n('entities.association.fields.email'),
      {},
    ),
  },
  {
    name: 'phone',
    label: i18n('entities.association.fields.phone'),
    schema: schemas.string(
      i18n('entities.association.fields.phone'),
      {},
    ),
  },
  {
    name: 'postalCode',
    label: i18n('entities.association.fields.postalCode'),
    schema: schemas.integer(
      i18n('entities.association.fields.postalCode'),
      {},
    ),
  },
  {
    name: 'city',
    label: i18n('entities.association.fields.city'),
    schema: schemas.string(
      i18n('entities.association.fields.city'),
      {},
    ),
  },
  {
    name: 'country',
    label: i18n('entities.association.fields.country'),
    schema: schemas.string(
      i18n('entities.association.fields.country'),
      {},
    ),
  },
  {
    name: 'admins',
    label: i18n('entities.association.fields.admins'),
    schema: schemas.relationToMany(
      i18n('entities.association.fields.admins'),
      {},
    ),
  },
  {
    name: 'elections',
    label: i18n('entities.association.fields.elections'),
    schema: schemas.relationToMany(
      i18n('entities.association.fields.elections'),
      {},
    ),
  },
];