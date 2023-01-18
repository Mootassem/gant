import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.attributes.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.attributes.fields.name'),
  },
  {
    name: 'itemId',
    label: i18n('entities.attributes.fields.itemId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.attributes.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.attributes.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
