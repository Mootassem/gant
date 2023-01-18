import AttributeOptionsService from 'src/modules/attributeOptions/attributeOptionsService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ATTRIBUTEOPTIONS_FORM';

const attributeOptionsFormActions = {
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
        type: attributeOptionsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await AttributeOptionsService.find(id);
      }

      dispatch({
        type: attributeOptionsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: attributeOptionsFormActions.INIT_ERROR,
      });

      getHistory().push('/product');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: attributeOptionsFormActions.CREATE_STARTED,
      });

      await AttributeOptionsService.create(values);

      dispatch({
        type: attributeOptionsFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.attributeOptions.create.success'),
      );

      getHistory().push('/product');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: attributeOptionsFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: attributeOptionsFormActions.UPDATE_STARTED,
      });

      await AttributeOptionsService.update(id, values);

      dispatch({
        type: attributeOptionsFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.attributeOptions.update.success'),
      );

      getHistory().push('/product');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: attributeOptionsFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default attributeOptionsFormActions;
