import listActions from 'src/modules/typeProjet/list/typeProjetListActions';
import TypeProjetService from 'src/modules/typeProjet/typeProjetService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'TYPEPROJET_DESTROY';

const typeProjetDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: typeProjetDestroyActions.DESTROY_STARTED,
      });

      await TypeProjetService.destroyAll([id]);

      dispatch({
        type: typeProjetDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.typeProjet.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/type-projet');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: typeProjetDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: typeProjetDestroyActions.DESTROY_ALL_STARTED,
      });

      await TypeProjetService.destroyAll(ids);

      dispatch({
        type: typeProjetDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.typeProjet.destroyAll.success'),
      );

      getHistory().push('/type-projet');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: typeProjetDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default typeProjetDestroyActions;
