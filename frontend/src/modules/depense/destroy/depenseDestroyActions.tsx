import listActions from 'src/modules/depense/list/depenseListActions';
import DepenseService from 'src/modules/depense/depenseService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DEPENSE_DESTROY';

const depenseDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: depenseDestroyActions.DESTROY_STARTED,
      });

      await DepenseService.destroyAll([id]);

      dispatch({
        type: depenseDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.depense.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/depense');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: depenseDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: depenseDestroyActions.DESTROY_ALL_STARTED,
      });

      await DepenseService.destroyAll(ids);

      dispatch({
        type: depenseDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.depense.destroyAll.success'),
      );

      getHistory().push('/depense');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: depenseDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default depenseDestroyActions;
