import PartnerService from 'src/modules/partner/partnerService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PARTNER_FORM';

const partnerFormActions = {
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
        type: partnerFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PartnerService.find(id);
      }

      dispatch({
        type: partnerFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: partnerFormActions.INIT_ERROR,
      });

      getHistory().push('/partner');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: partnerFormActions.CREATE_STARTED,
      });

      await PartnerService.create(values);

      dispatch({
        type: partnerFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.partner.create.success'),
      );

      getHistory().push('/partner');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: partnerFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: partnerFormActions.UPDATE_STARTED,
      });

      await PartnerService.update(id, values);

      dispatch({
        type: partnerFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.partner.update.success'),
      );

      getHistory().push('/partner');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: partnerFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default partnerFormActions;
