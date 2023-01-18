import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import newsEnumerators from 'src/modules/news/newsEnumerators';

export default [
  {
    name: 'name',
    label: i18n('entities.news.fields.name'),
    schema: schemas.string(
      i18n('entities.news.fields.name'),
      {},
    ),
  },
  {
    name: 'type',
    label: i18n('entities.news.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.news.fields.type'),
      {
        "options": newsEnumerators.type
      },
    ),
  },
  {
    name: 'shortDescription',
    label: i18n('entities.news.fields.shortDescription'),
    schema: schemas.string(
      i18n('entities.news.fields.shortDescription'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.news.fields.description'),
    schema: schemas.string(
      i18n('entities.news.fields.description'),
      {},
    ),
  },
  {
    name: 'image',
    label: i18n('entities.news.fields.image'),
    schema: schemas.images(
      i18n('entities.news.fields.image'),
      {
        "max": 1
      },
    ),
  },
  {
    name: 'attachements',
    label: i18n('entities.news.fields.attachements'),
    schema: schemas.files(
      i18n('entities.news.fields.attachements'),
      {},
    ),
  },
  {
    name: 'category',
    label: i18n('entities.news.fields.category'),
    schema: schemas.relationToOne(
      i18n('entities.news.fields.category'),
      {},
    ),
  },
  {
    name: 'tags',
    label: i18n('entities.news.fields.tags'),
    schema: schemas.relationToMany(
      i18n('entities.news.fields.tags'),
      {},
    ),
  },
  {
    name: 'published',
    label: i18n('entities.news.fields.published'),
    schema: schemas.boolean(
      i18n('entities.news.fields.published'),
      {},
    ),
  },
];