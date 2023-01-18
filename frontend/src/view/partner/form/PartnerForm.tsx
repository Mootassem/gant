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
import partnerEnumerators from 'src/modules/partner/partnerEnumerators';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import GroupAutocompleteFormItem from 'src/view/group/autocomplete/GroupAutocompleteFormItem';

const schema = yup.object().shape({
  acronym: yupFormSchemas.string(
    i18n('entities.partner.fields.acronym'),
    {},
  ),
  name: yupFormSchemas.string(
    i18n('entities.partner.fields.name'),
    {},
  ),
  email: yupFormSchemas.string(
    i18n('entities.partner.fields.email'),
    {},
  ),
  logo: yupFormSchemas.images(
    i18n('entities.partner.fields.logo'),
    {
      max: 1,
    },
  ),
  postalAddress: yupFormSchemas.string(
    i18n('entities.partner.fields.postalAddress'),
    {},
  ),
  postalCode: yupFormSchemas.string(
    i18n('entities.partner.fields.postalCode'),
    {},
  ),
  city: yupFormSchemas.string(
    i18n('entities.partner.fields.city'),
    {},
  ),
  country: yupFormSchemas.string(
    i18n('entities.partner.fields.country'),
    {},
  ),
  members: yupFormSchemas.relationToMany(
    i18n('entities.partner.fields.members'),
    {},
  ),
  type: yupFormSchemas.enumerator(
    i18n('entities.partner.fields.type'),
    {
      options: partnerEnumerators.type,
    },
  ),
  groupes: yupFormSchemas.relationToMany(
    i18n('entities.partner.fields.group'),
    {},
  ),
});

function PartnerForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      acronym: record.acronym,
      name: record.name,
      email: record.email,
      logo: record.logo || [],
      postalAddress: record.postalAddress,
      postalCode: record.postalCode,
      city: record.city,
      country: record.country,
      members: record.members || [],
      type: record.type,
      groupes: record.groupes || [],
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
                name="acronym"
                label={i18n(
                  'entities.partner.fields.acronym',
                )}
                required={false}
                autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="name"
                label={i18n('entities.partner.fields.name')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="email"
                label={i18n(
                  'entities.partner.fields.email',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="logo"
                label={i18n('entities.partner.fields.logo')}
                required={false}
                storage={Storage.values.partnerLogo}
                max={1}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="postalAddress"
                label={i18n(
                  'entities.partner.fields.postalAddress',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="postalCode"
                label={i18n(
                  'entities.partner.fields.postalCode',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="city"
                label={i18n('entities.partner.fields.city')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="country"
                label={i18n(
                  'entities.partner.fields.country',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <UserAutocompleteFormItem
                name="members"
                label={i18n(
                  'entities.partner.fields.members',
                )}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="type"
                label={i18n('entities.partner.fields.type')}
                options={partnerEnumerators.type.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.partner.enumerators.type.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            {/* <div className="col-lg-7 col-md-8 col-12">
              <GroupAutocompleteFormItem
                name="group"
                label={i18n(
                  'entities.partner.fields.group',
                )}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
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

export default PartnerForm;
