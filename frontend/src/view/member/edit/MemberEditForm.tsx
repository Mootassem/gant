import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/user/form/userFormActions';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import userEnumerators from 'src/modules/user/userEnumerators';
import { yupResolver } from '@hookform/resolvers/yup';
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import moment from 'moment';

const schema = yup.object().shape({
  firstName: yupFormSchemas.string(
    i18n('user.fields.firstName'),
    {
      max: 80,
    },
  ),
  lastName: yupFormSchemas.string(
    i18n('user.fields.lastName'),
    {
      max: 175,
    },
  ),
  phoneNumber: yupFormSchemas.string(
    i18n('user.fields.phoneNumber'),
    {
      matches: /^[0-9]/,
      max: 24,
    },
  ),
  birthdate: yupFormSchemas.date(
    i18n('user.fields.birthdate'),
    {},
  ),
  genre: yupFormSchemas.enumerator(
    i18n('entities.user.fields.genre'),
    {
      options: userEnumerators.genre,
    },
  ),
  address: yupFormSchemas.string(
    i18n('user.fields.address'),
    {},
  ),
  roles: yupFormSchemas.stringArray(
    i18n('user.fields.roles'),
  ),
});

function MemberEditForm(props) {
  const dispatch = useDispatch();

  const [initialValues] = useState(() => {
    const record = props.user || {};

    return {
      roles: record.roles,
      phoneNumber: record.phoneNumber,
      address: record.address,
      firstName: record.firstName,
      lastName: record.lastName,
      genre: record.genre,
      birthDate: record.birthDate
        ? moment(record.birthDate).toDate()
        : null,
    };
  });
  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    const data = {
      id: props.user.id,
      ...values,
    };
    delete data.email;
    dispatch(actions.doUpdate(data));
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
              <div className="form-group">
                <label
                  className="col-form-label"
                  htmlFor="email"
                >
                  {i18n('user.fields.email')}
                </label>
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="email"
                  name="email"
                  value={props.user.email}
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="firstName"
                label={i18n('user.fields.firstName')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="lastName"
                label={i18n('user.fields.lastName')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="phoneNumber"
                label={i18n('user.fields.phoneNumber')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="address"
                label={i18n('user.fields.address')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="birthDate"
                label={i18n('user.fields.birthDate')}
                required={false}
                showYearDropdown={true}
                showMonthDropdown={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <RadioFormItem
                name="genre"
                label={i18n('user.fields.genre')}
                options={userEnumerators.genre.map(
                  (value) => ({
                    value,
                    label: i18n(`user.genre.${value}`),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="roles"
                label={i18n('user.fields.roles')}
                options={userEnumerators.roles.map(
                  (value) => ({
                    value,
                    label: i18n(`roles.${value}.label`),
                  }),
                )}
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
              disabled={props.saveLoading}
              onClick={onReset}
              type="button"
            >
              <i className="fas fa-undo"></i>
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                className="btn btn-light"
                disabled={props.saveLoading}
                onClick={() => props.onCancel()}
                type="button"
              >
                <i className="fas fa-times"></i>
                {i18n('common.cancel')}
              </button>
            ) : null}
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default MemberEditForm;
