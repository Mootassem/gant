import { createSelector } from 'reselect';

const selectRaw = (state) => state.review.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const reviewDestroySelectors = {
  selectLoading,
};

export default reviewDestroySelectors;
