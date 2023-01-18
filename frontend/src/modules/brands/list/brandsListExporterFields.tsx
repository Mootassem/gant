import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.brands.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.brands.fields.name'),
  },
  {
    name: 'slug',
    label: i18n('entities.brands.fields.slug'),
  },
  {
    name: 'photo',
    label: i18n('entities.brands.fields.photo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'status',
    label: i18n('entities.brands.fields.status'),
  },
  {
    name: 'isPopular',
    label: i18n('entities.brands.fields.isPopular'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.brands.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.brands.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
