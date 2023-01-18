import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.chieldCategories.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.chieldCategories.fields.name'),
  },
  {
    name: 'slug',
    label: i18n('entities.chieldCategories.fields.slug'),
  },
  {
    name: 'categoryId',
    label: i18n('entities.chieldCategories.fields.categoryId'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'subcategoryId',
    label: i18n('entities.chieldCategories.fields.subcategoryId'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.chieldCategories.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.chieldCategories.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
