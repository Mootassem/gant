import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import TaxesAutocompleteFormItem from 'src/view/taxes/autocomplete/TaxesAutocompleteFormItem';
import OrderAutocompleteFormItem from 'src/view/order/autocomplete/OrderAutocompleteFormItem';

const schema = yup.object().shape({
  amount: yupFormSchemas.decimal(
    i18n('entities.transaction.fields.amount'),
    {},
  ),
  email: yupFormSchemas.relationToOne(
    i18n('entities.transaction.fields.email'),
    {},
  ),
  tax: yupFormSchemas.relationToOne(
    i18n('entities.transaction.fields.tax'),
    {},
  ),
  currencySign: yupFormSchemas.string(
    i18n('entities.transaction.fields.currencySign'),
    {},
  ),
  currencyValue: yupFormSchemas.string(
    i18n('entities.transaction.fields.currencyValue'),
    {},
  ),
  orderId: yupFormSchemas.relationToMany(
    i18n('entities.transaction.fields.orderId'),
    {},
  ),
});

function TransactionForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      amount: record.amount,
      email: record.email,
      tax: record.tax,
      currencySign: record.currencySign,
      currencyValue: record.currencyValue,
      orderId: record.orderId || [],
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="amount"
                label={i18n(
                  'entities.transaction.fields.amount',
                )}
                required={false}
                autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <UserAutocompleteFormItem
                name="email"
                label={i18n(
                  'entities.transaction.fields.email',
                )}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TaxesAutocompleteFormItem
                name="tax"
                label={i18n(
                  'entities.transaction.fields.tax',
                )}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="currencySign"
                label={i18n(
                  'entities.transaction.fields.currencySign',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="currencyValue"
                label={i18n(
                  'entities.transaction.fields.currencyValue',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <OrderAutocompleteFormItem
                name="orderId"
                label={i18n(
                  'entities.transaction.fields.orderId',
                )}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
          </div>

          <div className="form-buttons">
            <button
              className="btn btn-primary"
              disabled={props.saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              <ButtonIcon
                loading={props.saveLoading}
                iconClass="far fa-save"
              />
              &nbsp;
              {i18n('common.save')}
            </button>

            <button
              className="btn btn-light"
              type="button"
              disabled={props.saveLoading}
              onClick={onReset}
            >
              <i className="fas fa-undo"></i>
              &nbsp;
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                className="btn btn-light"
                type="button"
                disabled={props.saveLoading}
                onClick={() => props.onCancel()}
              >
                <i className="fas fa-times"></i>&nbsp;
                {i18n('common.cancel')}
              </button>
            ) : null}
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default TransactionForm;
