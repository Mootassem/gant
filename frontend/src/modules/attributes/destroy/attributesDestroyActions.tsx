import listActions from 'src/modules/attributes/list/attributesListActions';
import AttributesService from 'src/modules/attributes/attributesService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ATTRIBUTES_DESTROY';

const attributesDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: attributesDestroyActions.DESTROY_STARTED,
      });

      await AttributesService.destroyAll([id]);

      dispatch({
        type: attributesDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.attributes.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/attributes');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: attributesDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: attributesDestroyActions.DESTROY_ALL_STARTED,
      });

      await AttributesService.destroyAll(ids);

      dispatch({
        type: attributesDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.attributes.destroyAll.success'),
      );

      getHistory().push('/attributes');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: attributesDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default attributesDestroyActions;
