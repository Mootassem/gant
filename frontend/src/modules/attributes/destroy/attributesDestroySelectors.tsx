import { createSelector } from 'reselect';

const selectRaw = (state) => state.attributes.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const attributesDestroySelectors = {
  selectLoading,
};

export default attributesDestroySelectors;
