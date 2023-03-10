import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.newsCategory.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.newsCategory.fields.name'),
  },
  {
    name: 'description',
    label: i18n('entities.newsCategory.fields.description'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.newsCategory.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.newsCategory.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
