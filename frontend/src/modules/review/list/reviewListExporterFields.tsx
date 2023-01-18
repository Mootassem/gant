import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.review.fields.id'),
  },
  {
    name: 'review',
    label: i18n('entities.review.fields.review'),
  },
  {
    name: 'rating',
    label: i18n('entities.review.fields.rating'),
  },
  {
    name: 'status',
    label: i18n('entities.review.fields.status'),
  },
  {
    name: 'subject',
    label: i18n('entities.review.fields.subject'),
  },
  {
    name: 'item',
    label: i18n('entities.review.fields.item'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'user',
    label: i18n('entities.review.fields.user'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.review.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.review.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
