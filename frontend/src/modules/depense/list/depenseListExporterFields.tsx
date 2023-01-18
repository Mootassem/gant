import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.depense.fields.id'),
  },
  {
    name: 'facture',
    label: i18n('entities.depense.fields.facture'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'charge',
    label: i18n('entities.depense.fields.charge'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'amount',
    label: i18n('entities.depense.fields.amount'),
  },
  {
    name: 'type',
    label: i18n('entities.depense.fields.type'),
  },
  {
    name: 'date',
    label: i18n('entities.depense.fields.date'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.depense.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.depense.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
