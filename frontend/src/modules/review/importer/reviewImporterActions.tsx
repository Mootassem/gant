import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/review/importer/reviewImporterSelectors';
import ReviewService from 'src/modules/review/reviewService';
import fields from 'src/modules/review/importer/reviewImporterFields';
import { i18n } from 'src/i18n';

const reviewImporterActions = importerActions(
  'REVIEW_IMPORTER',
  selectors,
  ReviewService.import,
  fields,
  i18n('entities.review.importer.fileName'),
);

export default reviewImporterActions;