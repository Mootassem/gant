import listActions from 'src/modules/entree/list/entreeListActions';
import EntreeService from 'src/modules/entree/entreeService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ENTREE_DESTROY';

const entreeDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: entreeDestroyActions.DESTROY_STARTED,
      });

      await EntreeService.destroyAll([id]);

      dispatch({
        type: entreeDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.entree.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/entree');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: entreeDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: entreeDestroyActions.DESTROY_ALL_STARTED,
      });

      await EntreeService.destroyAll(ids);

      dispatch({
        type: entreeDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.entree.destroyAll.success'),
      );

      getHistory().push('/entree');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: entreeDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default entreeDestroyActions;
