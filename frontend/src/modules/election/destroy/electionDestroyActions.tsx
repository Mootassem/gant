import listActions from 'src/modules/election/list/electionListActions';
import ElectionService from 'src/modules/election/electionService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ELECTION_DESTROY';

const electionDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: electionDestroyActions.DESTROY_STARTED,
      });

      await ElectionService.destroyAll([id]);

      dispatch({
        type: electionDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.election.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/election');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: electionDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: electionDestroyActions.DESTROY_ALL_STARTED,
      });

      await ElectionService.destroyAll(ids);

      dispatch({
        type: electionDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.election.destroyAll.success'),
      );

      getHistory().push('/election');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: electionDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default electionDestroyActions;
