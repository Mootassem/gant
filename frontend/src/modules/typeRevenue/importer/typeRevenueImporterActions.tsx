import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/typeRevenue/importer/typeRevenueImporterSelectors';
import TypeRevenueService from 'src/modules/typeRevenue/typeRevenueService';
import fields from 'src/modules/typeRevenue/importer/typeRevenueImporterFields';
import { i18n } from 'src/i18n';

const typeRevenueImporterActions = importerActions(
  'TYPEREVENUE_IMPORTER',
  selectors,
  TypeRevenueService.import,
  fields,
  i18n('entities.typeRevenue.importer.fileName'),
);

export default typeRevenueImporterActions;