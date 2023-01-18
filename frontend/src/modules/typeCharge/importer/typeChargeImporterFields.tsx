import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'nom',
    label: i18n('entities.typeCharge.fields.nom'),
    schema: schemas.string(
      i18n('entities.typeCharge.fields.nom'),
      {
        "required": true
      },
    ),
  },
];