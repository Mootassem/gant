import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import campaignSelectors from 'src/modules/campaign/campaignSelectors';
import destroyActions from 'src/modules/campaign/destroy/campaignDestroyActions';
import destroySelectors from 'src/modules/campaign/destroy/campaignDestroySelectors';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Toolbar from 'src/view/shared/styles/Toolbar';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import ReactTooltip from 'react-tooltip';

function CampaignViewToolbar(props) {
  const [destroyConfirmVisible, setDestroyConfirmVisible] =
    useState(false);

  const dispatch = useDispatch();

  const id = props.match.params.id;

  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToEdit = useSelector(
    campaignSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    campaignSelectors.selectPermissionToDestroy,
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
        <Link to={`/campaign/${id}/edit`}>
          <button className="btn btn-primary" type="button">
            <ButtonIcon iconClass="fas fa-edit" />
            {i18n('common.edit')}
          </button>
        </Link>
      )}

      {hasPermissionToDestroy && (
        <button
          className="btn btn-primary"
          type="button"
          disabled={destroyLoading}
          onClick={doOpenDestroyConfirmModal}
        >
          <ButtonIcon
            loading={destroyLoading}
            iconClass="fas fa-trash-alt"
          />
          {i18n('common.destroy')}
        </button>
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

export default CampaignViewToolbar;
