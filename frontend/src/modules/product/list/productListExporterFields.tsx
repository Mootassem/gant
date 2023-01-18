import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.product.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.product.fields.name'),
  },
  {
    name: 'slug',
    label: i18n('entities.product.fields.slug'),
  },
  {
    name: 'tags',
    label: i18n('entities.product.fields.tags'),
  },
  {
    name: 'video',
    label: i18n('entities.product.fields.video'),
  },
  {
    name: 'specificationName',
    label: i18n(
      'entities.product.fields.specificationName',
    ),
  },
  {
    name: 'specificationDesciption',
    label: i18n(
      'entities.product.fields.specificationDesciption',
    ),
  },
  {
    name: 'isSpecification',
    label: i18n('entities.product.fields.isSpecification'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'details',
    label: i18n('entities.product.fields.details'),
  },
  {
    name: 'photo',
    label: i18n('entities.product.fields.photo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'discountPrice',
    label: i18n('entities.product.fields.discountPrice'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'previousPrice',
    label: i18n('entities.product.fields.previousPrice'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'stock',
    label: i18n('entities.product.fields.stock'),
  },

  {
    name: 'metaDesctiption',
    label: i18n('entities.product.fields.metaDesctiption'),
  },
  {
    name: 'status',
    label: i18n('entities.product.fields.status'),
  },
  {
    name: 'isType',
    label: i18n('entities.product.fields.isType'),
  },
  {
    name: 'date',
    label: i18n('entities.product.fields.date'),
  },
  {
    name: 'itemType',
    label: i18n('entities.product.fields.itemType'),
  },
  {
    name: 'file',
    label: i18n('entities.product.fields.file'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'link',
    label: i18n('entities.product.fields.link'),
  },
  {
    name: 'fileType',
    label: i18n('entities.product.fields.fileType'),
  },
  {
    name: 'taxe',
    label: i18n('entities.product.fields.taxe'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'category',
    label: i18n('entities.product.fields.category'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'subcategory',
    label: i18n('entities.product.fields.subcategory'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'childcategory',
    label: i18n('entities.product.fields.childcategory'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'brand',
    label: i18n('entities.product.fields.brand'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'gallery',
    label: i18n('entities.product.fields.gallery'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.product.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.product.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
