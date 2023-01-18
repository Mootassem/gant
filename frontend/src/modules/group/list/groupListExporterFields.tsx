import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.group.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.group.fields.name'),
  },
  {
    name: 'logo',
    label: i18n('entities.group.fields.logo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'admin',
    label: i18n('entities.group.fields.admin'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'members',
    label: i18n('entities.group.fields.members'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'partners',
    label: i18n('entities.group.fields.partners'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'type',
    label: i18n('entities.group.fields.type'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.group.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.group.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
