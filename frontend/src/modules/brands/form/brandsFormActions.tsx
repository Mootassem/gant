import BrandsService from 'src/modules/brands/brandsService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'BRANDS_FORM';

const brandsFormActions = {
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
        type: brandsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await BrandsService.find(id);
      }

      dispatch({
        type: brandsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: brandsFormActions.INIT_ERROR,
      });

      getHistory().push('/brands');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: brandsFormActions.CREATE_STARTED,
      });

      await BrandsService.create(values);

      dispatch({
        type: brandsFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.brands.create.success'),
      );

      getHistory().push('/brands');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: brandsFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: brandsFormActions.UPDATE_STARTED,
      });

      await BrandsService.update(id, values);

      dispatch({
        type: brandsFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.brands.update.success'),
      );

      getHistory().push('/brands');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: brandsFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default brandsFormActions;
