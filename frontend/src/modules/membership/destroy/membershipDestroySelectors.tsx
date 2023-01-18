import { createSelector } from 'reselect';

const selectRaw = (state) => state.membership.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const membershipDestroySelectors = {
  selectLoading,
};

export default membershipDestroySelectors;
