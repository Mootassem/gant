import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import ProductAutocompleteFormItem from 'src/view/product/autocomplete/ProductAutocompleteFormItem';
import AttributesAutocompleteFormItem from 'src/view/attributes/autocomplete/AttributesAutocompleteFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.attributeOptions.fields.name'),
    { required: true },
  ),
  price: yupFormSchemas.decimal(
    i18n('entities.attributeOptions.fields.price'),
    { required: true },
  ),
  stock: yupFormSchemas.integer(
    i18n('entities.attributeOptions.fields.stock'),
    { required: true },
  ),
  attributeId: yupFormSchemas.relationToOne(
    i18n('entities.attributeOptions.fields.attributeId'),
    { required: true },
  ),
  itemId: yupFormSchemas.relationToOne(
    i18n('entities.attributes.fields.itemId'),
    {},
  ),
});

function AttributeOptionsForm(props) {
  const { itemId } = props;
  const [initialValues] = useState(() => {
    const record = props.record || {};
    return {
      name: record.name,
      price: record.price,
      stock: record.stock,
      attributeId: record.attributeId,
      itemId: itemId || record.itemId,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    if (!props.record?.id) {
      let data = { ...values, itemId };
      props.onSubmit(props.record?.id, data);
    } else {
      props.onSubmit(props.record?.id, values);
    }
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
              <AttributesAutocompleteFormItem
                name="attributeId"
                label={i18n(
                  'entities.attributeOptions.fields.attributeId',
                )}
                required={true}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="name"
                label={i18n(
                  'entities.attributeOptions.fields.name',
                )}
                required={true}
                autoFocus
              />
            </div>
            {props.record?.id && (
              <div className="col-lg-7 col-md-8 col-12">
                <ProductAutocompleteFormItem
                  name="itemId"
                  label={i18n(
                    'entities.attributes.fields.itemId',
                  )}
                  required={false}
                  showCreate={!props.modal}
                />
              </div>
            )}
            <div className="col-lg-7 col-md-8 col-12">
              <InputNumberFormItem
                name="stock"
                label={i18n(
                  'entities.attributeOptions.fields.stock',
                )}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="price"
                label={i18n(
                  'entities.attributeOptions.fields.price',
                )}
                required={true}
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

export default AttributeOptionsForm;
