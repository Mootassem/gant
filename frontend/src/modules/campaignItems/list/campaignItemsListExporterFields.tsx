import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.campaignItems.fields.id'),
  },
  {
    name: 'status',
    label: i18n('entities.campaignItems.fields.status'),
  },
  {
    name: 'isFeature',
    label: i18n('entities.campaignItems.fields.isFeature'),
  },
  {
    name: 'itemId',
    label: i18n('entities.campaignItems.fields.itemId'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.campaignItems.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.campaignItems.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
