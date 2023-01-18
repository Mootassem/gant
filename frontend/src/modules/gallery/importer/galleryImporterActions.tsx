import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/gallery/importer/galleryImporterSelectors';
import GalleryService from 'src/modules/gallery/galleryService';
import fields from 'src/modules/gallery/importer/galleryImporterFields';
import { i18n } from 'src/i18n';

const galleryImporterActions = importerActions(
  'GALLERY_IMPORTER',
  selectors,
  GalleryService.import,
  fields,
  i18n('entities.gallery.importer.fileName'),
);

export default galleryImporterActions;