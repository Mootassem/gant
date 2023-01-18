import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.election.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.election.fields.name'),
  },
  {
    name: 'members',
    label: i18n('entities.election.fields.members'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'startDate',
    label: i18n('entities.election.fields.startDate'),
  },
  {
    name: 'endDate',
    label: i18n('entities.election.fields.endDate'),
  },
  {
    name: 'pv',
    label: i18n('entities.election.fields.pv'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'association',
    label: i18n('entities.election.fields.association'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'objetifs',
    label: i18n('entities.election.fields.objectifs'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.election.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.election.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
