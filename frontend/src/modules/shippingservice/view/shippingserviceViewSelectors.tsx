import { createSelector } from 'reselect';

const selectRaw = (state) => state.shippingservice.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const shippingserviceViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default shippingserviceViewSelectors;
