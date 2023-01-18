import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.entree.fields.id'),
  },
  {
    name: 'type',
    label: i18n('entities.entree.fields.type'),
  },
  {
    name: 'sourceLink',
    label: i18n('entities.entree.fields.sourceLink'),
  },
  {
    name: 'amount',
    label: i18n('entities.entree.fields.amount'),
  },
  {
    name: 'date',
    label: i18n('entities.entree.fields.date'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.entree.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.entree.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
