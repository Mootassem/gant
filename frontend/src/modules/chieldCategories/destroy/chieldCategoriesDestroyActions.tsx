import listActions from 'src/modules/chieldCategories/list/chieldCategoriesListActions';
import ChieldCategoriesService from 'src/modules/chieldCategories/chieldCategoriesService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CHIELDCATEGORIES_DESTROY';

const chieldCategoriesDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: chieldCategoriesDestroyActions.DESTROY_STARTED,
      });

      await ChieldCategoriesService.destroyAll([id]);

      dispatch({
        type: chieldCategoriesDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.chieldCategories.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/chield-categories');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: chieldCategoriesDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: chieldCategoriesDestroyActions.DESTROY_ALL_STARTED,
      });

      await ChieldCategoriesService.destroyAll(ids);

      dispatch({
        type: chieldCategoriesDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.chieldCategories.destroyAll.success'),
      );

      getHistory().push('/chield-categories');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: chieldCategoriesDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default chieldCategoriesDestroyActions;
