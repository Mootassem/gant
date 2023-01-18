import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.partner.fields.id'),
  },
  {
    name: 'acronym',
    label: i18n('entities.partner.fields.acronym'),
  },
  {
    name: 'name',
    label: i18n('entities.partner.fields.name'),
  },
  {
    name: 'email',
    label: i18n('entities.partner.fields.email'),
  },
  {
    name: 'logo',
    label: i18n('entities.partner.fields.logo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'postalAddress',
    label: i18n('entities.partner.fields.postalAddress'),
  },
  {
    name: 'postalCode',
    label: i18n('entities.partner.fields.postalCode'),
  },
  {
    name: 'city',
    label: i18n('entities.partner.fields.city'),
  },
  {
    name: 'country',
    label: i18n('entities.partner.fields.country'),
  },
  {
    name: 'members',
    label: i18n('entities.partner.fields.members'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'type',
    label: i18n('entities.partner.fields.type'),
  },
  {
    name: 'group',
    label: i18n('entities.partner.fields.group'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.partner.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.partner.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
