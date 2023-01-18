import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'title',
    label: i18n('entities.trackOrder.fields.title'),
    schema: schemas.string(
      i18n('entities.trackOrder.fields.title'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'item',
    label: i18n('entities.trackOrder.fields.item'),
    schema: schemas.relationToMany(
      i18n('entities.trackOrder.fields.item'),
      {},
    ),
  },
  {
    name: 'order',
    label: i18n('entities.trackOrder.fields.order'),
    schema: schemas.relationToMany(
      i18n('entities.trackOrder.fields.order'),
      {},
    ),
  },
];