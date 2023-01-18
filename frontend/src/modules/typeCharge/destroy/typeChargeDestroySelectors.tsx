import { createSelector } from 'reselect';

const selectRaw = (state) => state.typeCharge.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const typeChargeDestroySelectors = {
  selectLoading,
};

export default typeChargeDestroySelectors;
