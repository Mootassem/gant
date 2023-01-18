import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import AttributeOptionsAutocompleteFormItem from 'src/view/attributeOptions/autocomplete/AttributeOptionsAutocompleteFormItem';

const schema = yup.object().shape({
  optionsId: yupFormSchemas.relationToMany(
    i18n('entities.cart.fields.optionsId'),
    {},
  ),
  attribute: yupFormSchemas.string(
    i18n('entities.cart.fields.attribute'),
    {},
  ),
  name: yupFormSchemas.string(
    i18n('entities.cart.fields.name'),
    {},
  ),
  slug: yupFormSchemas.string(
    i18n('entities.cart.fields.slug'),
    {},
  ),
  qty: yupFormSchemas.decimal(
    i18n('entities.cart.fields.qty'),
    {},
  ),
  price: yupFormSchemas.decimal(
    i18n('entities.cart.fields.price'),
    {},
  ),
  mainPrice: yupFormSchemas.decimal(
    i18n('entities.cart.fields.mainPrice'),
    {},
  ),
  photo: yupFormSchemas.images(
    i18n('entities.cart.fields.photo'),
    {},
  ),
  itemType: yupFormSchemas.string(
    i18n('entities.cart.fields.itemType'),
    {},
  ),
  itemLN: yupFormSchemas.string(
    i18n('entities.cart.fields.itemLN'),
    {},
  ),
  itemLK: yupFormSchemas.string(
    i18n('entities.cart.fields.itemLK'),
    {},
  ),
});

function CartForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      optionsId: record.optionsId || [],
      attribute: record.attribute,
      name: record.name,
      slug: record.slug,
      qty: record.qty,
      price: record.price,
      mainPrice: record.mainPrice,
      photo: record.photo || [],
      itemType: record.itemType,
      itemLN: record.itemLN,
      itemLK: record.itemLK,
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
              <AttributeOptionsAutocompleteFormItem
                name="optionsId"
                label={i18n(
                  'entities.cart.fields.optionsId',
                )}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="attribute"
                label={i18n(
                  'entities.cart.fields.attribute',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="name"
                label={i18n('entities.cart.fields.name')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="slug"
                label={i18n('entities.cart.fields.slug')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="qty"
                label={i18n('entities.cart.fields.qty')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="price"
                label={i18n('entities.cart.fields.price')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="mainPrice"
                label={i18n(
                  'entities.cart.fields.mainPrice',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="photo"
                label={i18n('entities.cart.fields.photo')}
                required={false}
                storage={Storage.values.cartPhoto}
                max={undefined}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="itemType"
                label={i18n(
                  'entities.cart.fields.itemType',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="itemLN"
                label={i18n('entities.cart.fields.itemLN')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="itemLK"
                label={i18n('entities.cart.fields.itemLK')}
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

export default CartForm;
