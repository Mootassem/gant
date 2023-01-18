import listActions from 'src/modules/state/list/stateListActions';
import StateService from 'src/modules/state/stateService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'STATE_DESTROY';

const stateDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: stateDestroyActions.DESTROY_STARTED,
      });

      await StateService.destroyAll([id]);

      dispatch({
        type: stateDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.state.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/state');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: stateDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: stateDestroyActions.DESTROY_ALL_STARTED,
      });

      await StateService.destroyAll(ids);

      dispatch({
        type: stateDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.state.destroyAll.success'),
      );

      getHistory().push('/state');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: stateDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default stateDestroyActions;
