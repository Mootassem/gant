import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import chargeSelectors from 'src/modules/charge/chargeSelectors';
import destroyActions from 'src/modules/charge/destroy/chargeDestroyActions';
import destroySelectors from 'src/modules/charge/destroy/chargeDestroySelectors';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Toolbar from 'src/view/shared/styles/Toolbar';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import ReactTooltip from 'react-tooltip';

function ChargeViewToolbar(props) {
  const [destroyConfirmVisible, setDestroyConfirmVisible] =
    useState(false);

  const dispatch = useDispatch();

  const id = props.match.params.id;

  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToEdit = useSelector(
    chargeSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    chargeSelectors.selectPermissionToDestroy,
  );
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const doOpenDestroyConfirmModal = () => {
    setDestroyConfirmVisible(true);
  };

  const doCloseDestroyConfirmModal = () => {
    setDestroyConfirmVisible(false);
  };

  const doDestroy = () => {
    doCloseDestroyConfirmModal();
    dispatch(destroyActions.doDestroy(id));
  };

  return (
    <Toolbar>
      {hasPermissionToEdit && (
        <Link to={`/charge/${id}/edit`}>
          <span
            data-tip={i18n('common.edit')}
            data-for="charge-list-toolbar-new-tooltip"
          >
            <button
              className="btn btn-primary"
              type="button"
            >
              <ButtonIcon iconClass="fas fa-edit" />
            </button>
            <ReactTooltip id="charge-list-toolbar-new-tooltip" />
          </span>
        </Link>
      )}

      {hasPermissionToDestroy && (
        <span
          data-tip={i18n('common.destroy')}
          data-tip-disable={destroyLoading}
          data-for="charge-list-toolbar-destroy"
        >
          <button
            disabled={destroyLoading}
            className="btn btn-primary"
            type="button"
            onClick={doOpenDestroyConfirmModal}
          >
            <ButtonIcon
              loading={destroyLoading}
              iconClass="far fa-trash-alt"
            />
          </button>
          <ReactTooltip id="charge-list-toolbar-destroy" />
        </span>
      )}

      {hasPermissionToAuditLogs && (
        <Link
          to={`/audit-logs?entityId=${encodeURIComponent(
            id,
          )}`}
        >
          <span
            data-tip={i18n('auditLog.menu')}
            data-for="charge-list-toolbar-auditLog-tooltip"
          >
            <button
              className="btnCircle btn-light"
              type="button"
            >
              <ButtonIcon iconClass="fas fa-history" />
            </button>
            <ReactTooltip id="charge-list-toolbar-auditLog-tooltip" />
          </span>
        </Link>
      )}

      {destroyConfirmVisible && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy()}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </Toolbar>
  );
}

export default ChargeViewToolbar;
