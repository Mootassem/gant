import TrackOrderService from 'src/modules/trackOrder/trackOrderService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'TRACKORDER_FORM';

const trackOrderFormActions = {
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
        type: trackOrderFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await TrackOrderService.find(id);
      }

      dispatch({
        type: trackOrderFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: trackOrderFormActions.INIT_ERROR,
      });

      getHistory().push('/track-order');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: trackOrderFormActions.CREATE_STARTED,
      });

      await TrackOrderService.create(values);

      dispatch({
        type: trackOrderFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.trackOrder.create.success'),
      );

      getHistory().push('/track-order');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: trackOrderFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: trackOrderFormActions.UPDATE_STARTED,
      });

      await TrackOrderService.update(id, values);

      dispatch({
        type: trackOrderFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.trackOrder.update.success'),
      );

      getHistory().push('/track-order');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: trackOrderFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default trackOrderFormActions;
