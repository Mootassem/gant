import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import reviewEnumerators from 'src/modules/review/reviewEnumerators';

export default [
  {
    name: 'review',
    label: i18n('entities.review.fields.review'),
    schema: schemas.string(
      i18n('entities.review.fields.review'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'rating',
    label: i18n('entities.review.fields.rating'),
    schema: schemas.integer(
      i18n('entities.review.fields.rating'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'status',
    label: i18n('entities.review.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.review.fields.status'),
      {
        "options": reviewEnumerators.status
      },
    ),
  },
  {
    name: 'subject',
    label: i18n('entities.review.fields.subject'),
    schema: schemas.string(
      i18n('entities.review.fields.subject'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'item',
    label: i18n('entities.review.fields.item'),
    schema: schemas.relationToOne(
      i18n('entities.review.fields.item'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'user',
    label: i18n('entities.review.fields.user'),
    schema: schemas.relationToOne(
      i18n('entities.review.fields.user'),
      {
        "required": true
      },
    ),
  },
];