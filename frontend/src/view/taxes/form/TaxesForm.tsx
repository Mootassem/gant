import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import taxesEnumerators from 'src/modules/taxes/taxesEnumerators';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.taxes.fields.name'),
    {
      required: true,
    },
  ),
  value: yupFormSchemas.decimal(
    i18n('entities.taxes.fields.value'),
    {
      required: true,
    },
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.taxes.fields.status'),
    {
      options: taxesEnumerators.status,
    },
  ),
});

function TaxesForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      value: record.value,
      // status: record.status,
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
                label={i18n('entities.taxes.fields.name')}
                required={true}
                autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="value"
                label={i18n('entities.taxes.fields.value')}
                required={true}
                description="(Set 0 to make it free)"
              />
            </div>
            {/* <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="status"
                label={i18n('entities.taxes.fields.status')}
                options={taxesEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.taxes.enumerators.status.${value}`,
                    ),
                  }),
                )}
                required={true}
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

export default TaxesForm;
