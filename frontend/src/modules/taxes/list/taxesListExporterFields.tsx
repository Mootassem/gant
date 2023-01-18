import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.taxes.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.taxes.fields.name'),
  },
  {
    name: 'value',
    label: i18n('entities.taxes.fields.value'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'status',
    label: i18n('entities.taxes.fields.status'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.taxes.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.taxes.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
