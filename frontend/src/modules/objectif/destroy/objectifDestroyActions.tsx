import listActions from 'src/modules/objectif/list/objectifListActions';
import ObjectifService from 'src/modules/objectif/objectifService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'OBJECTIF_DESTROY';

const objectifDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: objectifDestroyActions.DESTROY_STARTED,
      });

      await ObjectifService.destroyAll([id]);

      dispatch({
        type: objectifDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.objectif.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().go(0);
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: objectifDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: objectifDestroyActions.DESTROY_ALL_STARTED,
      });

      await ObjectifService.destroyAll(ids);

      dispatch({
        type: objectifDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.objectif.destroyAll.success'),
      );

      getHistory().go(0);
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: objectifDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default objectifDestroyActions;
