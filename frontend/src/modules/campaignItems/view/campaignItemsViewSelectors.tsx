import { createSelector } from 'reselect';

const selectRaw = (state) => state.campaignItems.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const campaignItemsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default campaignItemsViewSelectors;
