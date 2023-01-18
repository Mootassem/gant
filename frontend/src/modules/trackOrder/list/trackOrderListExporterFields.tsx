import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.trackOrder.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.trackOrder.fields.title'),
  },
  {
    name: 'item',
    label: i18n('entities.trackOrder.fields.item'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'order',
    label: i18n('entities.trackOrder.fields.order'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.trackOrder.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.trackOrder.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
