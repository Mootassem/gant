import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.edit.fields.id'),
  },
  {
    name: 'campaignTitle',
    label: i18n('entities.edit.fields.campaignTitle'),
  },
  {
    name: 'campaignLastDateTime',
    label: i18n('entities.edit.fields.campaignLastDateTime'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'status',
    label: i18n('entities.edit.fields.status'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.edit.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.edit.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
