import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import chieldCategoriesSelectors from 'src/modules/chieldCategories/chieldCategoriesSelectors';
import destroyActions from 'src/modules/chieldCategories/destroy/chieldCategoriesDestroyActions';
import destroySelectors from 'src/modules/chieldCategories/destroy/chieldCategoriesDestroySelectors';
import actions from 'src/modules/chieldCategories/list/chieldCategoriesListActions';
import selectors from 'src/modules/chieldCategories/list/chieldCategoriesListSelectors';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Spinner from 'src/view/shared/Spinner';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import Pagination from 'src/view/shared/table/Pagination';
import CategoryListItem from 'src/view/category/list/CategoryListItem';
import SubcategoriesListItem from 'src/view/subcategories/list/SubcategoriesListItem';
import actionsForm from 'src/modules/chieldCategories/form/chieldCategoriesFormActions';

function ChieldCategoriesListTable(props) {
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
    chieldCategoriesSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    chieldCategoriesSelectors.selectPermissionToDestroy,
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

  const formSubmit = (row, e) => {
    let data = {
      categoryId: row.categoryId.id,
      subcategoryId: row.subcategoryId.id,
      status: e.target.value,
    };
    dispatch(actionsForm.doUpdate(row.id, data));
  };
  return (
    <TableWrapper>
      <div className="table-responsive">
        <table className="table table-striped     mt-2">
          <thead className="thead">
            <tr>
              <TableColumnHeader className="th-checkbox">
                {hasRows && (
                  <div className="adherent-control adherent-checkbox">
                    <input
                      type="checkbox"
                      className="adherent-control-input"
                      id="table-header-checkbox"
                      checked={Boolean(isAllSelected)}
                      onChange={() => doToggleAllSelected()}
                    />
                    <label
                      htmlFor="table-header-checkbox"
                      className="adherent-control-label"
                    >
                      &#160;
                    </label>
                  </div>
                )}
              </TableColumnHeader>
              <TableColumnHeader
                label={i18n(
                  'entities.chieldCategories.fields.categoryId',
                )}
              />
              <TableColumnHeader
                label={i18n(
                  'entities.chieldCategories.fields.subcategoryId',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'name'}
                label={i18n(
                  'entities.chieldCategories.fields.name',
                )}
              />

              <TableColumnHeader
                label={i18n(
                  'entities.chieldCategories.fields.status',
                )}
              />
              <TableColumnHeader className="th-actions" />
            </tr>
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
              rows.map((row) => (
                <tr key={row.id}>
                  <th className="th-checkbox" scope="row">
                    <div className="adherent-control adherent-checkbox">
                      <input
                        type="checkbox"
                        className="adherent-control-input"
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
                        className="adherent-control-label"
                      >
                        &#160;
                      </label>
                    </div>
                  </th>
                  <td>
                    <CategoryListItem
                      value={row.categoryId}
                    />
                  </td>
                  <td>
                    <SubcategoriesListItem
                      value={row.subcategoryId}
                    />
                  </td>
                  <td>{row.name}</td>

                  <td>
                    <select
                      className="form-control"
                      name="status"
                      onChange={(e) => formSubmit(row, e)}
                    >
                      <option value="enable">Enable</option>
                      <option value="disable">
                        Disable
                      </option>
                      {/* {row.status === 'enable' && (
                        <>
                          <option value="enable">
                            Enable
                          </option>
                          <option value="disable">
                            Disable
                          </option>
                        </>
                      )}
                      {row.status === 'disable' && (
                        <>
                          <option value="disable">
                            Disable
                          </option>
                          <option value="enable">
                            Enable
                          </option>
                        </>
                      )} */}
                    </select>
                  </td>
                  <td className="td-actions">
                    {/* <Link
                      className="btn btn-link"
                      to={`/chield-categories/${row.id}`}
                    >
                      {i18n('common.view')}
                    </Link> */}
                    {hasPermissionToEdit && (
                      <Link
                        className="btn btn-link"
                        to={`/chield-categories/${row.id}/edit`}
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

export default ChieldCategoriesListTable;
