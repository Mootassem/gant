import { createSelector } from 'reselect';

const selectRaw = (state) => state.election.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const electionDestroySelectors = {
  selectLoading,
};

export default electionDestroySelectors;
