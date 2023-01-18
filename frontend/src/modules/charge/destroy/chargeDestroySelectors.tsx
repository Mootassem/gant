import { createSelector } from 'reselect';

const selectRaw = (state) => state.charge.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const chargeDestroySelectors = {
  selectLoading,
};

export default chargeDestroySelectors;
