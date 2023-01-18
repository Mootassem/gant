import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/cart/importer/cartImporterSelectors';
import CartService from 'src/modules/cart/cartService';
import fields from 'src/modules/cart/importer/cartImporterFields';
import { i18n } from 'src/i18n';

const cartImporterActions = importerActions(
  'CART_IMPORTER',
  selectors,
  CartService.import,
  fields,
  i18n('entities.cart.importer.fileName'),
);

export default cartImporterActions;