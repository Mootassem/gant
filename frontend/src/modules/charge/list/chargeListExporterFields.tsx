import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.charge.fields.id'),
  },
  {
    name: 'type',
    label: i18n('entities.charge.fields.type'),
  },
  {
    name: 'amount',
    label: i18n('entities.charge.fields.amount'),
  },
  {
    name: 'depense',
    label: i18n('entities.charge.fields.depense'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.charge.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.charge.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
