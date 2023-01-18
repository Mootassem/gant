import { createSelector } from 'reselect';

const selectRaw = (state) => state.review.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const reviewViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default reviewViewSelectors;
