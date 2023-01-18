import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.formule.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.formule.fields.name'),
  },
  {
    name: 'description',
    label: i18n('entities.formule.fields.description'),
  },
  {
    name: 'amount',
    label: i18n('entities.formule.fields.amount'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'membership',
    label: i18n('entities.formule.fields.membership'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.formule.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.formule.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
