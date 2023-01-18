import listActions from 'src/modules/attributeOptions/list/attributeOptionsListActions';
import AttributeOptionsService from 'src/modules/attributeOptions/attributeOptionsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ATTRIBUTEOPTIONS_DESTROY';

const attributeOptionsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: attributeOptionsDestroyActions.DESTROY_STARTED,
      });

      await AttributeOptionsService.destroyAll([id]);

      dispatch({
        type: attributeOptionsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.attributeOptions.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/attribute-options');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: attributeOptionsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: attributeOptionsDestroyActions.DESTROY_ALL_STARTED,
      });

      await AttributeOptionsService.destroyAll(ids);

      dispatch({
        type: attributeOptionsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.attributeOptions.destroyAll.success'),
      );

      getHistory().push('/attribute-options');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: attributeOptionsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default attributeOptionsDestroyActions;
