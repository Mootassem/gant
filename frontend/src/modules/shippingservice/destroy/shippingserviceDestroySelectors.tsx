import { createSelector } from 'reselect';

const selectRaw = (state) => state.shippingservice.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const shippingserviceDestroySelectors = {
  selectLoading,
};

export default shippingserviceDestroySelectors;
