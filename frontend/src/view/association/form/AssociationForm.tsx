import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import ElectionAutocompleteFormItem from 'src/view/election/autocomplete/ElectionAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.association.fields.name'),
    {
      required: true,
    },
  ),
  logo: yupFormSchemas.images(
    i18n('entities.association.fields.logo'),
    {
      max: 1,
    },
  ),
  email: yupFormSchemas.string(
    i18n('entities.association.fields.email'),
    {
      required: true,
    },
  ),
  phone: yupFormSchemas.string(
    i18n('entities.association.fields.phone'),
    {
      required: true,
    },
  ),
  postalCode: yupFormSchemas.integer(
    i18n('entities.association.fields.postalCode'),
    {
      required: true,
    },
  ),
  city: yupFormSchemas.string(
    i18n('entities.association.fields.city'),
    {
      required: true,
    },
  ),
  country: yupFormSchemas.string(
    i18n('entities.association.fields.country'),
    {
      required: true,
    },
  ),
  admins: yupFormSchemas.relationToMany(
    i18n('entities.association.fields.admins'),
    {
      required: true,
    },
  ),
});

function AssociationForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};
    return {
      name: record.name,
      logo: record.logo || [],
      email: record.email,
      phone: record.phone,
      postalCode: record.postalCode,
      city: record.city,
      country: record.country,
      admins: record.admins || [],
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
                  'entities.association.fields.name',
                )}
                required={true}
                autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="logo"
                label={i18n(
                  'entities.association.fields.logo',
                )}
                required={false}
                storage={Storage.values.associationLogo}
                max={1}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="email"
                label={i18n(
                  'entities.association.fields.email',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="phone"
                label={i18n(
                  'entities.association.fields.phone',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputNumberFormItem
                name="postalCode"
                label={i18n(
                  'entities.association.fields.postalCode',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="city"
                label={i18n(
                  'entities.association.fields.city',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="country"
                label={i18n(
                  'entities.association.fields.country',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <UserAutocompleteFormItem
                name="admins"
                label={i18n(
                  'entities.association.fields.admins',
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

export default AssociationForm;
