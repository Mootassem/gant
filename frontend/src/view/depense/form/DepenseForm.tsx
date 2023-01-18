import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import depenseEnumerators from 'src/modules/depense/depenseEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import ChargeAutocompleteFormItem from 'src/view/charge/autocomplete/ChargeAutocompleteFormItem';
import TypeDepenseAutocompleteFormItem from 'src/view/typeDepense/autocomplete/TypeDepenseAutocompleteFormItem';

const schema = yup.object().shape({
  facture: yupFormSchemas.boolean(
    i18n('entities.depense.fields.facture'),
    {},
  ),
  // charge: yupFormSchemas.relationToMany(
  //   i18n('entities.depense.fields.charge'),
  //   {},
  // ),
  amount: yupFormSchemas.integer(
    i18n('entities.depense.fields.amount'),
    {},
  ),
  depenseType: yupFormSchemas.relationToOne(
    i18n('entities.projet.fields.typeProjet'),
    {
      required: true,
    },
  ),
  date: yupFormSchemas.date(
    i18n('entities.depense.fields.date'),
    {},
  ),
});

function DepenseForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      facture: record.facture,
      // charge: record.charge || [],
      depenseType: record.depenseType,
      amount: record.amount,
      type: record.type,
      date: record.date
        ? moment(record.date, 'YYYY-MM-DD').toDate()
        : null,
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
              <SwitchFormItem
                name="facture"
                label={i18n(
                  'entities.depense.fields.facture',
                )}
              />
            </div>
            {/* <div className="col-lg-7 col-md-8 col-12">
              <ChargeAutocompleteFormItem  
                name="charge"
                label={i18n('entities.depense.fields.charge')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div> */}
            <div className="col-lg-7 col-md-8 col-12">
              <InputNumberFormItem
                name="amount"
                label={i18n(
                  'entities.depense.fields.amount',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TypeDepenseAutocompleteFormItem
                name="depenseType"
                label={i18n(
                  'entities.typeDepense.fields.nom',
                )}
                placeholder={i18n(
                  'entities.typeDepense.fields.nom',
                )}
                required={true}
                showCreate={!props.modal}
                election={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="date"
                label={i18n('entities.depense.fields.date')}
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
              {i18n('common.save')}
            </button>

            <button
              className="btn btn-light"
              type="button"
              disabled={props.saveLoading}
              onClick={onReset}
            >
              <i className="fas fa-undo"></i>
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                className="btn btn-light"
                type="button"
                disabled={props.saveLoading}
                onClick={() => props.onCancel()}
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

export default DepenseForm;
