import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.subcategories.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.subcategories.fields.name'),
  },
  {
    name: 'slug',
    label: i18n('entities.subcategories.fields.slug'),
  },
  {
    name: 'status',
    label: i18n('entities.subcategories.fields.status'),
  },
  {
    name: 'categoryId',
    label: i18n('entities.subcategories.fields.categoryId'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.subcategories.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.subcategories.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
