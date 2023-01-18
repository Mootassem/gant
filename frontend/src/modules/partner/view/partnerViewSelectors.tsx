import { createSelector } from 'reselect';

const selectRaw = (state) => state.partner.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const partnerViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default partnerViewSelectors;
