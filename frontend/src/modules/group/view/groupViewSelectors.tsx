import { createSelector } from 'reselect';

const selectRaw = (state) => state.group.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const groupViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default groupViewSelectors;
