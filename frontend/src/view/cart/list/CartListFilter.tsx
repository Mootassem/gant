import { i18n } from 'src/i18n';
import actions from 'src/modules/cart/list/cartListActions';
import selectors from 'src/modules/cart/list/cartListSelectors';
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

const schema = yup.object().shape({
  attribute: yupFilterSchemas.string(
    i18n('entities.cart.fields.attribute'),
  ),
  name: yupFilterSchemas.string(
    i18n('entities.cart.fields.name'),
  ),
  slug: yupFilterSchemas.string(
    i18n('entities.cart.fields.slug'),
  ),
  qtyRange: yupFilterSchemas.decimalRange(
    i18n('entities.cart.fields.qtyRange'),
  ),
  priceRange: yupFilterSchemas.decimalRange(
    i18n('entities.cart.fields.priceRange'),
  ),
  mainPriceRange: yupFilterSchemas.decimalRange(
    i18n('entities.cart.fields.mainPriceRange'),
  ),
  itemType: yupFilterSchemas.string(
    i18n('entities.cart.fields.itemType'),
  ),
  itemLN: yupFilterSchemas.string(
    i18n('entities.cart.fields.itemLN'),
  ),
  itemLK: yupFilterSchemas.string(
    i18n('entities.cart.fields.itemLK'),
  ),
});

const emptyValues = {
  attribute: null,
  name: null,
  slug: null,
  qtyRange: [],
  priceRange: [],
  mainPriceRange: [],
  itemType: null,
  itemLN: null,
  itemLK: null,
};

const previewRenders = {
  attribute: {
    label: i18n('entities.cart.fields.attribute'),
    render: filterRenders.generic(),
  },
  name: {
    label: i18n('entities.cart.fields.name'),
    render: filterRenders.generic(),
  },
  slug: {
    label: i18n('entities.cart.fields.slug'),
    render: filterRenders.generic(),
  },
  qtyRange: {
    label: i18n('entities.cart.fields.qtyRange'),
    render: filterRenders.decimalRange(),
  },
  priceRange: {
    label: i18n('entities.cart.fields.priceRange'),
    render: filterRenders.decimalRange(),
  },
  mainPriceRange: {
    label: i18n('entities.cart.fields.mainPriceRange'),
    render: filterRenders.decimalRange(),
  },
  itemType: {
    label: i18n('entities.cart.fields.itemType'),
    render: filterRenders.generic(),
  },
  itemLN: {
    label: i18n('entities.cart.fields.itemLN'),
    render: filterRenders.generic(),
  },
  itemLK: {
    label: i18n('entities.cart.fields.itemLK'),
    render: filterRenders.generic(),
  },
};

function CartListFilter(props) {
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
                  <InputFormItem
                    name="attribute"
                    label={i18n(
                      'entities.cart.fields.attribute',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="name"
                    label={i18n(
                      'entities.cart.fields.name',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="slug"
                    label={i18n(
                      'entities.cart.fields.slug',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputRangeFormItem
                    name="qtyRange"
                    label={i18n(
                      'entities.cart.fields.qtyRange',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputRangeFormItem
                    name="priceRange"
                    label={i18n(
                      'entities.cart.fields.priceRange',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputRangeFormItem
                    name="mainPriceRange"
                    label={i18n(
                      'entities.cart.fields.mainPriceRange',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="itemType"
                    label={i18n(
                      'entities.cart.fields.itemType',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="itemLN"
                    label={i18n(
                      'entities.cart.fields.itemLN',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="itemLK"
                    label={i18n(
                      'entities.cart.fields.itemLK',
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

export default CartListFilter;
