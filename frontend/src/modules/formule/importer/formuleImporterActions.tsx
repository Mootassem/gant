import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/formule/importer/formuleImporterSelectors';
import FormuleService from 'src/modules/formule/formuleService';
import fields from 'src/modules/formule/importer/formuleImporterFields';
import { i18n } from 'src/i18n';

const formuleImporterActions = importerActions(
  'FORMULE_IMPORTER',
  selectors,
  FormuleService.import,
  fields,
  i18n('entities.formule.importer.fileName'),
);

export default formuleImporterActions;