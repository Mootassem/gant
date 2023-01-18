import listActions from 'src/modules/brands/list/brandsListActions';
import BrandsService from 'src/modules/brands/brandsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'BRANDS_DESTROY';

const brandsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: brandsDestroyActions.DESTROY_STARTED,
      });

      await BrandsService.destroyAll([id]);

      dispatch({
        type: brandsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.brands.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/brands');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: brandsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: brandsDestroyActions.DESTROY_ALL_STARTED,
      });

      await BrandsService.destroyAll(ids);

      dispatch({
        type: brandsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.brands.destroyAll.success'),
      );

      getHistory().push('/brands');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: brandsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default brandsDestroyActions;
