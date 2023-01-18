import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.state.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.state.fields.name'),
  },
  {
    name: 'price',
    label: i18n('entities.state.fields.price'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'status',
    label: i18n('entities.state.fields.status'),
  },
  {
    name: 'type',
    label: i18n('entities.state.fields.type'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.state.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.state.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
