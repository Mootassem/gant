import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import campaignItemsEnumerators from 'src/modules/campaignItems/campaignItemsEnumerators';

export default [
  {
    name: 'status',
    label: i18n('entities.campaignItems.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.campaignItems.fields.status'),
      {
        "options": campaignItemsEnumerators.status
      },
    ),
  },
  {
    name: 'isFeature',
    label: i18n('entities.campaignItems.fields.isFeature'),
    schema: schemas.enumerator(
      i18n('entities.campaignItems.fields.isFeature'),
      {
        "options": campaignItemsEnumerators.isFeature
      },
    ),
  },
  {
    name: 'itemId',
    label: i18n('entities.campaignItems.fields.itemId'),
    schema: schemas.relationToMany(
      i18n('entities.campaignItems.fields.itemId'),
      {
        "required": true
      },
    ),
  },
];