import { createSelector } from 'reselect';

const selectRaw = (state) => state.cart.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const cartDestroySelectors = {
  selectLoading,
};

export default cartDestroySelectors;
