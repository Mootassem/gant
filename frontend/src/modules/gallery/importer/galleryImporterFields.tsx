import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'photos',
    label: i18n('entities.gallery.fields.photos'),
    schema: schemas.images(
      i18n('entities.gallery.fields.photos'),
      {
        "required": true
      },
    ),
  },
];