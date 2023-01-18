import { i18n } from 'src/i18n';
import actions from 'src/modules/order/list/orderListActions';
import selectors from 'src/modules/order/list/orderListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FilterWrapper from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import orderEnumerators from 'src/modules/order/orderEnumerators';

const schema = yup.object().shape({
  userId: yupFilterSchemas.relationToOne(
    i18n('entities.order.fields.userId'),
  ),
  cart: yupFilterSchemas.string(
    i18n('entities.order.fields.cart'),
  ),
  shipping: yupFilterSchemas.string(
    i18n('entities.order.fields.shipping'),
  ),
  discountRange: yupFilterSchemas.decimalRange(
    i18n('entities.order.fields.discountRange'),
  ),
  paymentMethod: yupFilterSchemas.string(
    i18n('entities.order.fields.paymentMethod'),
  ),
  orderStatus: yupFilterSchemas.enumerator(
    i18n('entities.order.fields.orderStatus'),
  ),
});

const emptyValues = {
  userId: null,
  cart: null,
  shipping: null,
  discountRange: [],
  paymentMethod: null,
  orderStatus: null,
};

const previewRenders = {
  userId: {
    label: i18n('entities.order.fields.userId'),
    render: filterRenders.relationToOne(),
  },
  cart: {
    label: i18n('entities.order.fields.cart'),
    render: filterRenders.generic(),
  },
  shipping: {
    label: i18n('entities.order.fields.shipping'),
    render: filterRenders.generic(),
  },
  discountRange: {
    label: i18n('entities.order.fields.discountRange'),
    render: filterRenders.decimalRange(),
  },
  paymentMethod: {
    label: i18n('entities.order.fields.paymentMethod'),
    render: filterRenders.generic(),
  },
  orderStatus: {
    label: i18n('entities.order.fields.orderStatus'),
    render: filterRenders.enumerator(
      'entities.order.enumerators.orderStatus',
    ),
  },
};

function OrderListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(
      actions.doFetch(
        schema.cast(initialValues),
        rawFilter,
      ),
    );
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  return (
    <FilterWrapper>
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className="container">
        <div
          className={`collapse ${expanded ? 'show' : ''}`}
        >
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-6 col-12">
                  <UserAutocompleteFormItem
                    name="userId"
                    label={i18n(
                      'entities.order.fields.userId',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="cart"
                    label={i18n(
                      'entities.order.fields.cart',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="shipping"
                    label={i18n(
                      'entities.order.fields.shipping',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputRangeFormItem
                    name="discountRange"
                    label={i18n(
                      'entities.order.fields.discountRange',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="paymentMethod"
                    label={i18n(
                      'entities.order.fields.paymentMethod',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <SelectFormItem
                    name="orderStatus"
                    label={i18n(
                      'entities.order.fields.orderStatus',
                    )}
                    options={orderEnumerators.orderStatus.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.order.enumerators.orderStatus.${value}`,
                        ),
                      }),
                    )}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 filter-buttons">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-search"
                    />
                    {i18n('common.search')}
                  </button>
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={onReset}
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-undo"
                    />
                    {i18n('common.reset')}
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </FilterWrapper>
  );
}

export default OrderListFilter;
