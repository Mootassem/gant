import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.objectif.fields.id'),
  },
  {
    name: 'number',
    label: i18n('entities.objectif.fields.number'),
  },
  {
    name: 'title',
    label: i18n('entities.objectif.fields.title'),
  },
  {
    name: 'description',
    label: i18n('entities.objectif.fields.description'),
  },
  {
    name: 'status',
    label: i18n('entities.objectif.fields.status'),
  },
  {
    name: 'year',
    label: i18n('entities.objectif.fields.year'),
  },
  {
    name: 'startDate',
    label: i18n('entities.objectif.fields.startDate'),
  },
  {
    name: 'endDate',
    label: i18n('entities.objectif.fields.endDate'),
  },
  {
    name: 'election',
    label: i18n('entities.objectif.fields.election'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.objectif.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.objectif.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
