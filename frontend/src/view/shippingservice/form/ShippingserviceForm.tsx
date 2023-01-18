import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import shippingserviceEnumerators from 'src/modules/shippingservice/shippingserviceEnumerators';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.shippingservice.fields.name'),
    {
      required: true,
    },
  ),
  price: yupFormSchemas.decimal(
    i18n('entities.shippingservice.fields.price'),
    {
      required: true,
    },
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.shippingservice.fields.status'),
    {
      options: shippingserviceEnumerators.status,
    },
  ),
  minimumPrice: yupFormSchemas.decimal(
    i18n('entities.shippingservice.fields.minimumPrice'),
    {},
  ),
  isCondition: yupFormSchemas.boolean(
    i18n('entities.shippingservice.fields.isCondition'),
    {},
  ),
});

function ShippingserviceForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      price: record.price,
      status: record.status,
      minimumPrice: record.minimumPrice,
      isCondition: record.isCondition,
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
                name="name"
                label={i18n(
                  'entities.shippingservice.fields.name',
                )}
                required={true}
                autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="price"
                label={i18n(
                  'entities.shippingservice.fields.price',
                )}
                required={true}
              />
            </div>
            {/* <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="status"
                label={i18n(
                  'entities.shippingservice.fields.status',
                )}
                options={shippingserviceEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.shippingservice.enumerators.status.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div> */}
            {/* <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="minimumPrice"
                label={i18n(
                  'entities.shippingservice.fields.minimumPrice',
                )}
                required={false}
              />
            </div> */}
            {/* <div className="col-lg-7 col-md-8 col-12">
              <SwitchFormItem
                name="isCondition"
                label={i18n(
                  'entities.shippingservice.fields.isCondition',
                )}
              />
            </div> */}
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

export default ShippingserviceForm;
