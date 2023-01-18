import { i18n } from 'src/i18n';
import actions from 'src/modules/transaction/list/transactionListActions';
import selectors from 'src/modules/transaction/list/transactionListSelectors';
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
import TaxesAutocompleteFormItem from 'src/view/taxes/autocomplete/TaxesAutocompleteFormItem';

const schema = yup.object().shape({
  amountRange: yupFilterSchemas.decimalRange(
    i18n('entities.transaction.fields.amountRange'),
  ),
  email: yupFilterSchemas.relationToOne(
    i18n('entities.transaction.fields.email'),
  ),
  tax: yupFilterSchemas.relationToOne(
    i18n('entities.transaction.fields.tax'),
  ),
  currencySign: yupFilterSchemas.string(
    i18n('entities.transaction.fields.currencySign'),
  ),
  currencyValue: yupFilterSchemas.string(
    i18n('entities.transaction.fields.currencyValue'),
  ),
});

const emptyValues = {
  amountRange: [],
  email: null,
  tax: null,
  currencySign: null,
  currencyValue: null,
};

const previewRenders = {
  amountRange: {
    label: i18n('entities.transaction.fields.amountRange'),
    render: filterRenders.decimalRange(),
  },
  email: {
    label: i18n('entities.transaction.fields.email'),
    render: filterRenders.relationToOne(),
  },
  tax: {
    label: i18n('entities.transaction.fields.tax'),
    render: filterRenders.relationToOne(),
  },
  currencySign: {
    label: i18n('entities.transaction.fields.currencySign'),
    render: filterRenders.generic(),
  },
  currencyValue: {
    label: i18n(
      'entities.transaction.fields.currencyValue',
    ),
    render: filterRenders.generic(),
  },
};

function TransactionListFilter(props) {
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
                  <InputRangeFormItem
                    name="amountRange"
                    label={i18n(
                      'entities.transaction.fields.amountRange',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <UserAutocompleteFormItem
                    name="email"
                    label={i18n(
                      'entities.transaction.fields.email',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <TaxesAutocompleteFormItem
                    name="tax"
                    label={i18n(
                      'entities.transaction.fields.tax',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="currencySign"
                    label={i18n(
                      'entities.transaction.fields.currencySign',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="currencyValue"
                    label={i18n(
                      'entities.transaction.fields.currencyValue',
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

export default TransactionListFilter;
