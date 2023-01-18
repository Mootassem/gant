import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.membership.fields.id'),
  },
  {
    name: 'status',
    label: i18n('entities.membership.fields.status'),
  },
  {
    name: 'paymentMethod',
    label: i18n('entities.membership.fields.paymentMethod'),
  },
  {
    name: 'formule',
    label: i18n('entities.membership.fields.formule'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'attachements',
    label: i18n('entities.membership.fields.attachements'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'user',
    label: i18n('entities.membership.fields.user'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'campaign',
    label: i18n('entities.membership.fields.campaign'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'amount',
    label: i18n('entities.membership.fields.amount'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.membership.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.membership.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
