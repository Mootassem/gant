import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.typeProjet.fields.id'),
  },
  {
    name: 'nom',
    label: i18n('entities.typeProjet.fields.nom'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.typeProjet.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.typeProjet.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
