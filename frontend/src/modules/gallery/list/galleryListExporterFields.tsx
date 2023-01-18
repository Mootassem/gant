import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.gallery.fields.id'),
  },
  {
    name: 'photos',
    label: i18n('entities.gallery.fields.photos'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.gallery.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.gallery.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
