import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import objectifEnumerators from 'src/modules/objectif/objectifEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import ElectionAutocompleteFormItem from 'src/view/election/autocomplete/ElectionAutocompleteFormItem';

const schema = yup.object().shape({
  election: yupFormSchemas.relationToOne(
    i18n('entities.objectif.fields.election'),
    {},
  ),
  number: yupFormSchemas.integer(
    i18n('entities.objectif.fields.number'),
    {},
  ),
  progression: yupFormSchemas.integer(
    i18n('entities.objectif.fields.progression'),
    {
      max: 100,
    },
  ),
  title: yupFormSchemas.string(
    i18n('entities.objectif.fields.title'),
    {
      required: true,
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.objectif.fields.description'),
    {
      required: true,
    },
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.objectif.fields.status'),
    {
      options: objectifEnumerators.status,
      required: true,
    },
  ),
  year: yupFormSchemas.integer(
    i18n('entities.objectif.fields.year'),
    {},
  ),
  startDate: yupFormSchemas.date(
    i18n('entities.objectif.fields.startDate'),
    {},
  ),
  endDate: yupFormSchemas.date(
    i18n('entities.objectif.fields.endDate'),
    {},
  ),
});

function ObjectifForm(props) {
  const { electionId } = props;
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      election: record.election,
      number: record.number,
      progression: record.progression,
      title: record.title,
      description: record.description,
      status: record.status,
      year: record.year,
      startDate: record.startDate
        ? moment(record.startDate, 'YYYY-MM-DD').toDate()
        : null,
      endDate: record.endDate
        ? moment(record.endDate, 'YYYY-MM-DD').toDate()
        : null,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    values.election = electionId;
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
              <InputNumberFormItem
                name="number"
                label={i18n(
                  'entities.objectif.fields.number',
                )}
                required={false}
                autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputNumberFormItem
                name="progression"
                label={i18n(
                  'entities.objectif.fields.progression',
                )}
                required={false}
                autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="title"
                label={i18n(
                  'entities.objectif.fields.title',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TextAreaFormItem
                name="description"
                label={i18n(
                  'entities.objectif.fields.description',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="status"
                label={i18n(
                  'entities.objectif.fields.status',
                )}
                options={objectifEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.objectif.enumerators.status.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputNumberFormItem
                name="year"
                label={i18n(
                  'entities.objectif.fields.year',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="startDate"
                label={i18n(
                  'entities.objectif.fields.startDate',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="endDate"
                label={i18n(
                  'entities.objectif.fields.endDate',
                )}
                required={false}
              />
            </div>

            {/* <div className="col-lg-7 col-md-8 col-12">
              <ElectionAutocompleteFormItem
                name="election"
                label={i18n(
                  'entities.objectif.fields.election',
                )}
                required={true}
                showCreate={!props.modal}
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

export default ObjectifForm;
