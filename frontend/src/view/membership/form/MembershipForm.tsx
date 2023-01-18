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
import membershipEnumerators from 'src/modules/membership/membershipEnumerators';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import FormuleAutocompleteFormItem from 'src/view/formule/autocomplete/FormuleAutocompleteFormItem';
import CampaignAutocompleteFormItem from 'src/view/campaign/autocomplete/CampaignAutocompleteFormItem';

const schema = yup.object().shape({
  status: yupFormSchemas.enumerator(
    i18n('entities.membership.fields.status'),
    {
      options: membershipEnumerators.status,
    },
  ),
  paymentMethod: yupFormSchemas.enumerator(
    i18n('entities.membership.fields.paymentMethod'),
    {
      options: membershipEnumerators.paymentMethod,
    },
  ),
  formule: yupFormSchemas.relationToOne(
    i18n('entities.membership.fields.formule'),
    {},
  ),
  attachements: yupFormSchemas.files(
    i18n('entities.membership.fields.attachements'),
    {},
  ),
  user: yupFormSchemas.relationToOne(
    i18n('entities.membership.fields.member'),
    {},
  ),
  campaign: yupFormSchemas.relationToOne(
    i18n('entities.membership.fields.campaign'),
    {},
  ),
  amount: yupFormSchemas.decimal(
    i18n('entities.membership.fields.amount'),
    {},
  ),
});

function MembershipForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      status: record.status,
      paymentMethod: record.paymentMethod,
      formule: record.formule,
      attachements: record.attachements || [],
      user: record.user,
      campaign: record.campaign,
      amount: record.amount,
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
              <SelectFormItem
                name="status"
                label={i18n(
                  'entities.membership.fields.status',
                )}
                options={membershipEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.membership.enumerators.status.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="paymentMethod"
                label={i18n(
                  'entities.membership.fields.paymentMethod',
                )}
                options={membershipEnumerators.paymentMethod.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.membership.enumerators.paymentMethod.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div
              className="col-lg-7 col-md-8 col-12"
              style={{
                display: props.formuleId ? 'none' : 'block',
              }}
            >
              <FormuleAutocompleteFormItem
                name="formule"
                label={i18n(
                  'entities.membership.fields.formule',
                )}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <FilesFormItem
                name="attachements"
                label={i18n(
                  'entities.membership.fields.attachements',
                )}
                required={false}
                storage={
                  Storage.values.membershipAttachements
                }
                max={undefined}
                formats={undefined}
              />
            </div>
            <div
              className="col-lg-7 col-md-8 col-12"
              style={{
                display: props.userId ? 'none' : 'block',
              }}
            >
              <UserAutocompleteFormItem
                name="user"
                label={i18n(
                  'entities.membership.fields.member',
                )}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div
              className="col-lg-7 col-md-8 col-12"
              style={{
                display: props.campaignId
                  ? 'none'
                  : 'block',
              }}
            >
              <CampaignAutocompleteFormItem
                name="campaign"
                label={i18n(
                  'entities.membership.fields.campaign',
                )}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="amount"
                label={i18n(
                  'entities.membership.fields.amount',
                )}
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

export default MembershipForm;
