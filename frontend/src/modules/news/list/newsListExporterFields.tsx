import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.news.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.news.fields.name'),
  },
  {
    name: 'type',
    label: i18n('entities.news.fields.type'),
  },
  {
    name: 'shortDescription',
    label: i18n('entities.news.fields.shortDescription'),
  },
  {
    name: 'description',
    label: i18n('entities.news.fields.description'),
  },
  {
    name: 'image',
    label: i18n('entities.news.fields.image'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'attachements',
    label: i18n('entities.news.fields.attachements'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'category',
    label: i18n('entities.news.fields.category'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'tags',
    label: i18n('entities.news.fields.tags'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'published',
    label: i18n('entities.news.fields.published'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.news.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.news.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
