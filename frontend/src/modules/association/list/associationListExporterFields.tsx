import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.association.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.association.fields.name'),
  },
  {
    name: 'logo',
    label: i18n('entities.association.fields.logo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'email',
    label: i18n('entities.association.fields.email'),
  },
  {
    name: 'phone',
    label: i18n('entities.association.fields.phone'),
  },
  {
    name: 'postalCode',
    label: i18n('entities.association.fields.postalCode'),
  },
  {
    name: 'city',
    label: i18n('entities.association.fields.city'),
  },
  {
    name: 'country',
    label: i18n('entities.association.fields.country'),
  },
  {
    name: 'admins',
    label: i18n('entities.association.fields.admins'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'elections',
    label: i18n('entities.association.fields.elections'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.association.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.association.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
