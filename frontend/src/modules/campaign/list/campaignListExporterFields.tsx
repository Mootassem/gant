import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.campaign.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.campaign.fields.name'),
  },
  {
    name: 'membership',
    label: i18n('entities.campaign.fields.membership'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'status',
    label: i18n('entities.campaign.fields.status'),
  },
  {
    name: 'year',
    label: i18n('entities.campaign.fields.year'),
  },
  {
    name: 'startDate',
    label: i18n('entities.campaign.fields.startDate'),
  },
  {
    name: 'endDate',
    label: i18n('entities.campaign.fields.endDate'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.campaign.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.campaign.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
