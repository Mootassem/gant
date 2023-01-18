import { createSelector } from 'reselect';

const selectRaw = (state) => state.election.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const electionViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default electionViewSelectors;
