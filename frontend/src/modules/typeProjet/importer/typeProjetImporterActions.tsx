import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/typeProjet/importer/typeProjetImporterSelectors';
import TypeProjetService from 'src/modules/typeProjet/typeProjetService';
import fields from 'src/modules/typeProjet/importer/typeProjetImporterFields';
import { i18n } from 'src/i18n';

const typeProjetImporterActions = importerActions(
  'TYPEPROJET_IMPORTER',
  selectors,
  TypeProjetService.import,
  fields,
  i18n('entities.typeProjet.importer.fileName'),
);

export default typeProjetImporterActions;