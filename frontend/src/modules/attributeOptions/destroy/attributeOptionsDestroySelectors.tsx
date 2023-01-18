import { createSelector } from 'reselect';

const selectRaw = (state) => state.attributeOptions.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const attributeOptionsDestroySelectors = {
  selectLoading,
};

export default attributeOptionsDestroySelectors;
