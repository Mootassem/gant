import { createSelector } from 'reselect';

const selectRaw = (state) => state.campaignItems.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const campaignItemsDestroySelectors = {
  selectLoading,
};

export default campaignItemsDestroySelectors;
