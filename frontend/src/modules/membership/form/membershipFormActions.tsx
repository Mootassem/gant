import MembershipService from 'src/modules/membership/membershipService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'MEMBERSHIP_FORM';

const membershipFormActions = {
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
        type: membershipFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await MembershipService.find(id);
      }

      dispatch({
        type: membershipFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: membershipFormActions.INIT_ERROR,
      });

      getHistory().goBack();
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: membershipFormActions.CREATE_STARTED,
      });

      await MembershipService.create(values);

      dispatch({
        type: membershipFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.membership.create.success'),
      );

      getHistory().goBack();
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: membershipFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: membershipFormActions.UPDATE_STARTED,
      });

      await MembershipService.update(id, values);

      dispatch({
        type: membershipFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.membership.update.success'),
      );

      getHistory().goBack();
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: membershipFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default membershipFormActions;
