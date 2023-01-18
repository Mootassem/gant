import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import membershipSelectors from 'src/modules/membership/membershipSelectors';
import destroyActions from 'src/modules/membership/destroy/membershipDestroyActions';
import destroySelectors from 'src/modules/membership/destroy/membershipDestroySelectors';
import actions from 'src/modules/membership/list/membershipListActions';
import selectors from 'src/modules/membership/list/membershipListSelectors';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import Toolbar from 'src/view/shared/styles/Toolbar';
import ReactTooltip from 'react-tooltip';

function MembershipToolbar(props) {
  const [
    destroyAllConfirmVisible,
    setDestroyAllConfirmVisible,
  ] = useState(false);

  const dispatch = useDispatch();

  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const loading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const exportLoading = useSelector(
    selectors.selectExportLoading,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToDestroy = useSelector(
    membershipSelectors.selectPermissionToDestroy,
  );
  const hasPermissionToCreate = useSelector(
    membershipSelectors.selectPermissionToCreate,
  );
  const hasPermissionToImport = useSelector(
    membershipSelectors.selectPermissionToImport,
  );

  const doOpenDestroyAllConfirmModal = () => {
    setDestroyAllConfirmVisible(true);
  };

  const doCloseDestroyAllConfirmModal = () => {
    setDestroyAllConfirmVisible(false);
  };

  const doExport = () => {
    dispatch(actions.doExport());
  };

  const doDestroyAllSelected = () => {
    doCloseDestroyAllConfirmModal();

    dispatch(destroyActions.doDestroyAll(selectedKeys));
  };

  const renderExportButton = () => {
    const disabled = !hasRows || loading;

    const button = (
      <span
        data-tip={i18n('common.export')}
        data-for="charge-list-toolbar-export"
      >
        <button
          className="btnCircle btn-light"
          disabled={disabled}
          onClick={doExport}
          type="button"
        >
          <ButtonIcon
            loading={exportLoading}
            iconClass="far fa-file-excel"
          />
        </button>
        <ReactTooltip id="charge-list-toolbar-export" />
      </span>
    );

    if (disabled) {
      return (
        <span
          data-tip={i18n('common.noDataToExport')}
          data-tip-disable={!disabled}
          data-for="membership-list-toolbar-export-tooltip"
        >
          {button}
          <ReactTooltip id="membership-list-toolbar-export-tooltip" />
        </span>
      );
    }

    return button;
  };

  // const renderDestroyButton = () => {
  //   if (!hasPermissionToDestroy) {
  //     return null;
  //   }

  //   const disabled = !selectedKeys.length || loading;

  //   const button = (
  //     <span
  //       data-tip={i18n('common.destroy')}
  //       data-tip-disable={disabled}
  //       data-for="charge-list-toolbar-destroy"
  //     >
  //       <button
  //         disabled={disabled}
  //         className="btn btn-primary"
  //         type="button"
  //         onClick={doOpenDestroyAllConfirmModal}
  //       >
  //         <ButtonIcon
  //           loading={destroyLoading}
  //           iconClass="far fa-trash-alt"
  //         />
  //       </button>
  //       <ReactTooltip id="charge-list-toolbar-destroy" />
  //     </span>
  //   );

  //   if (disabled) {
  //     return (
  //       <span
  //         data-tip={i18n('common.mustSelectARow')}
  //         data-tip-disable={!disabled}
  //         data-for="membership-list-toolbar-destroy-tooltip"
  //       >
  //         {button}
  //         <ReactTooltip id="membership-list-toolbar-destroy-tooltip" />
  //       </span>
  //     );
  //   }

  //   return button;
  // };

  return (
    <Toolbar>
      {hasPermissionToCreate && (
        <Link
          to={{
            pathname: '/membership/new',
            id: props.data,
            campaign: props.campaign,
            formule: props.formule,
          }}
        >
          <button className="btn btn-primary" type="button">
            <ButtonIcon iconClass="fas fa-plus" />{' '}
          </button>
        </Link>
      )}

      {/* {hasPermissionToImport && (
        <Link to="/membership/importer">
          <span
            data-tip={i18n('common.import')}
            data-for="charge-list-toolbar-import-tooltip"
          >
            <button
              className="btn btn-primary"
              type="button"
            >
              <ButtonIcon iconClass="fas fa-upload" />
            </button>
            <ReactTooltip id="charge-list-toolbar-import-tooltip" />
          </span>
        </Link>
      )} */}

      {/* {renderDestroyButton()} */}

      {/* {hasPermissionToAuditLogs && (
        <Link to="/audit-logs?entityNames=membership">
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
      )} */}

      {/* {renderExportButton()} */}

      {destroyAllConfirmVisible && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroyAllSelected()}
          onClose={() => doCloseDestroyAllConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </Toolbar>
  );
}

export default MembershipToolbar;
