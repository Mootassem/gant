import { createSelector } from 'reselect';

const selectRaw = (state) => state.edit.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const editViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default editViewSelectors;
