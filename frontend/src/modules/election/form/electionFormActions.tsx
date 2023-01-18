import ElectionService from 'src/modules/election/electionService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ELECTION_FORM';

const electionFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: electionFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ElectionService.find(id);
      }

      dispatch({
        type: electionFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: electionFormActions.INIT_ERROR,
      });

      getHistory().push('/election');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: electionFormActions.CREATE_STARTED,
      });

      await ElectionService.create(values);

      dispatch({
        type: electionFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.election.create.success'),
      );

      getHistory().push('/election');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: electionFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: electionFormActions.UPDATE_STARTED,
      });

      await ElectionService.update(id, values);

      dispatch({
        type: electionFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.election.update.success'),
      );

      getHistory().push('/election');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: electionFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default electionFormActions;
