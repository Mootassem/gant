import { createSelector } from 'reselect';

const selectRaw = (state) => state.state.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const stateViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default stateViewSelectors;
