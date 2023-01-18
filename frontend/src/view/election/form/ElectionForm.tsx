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
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import AssociationAutocompleteFormItem from 'src/view/association/autocomplete/AssociationAutocompleteFormItem';
// import ObjectifAutocompleteFormItem from 'src/view/objectif/autocomplete/ObjectifAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.election.fields.name'),
    {
      required: true,
    },
  ),
  members: yupFormSchemas.relationToMany(
    i18n('entities.election.fields.members'),
    {
      required: true,
    },
  ),
  startDate: yupFormSchemas.date(
    i18n('entities.election.fields.startDate'),
    {
      required: true,
    },
  ),
  endDate: yupFormSchemas.date(
    i18n('entities.election.fields.endDate'),
    {
      required: true,
    },
  ),
  pv: yupFormSchemas.files(
    i18n('entities.election.fields.pv'),
    {},
  ),
  // association: yupFormSchemas.relationToOne(
  //   i18n('entities.election.fields.association'),
  //   {},
  // ),
  // objetifs: yupFormSchemas.relationToMany(
  //   i18n('entities.election.fields.objectifs'),
  //   {
  //     required: true,
  //   },
  // ),
});

function ElectionForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};
    return {
      name: record.name,
      members: record.members || [],
      startDate: record.startDate
        ? moment(record.startDate, 'YYYY-MM-DD').toDate()
        : null,
      endDate: record.endDate
        ? moment(record.endDate, 'YYYY-MM-DD').toDate()
        : null,
      pv: record.pv || [],
      objetifs: record.objetifs || [],
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
                  'entities.election.fields.name',
                )}
                required={true}
                autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <UserAutocompleteFormItem
                name="members"
                label={i18n(
                  'entities.election.fields.members',
                )}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="startDate"
                label={i18n(
                  'entities.election.fields.startDate',
                )}
                required={true}
              />
            </div>

            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="endDate"
                label={i18n(
                  'entities.election.fields.endDate',
                )}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <FilesFormItem
                name="pv"
                label={i18n('entities.election.fields.pv')}
                required={false}
                storage={Storage.values.electionPv}
                max={undefined}
                formats={undefined}
              />
            </div>
            {/* <div className="col-lg-7 col-md-8 col-12">
              <AssociationAutocompleteFormItem
                name="association"
                label={i18n(
                  'entities.election.fields.association',
                )}
                required={true}
                showCreate={!props.modal}
              />
            </div> */}
            {/* <div className="col-lg-7 col-md-8 col-12">
              <ObjectifAutocompleteFormItem
                name="objetifs"
                label={i18n(
                  'entities.election.fields.objectifs',
                )}
                required={true}
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
              />{' '}
              {i18n('common.save')}
            </button>

            <button
              className="btn btn-light"
              type="button"
              disabled={props.saveLoading}
              onClick={onReset}
            >
              <i className="fas fa-undo"></i>{' '}
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                className="btn btn-light"
                type="button"
                disabled={props.saveLoading}
                onClick={() => props.onCancel()}
              >
                <i className="fas fa-times"></i>{' '}
                {i18n('common.cancel')}
              </button>
            ) : null}
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default ElectionForm;
