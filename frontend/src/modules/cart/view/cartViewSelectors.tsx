import { createSelector } from 'reselect';

const selectRaw = (state) => state.cart.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const cartViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default cartViewSelectors;
