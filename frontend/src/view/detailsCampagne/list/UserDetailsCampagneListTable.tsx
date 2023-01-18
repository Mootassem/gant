import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import membershipSelectors from 'src/modules/membership/membershipSelectors';
import destroyActions from 'src/modules/membership/destroy/membershipDestroyActions';
import destroySelectors from 'src/modules/membership/destroy/membershipDestroySelectors';
import actions from 'src/modules/membership/list/membershipListActions';
import selectors from 'src/modules/membership/list/membershipListSelectors';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Spinner from 'src/view/shared/Spinner';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import Pagination from 'src/view/shared/table/Pagination';
import UserListItem from 'src/view/user/list/UserListItem';
import FilesListView from 'src/view/shared/table/FileListView';
import CampaignListItem from 'src/view/campaign/list/CampaignListItem';

function UserDetailsCampagneListTable(props) {
  const [recordIdToDestroy, setRecordIdToDestroy] =
    useState(null);
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);

  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  const isAllSelected = useSelector(
    selectors.selectIsAllSelected,
  );
  const hasPermissionToEdit = useSelector(
    membershipSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    membershipSelectors.selectPermissionToDestroy,
  );

  const doOpenDestroyConfirmModal = (id) => {
    setRecordIdToDestroy(id);
  };

  const doCloseDestroyConfirmModal = () => {
    setRecordIdToDestroy(null);
  };

  const doChangeSort = (field) => {
    const order =
      sorter.field === field && sorter.order === 'ascend'
        ? 'descend'
        : 'ascend';

    dispatch(
      actions.doChangeSort({
        field,
        order,
      }),
    );
  };

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };

  const doDestroy = (id) => {
    doCloseDestroyConfirmModal();

    dispatch(destroyActions.doDestroy(id));
  };

  const doToggleAllSelected = () => {
    dispatch(actions.doToggleAllSelected());
  };

  const doToggleOneSelected = (id) => {
    dispatch(actions.doToggleOneSelected(id));
  };

  return (
    <TableWrapper>
      <div className="table-responsive">
        <table className="table table-striped     mt-2">
          <thead className="thead">
            {props.data ? (
              <tr>
                <TableColumnHeader className="th-checkbox">
                  {hasRows && (
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="table-header-checkbox"
                        checked={Boolean(isAllSelected)}
                        onChange={() =>
                          doToggleAllSelected()
                        }
                      />
                      <label
                        htmlFor="table-header-checkbox"
                        className="custom-control-label"
                      >
                        &#160;
                      </label>
                    </div>
                  )}
                </TableColumnHeader>
                <TableColumnHeader
                  label={i18n(
                    'entities.membership.fields.campaign',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'status'}
                  label={i18n(
                    'entities.membership.fields.status',
                  )}
                />

                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'amount'}
                  label={i18n(
                    'entities.membership.fields.amount',
                  )}
                  align="right"
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'paymentMethod'}
                  label={i18n(
                    'entities.membership.fields.paymentMethod',
                  )}
                  align="right"
                />

                <TableColumnHeader className="th-actions" />
              </tr>
            ) : (
              <tr>
                <TableColumnHeader className="th-checkbox">
                  {hasRows && (
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="table-header-checkbox"
                        checked={Boolean(isAllSelected)}
                        onChange={() =>
                          doToggleAllSelected()
                        }
                      />
                      <label
                        htmlFor="table-header-checkbox"
                        className="custom-control-label"
                      >
                        &#160;
                      </label>
                    </div>
                  )}
                </TableColumnHeader>
                <TableColumnHeader
                  label={i18n(
                    'entities.membership.fields.campaign',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'status'}
                  label={i18n(
                    'entities.membership.fields.status',
                  )}
                />

                <TableColumnHeader
                  label={i18n(
                    'entities.membership.fields.member',
                  )}
                />

                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'amount'}
                  label={i18n(
                    'entities.membership.fields.amount',
                  )}
                  align="right"
                />
                <TableColumnHeader className="th-actions" />
              </tr>
            )}
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={100}>
                  <Spinner />
                </td>
              </tr>
            )}
            {!loading && !hasRows && (
              <tr>
                <td colSpan={100}>
                  <div className="d-flex justify-content-center">
                    {i18n('table.noData')}
                  </div>
                </td>
              </tr>
            )}
            {!loading &&
              props.data &&
              props.data.map((row) => (
                <tr key={row.id}>
                  <th className="th-checkbox" scope="row">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id={`table-header-checkbox-${row.id}`}
                        checked={selectedKeys.includes(
                          row.id,
                        )}
                        onChange={() =>
                          doToggleOneSelected(row.id)
                        }
                      />
                      <label
                        htmlFor={`table-header-checkbox-${row.id}`}
                        className="custom-control-label"
                      >
                        &#160;
                      </label>
                    </div>
                  </th>
                  <td>
                    {row.status
                      ? i18n(
                          `entities.membership.enumerators.status.${row.status}`,
                        )
                      : null}
                  </td>

                  <td style={{ textAlign: 'right' }}>
                    {row.amount}
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    {row.paymentMethod
                      ? i18n(
                          `entities.membership.enumerators.paymentMethod.${row.paymentMethod}`,
                        )
                      : null}
                  </td>

                  <td className="td-actions">
                    <Link
                      className="btn btn-link"
                      to={`/membership/${row.id}`}
                    >
                      <i className={'fas fa-search'} />
                    </Link>
                    {hasPermissionToEdit && (
                      <Link
                        className="btn btn-link"
                        to={`/membership/${row.id}/edit`}
                      >
                        <i className="fas fa-edit" />
                      </Link>
                    )}
                    {hasPermissionToDestroy && (
                      <button
                        className="btn btn-link"
                        type="button"
                        onClick={() =>
                          doOpenDestroyConfirmModal(row.id)
                        }
                      >
                        <i className="fas fa-trash-alt" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            {!loading &&
              !props.data &&
              rows.map((row) => (
                <tr key={row.id}>
                  <th className="th-checkbox" scope="row">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id={`table-header-checkbox-${row.id}`}
                        checked={selectedKeys.includes(
                          row.id,
                        )}
                        onChange={() =>
                          doToggleOneSelected(row.id)
                        }
                      />
                      <label
                        htmlFor={`table-header-checkbox-${row.id}`}
                        className="custom-control-label"
                      >
                        &#160;
                      </label>
                    </div>
                  </th>
                  <td>
                    <CampaignListItem
                      value={row.campaign}
                    />
                  </td>
                  <td>
                    {row.status
                      ? i18n(
                          `entities.membership.enumerators.status.${row.status}`,
                        )
                      : null}
                  </td>

                  <td>
                    <UserListItem value={row.user} />
                  </td>

                  <td style={{ textAlign: 'right' }}>
                    {row.amount}
                  </td>
                  <td className="td-actions">
                    <Link
                      className="btn btn-link"
                      to={`/membership/${row.id}`}
                    >
                      <i className={'fas fa-search'} />
                    </Link>
                    {hasPermissionToEdit && (
                      <Link
                        className="btn btn-link"
                        to={`/membership/${row.id}/edit`}
                      >
                        <i className="fas fa-edit" />
                      </Link>
                    )}
                    {hasPermissionToDestroy && (
                      <button
                        className="btn btn-link"
                        type="button"
                        onClick={() =>
                          doOpenDestroyConfirmModal(row.id)
                        }
                      >
                        <i className="fas fa-trash-alt" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pagination
        onChange={doChangePagination}
        disabled={loading}
        pagination={pagination}
      />

      {recordIdToDestroy && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </TableWrapper>
  );
}

export default UserDetailsCampagneListTable;
