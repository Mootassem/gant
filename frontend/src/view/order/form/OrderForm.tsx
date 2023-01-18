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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import orderEnumerators from 'src/modules/order/orderEnumerators';
import TaxesAutocompleteFormItem from 'src/view/taxes/autocomplete/TaxesAutocompleteFormItem';
import TransactionAutocompleteFormItem from 'src/view/transaction/autocomplete/TransactionAutocompleteFormItem';

const schema = yup.object().shape({
  userId: yupFormSchemas.relationToOne(
    i18n('entities.order.fields.userId'),
    {},
  ),
  cart: yupFormSchemas.string(
    i18n('entities.order.fields.cart'),
    {},
  ),
  shipping: yupFormSchemas.string(
    i18n('entities.order.fields.shipping'),
    {},
  ),
  discount: yupFormSchemas.decimal(
    i18n('entities.order.fields.discount'),
    {},
  ),
  paymentMethod: yupFormSchemas.string(
    i18n('entities.order.fields.paymentMethod'),
    {},
  ),
  taxe: yupFormSchemas.relationToOne(
    i18n('entities.order.fields.taxe'),
    {},
  ),
  transactionNumber: yupFormSchemas.relationToMany(
    i18n('entities.order.fields.transactionNumber'),
    {},
  ),
  orderStatus: yupFormSchemas.enumerator(
    i18n('entities.order.fields.orderStatus'),
    {
      options: orderEnumerators.orderStatus,
    },
  ),
});

function OrderForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      userId: record.userId,
      cart: record.cart,
      shipping: record.shipping,
      discount: record.discount,
      paymentMethod: record.paymentMethod,
      taxe: record.taxe,
      transactionNumber: record.transactionNumber || [],
      orderStatus: record.orderStatus,
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
              <UserAutocompleteFormItem
                name="userId"
                label={i18n('entities.order.fields.userId')}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="cart"
                label={i18n('entities.order.fields.cart')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="shipping"
                label={i18n(
                  'entities.order.fields.shipping',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="discount"
                label={i18n(
                  'entities.order.fields.discount',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="paymentMethod"
                label={i18n(
                  'entities.order.fields.paymentMethod',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TaxesAutocompleteFormItem
                name="taxe"
                label={i18n('entities.order.fields.taxe')}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TransactionAutocompleteFormItem
                name="transactionNumber"
                label={i18n(
                  'entities.order.fields.transactionNumber',
                )}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
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
                required={false}
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

export default OrderForm;
