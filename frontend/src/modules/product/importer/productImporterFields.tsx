import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import productEnumerators from 'src/modules/product/productEnumerators';
import moment from 'moment';

export default [
  {
    name: 'name',
    label: i18n('entities.product.fields.name'),
    schema: schemas.string(
      i18n('entities.product.fields.name'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'slug',
    label: i18n('entities.product.fields.slug'),
    schema: schemas.string(
      i18n('entities.product.fields.slug'),
      {},
    ),
  },
  {
    name: 'tags',
    label: i18n('entities.product.fields.tags'),
    schema: schemas.string(
      i18n('entities.product.fields.tags'),
      {},
    ),
  },
  {
    name: 'video',
    label: i18n('entities.product.fields.video'),
    schema: schemas.string(
      i18n('entities.product.fields.video'),
      {},
    ),
  },
  {
    name: 'specificationName',
    label: i18n(
      'entities.product.fields.specificationName',
    ),
    schema: schemas.string(
      i18n('entities.product.fields.specificationName'),
      {},
    ),
  },
  {
    name: 'specificationDesciption',
    label: i18n(
      'entities.product.fields.specificationDesciption',
    ),
    schema: schemas.string(
      i18n(
        'entities.product.fields.specificationDesciption',
      ),
      {},
    ),
  },
  {
    name: 'isSpecification',
    label: i18n('entities.product.fields.isSpecification'),
    schema: schemas.boolean(
      i18n('entities.product.fields.isSpecification'),
      {},
    ),
  },
  {
    name: 'details',
    label: i18n('entities.product.fields.details'),
    schema: schemas.string(
      i18n('entities.product.fields.details'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'photo',
    label: i18n('entities.product.fields.photo'),
    schema: schemas.images(
      i18n('entities.product.fields.photo'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'discountPrice',
    label: i18n('entities.product.fields.discountPrice'),
    schema: schemas.decimal(
      i18n('entities.product.fields.discountPrice'),
      {},
    ),
  },
  {
    name: 'previousPrice',
    label: i18n('entities.product.fields.previousPrice'),
    schema: schemas.decimal(
      i18n('entities.product.fields.previousPrice'),
      {},
    ),
  },
  {
    name: 'stock',
    label: i18n('entities.product.fields.stock'),
    schema: schemas.integer(
      i18n('entities.product.fields.stock'),
      {},
    ),
  },

  {
    name: 'metaDesctiption',
    label: i18n('entities.product.fields.metaDesctiption'),
    schema: schemas.string(
      i18n('entities.product.fields.metaDesctiption'),
      {},
    ),
  },
  {
    name: 'status',
    label: i18n('entities.product.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.product.fields.status'),
      {
        options: productEnumerators.status,
      },
    ),
  },
  {
    name: 'isType',
    label: i18n('entities.product.fields.isType'),
    schema: schemas.string(
      i18n('entities.product.fields.isType'),
      {},
    ),
  },
  {
    name: 'date',
    label: i18n('entities.product.fields.date'),
    schema: schemas.date(
      i18n('entities.product.fields.date'),
      {},
    ),
    render: (value) =>
      value && value instanceof Date
        ? moment(value).format('YYYY-MM-DD')
        : value,
  },
  {
    name: 'itemType',
    label: i18n('entities.product.fields.itemType'),
    schema: schemas.enumerator(
      i18n('entities.product.fields.itemType'),
      {
        options: productEnumerators.itemType,
      },
    ),
  },
  {
    name: 'file',
    label: i18n('entities.product.fields.file'),
    schema: schemas.files(
      i18n('entities.product.fields.file'),
      {},
    ),
  },
  {
    name: 'link',
    label: i18n('entities.product.fields.link'),
    schema: schemas.string(
      i18n('entities.product.fields.link'),
      {},
    ),
  },
  {
    name: 'fileType',
    label: i18n('entities.product.fields.fileType'),
    schema: schemas.enumerator(
      i18n('entities.product.fields.fileType'),
      {
        options: productEnumerators.fileType,
      },
    ),
  },
  {
    name: 'taxe',
    label: i18n('entities.product.fields.taxe'),
    schema: schemas.relationToOne(
      i18n('entities.product.fields.taxe'),
      {},
    ),
  },
  {
    name: 'category',
    label: i18n('entities.product.fields.category'),
    schema: schemas.relationToOne(
      i18n('entities.product.fields.category'),
      {},
    ),
  },
  {
    name: 'subcategory',
    label: i18n('entities.product.fields.subcategory'),
    schema: schemas.relationToOne(
      i18n('entities.product.fields.subcategory'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'childcategory',
    label: i18n('entities.product.fields.childcategory'),
    schema: schemas.relationToOne(
      i18n('entities.product.fields.childcategory'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'brand',
    label: i18n('entities.product.fields.brand'),
    schema: schemas.relationToOne(
      i18n('entities.product.fields.brand'),
      {},
    ),
  },
  {
    name: 'gallery',
    label: i18n('entities.product.fields.gallery'),
    schema: schemas.relationToMany(
      i18n('entities.product.fields.gallery'),
      {},
    ),
  },
];
