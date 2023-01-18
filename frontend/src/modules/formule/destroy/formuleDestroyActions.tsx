import listActions from 'src/modules/formule/list/formuleListActions';
import FormuleService from 'src/modules/formule/formuleService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'FORMULE_DESTROY';

const formuleDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: formuleDestroyActions.DESTROY_STARTED,
      });

      await FormuleService.destroyAll([id]);

      dispatch({
        type: formuleDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.formule.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/formule');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: formuleDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: formuleDestroyActions.DESTROY_ALL_STARTED,
      });

      await FormuleService.destroyAll(ids);

      dispatch({
        type: formuleDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.formule.destroyAll.success'),
      );

      getHistory().push('/formule');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: formuleDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default formuleDestroyActions;
