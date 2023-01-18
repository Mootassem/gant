import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import campaignItemsEnumerators from 'src/modules/campaignItems/campaignItemsEnumerators';
import ProductAutocompleteFormItem from 'src/view/product/autocomplete/ProductAutocompleteFormItem';

const schema = yup.object().shape({
  status: yupFormSchemas.enumerator(
    i18n('entities.campaignItems.fields.status'),
    {
      options: campaignItemsEnumerators.status,
    },
  ),
  isFeature: yupFormSchemas.enumerator(
    i18n('entities.campaignItems.fields.isFeature'),
    {
      options: campaignItemsEnumerators.isFeature,
    },
  ),
  itemId: yupFormSchemas.relationToOne(
    i18n('entities.campaignItems.fields.itemId'),
    {
      required: true,
    },
  ),
});

function CampaignItemsForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      status: record.status,
      isFeature: record.isFeature,
      itemId: record.itemId,
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
                  'entities.campaignItems.fields.status',
                )}
                options={campaignItemsEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.campaignItems.enumerators.status.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="isFeature"
                label={i18n(
                  'entities.campaignItems.fields.isFeature',
                )}
                options={campaignItemsEnumerators.isFeature.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.campaignItems.enumerators.isFeature.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ProductAutocompleteFormItem
                name="itemId"
                label={i18n(
                  'entities.campaignItems.fields.itemId',
                )}
                required={true}
                showCreate={!props.modal}
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

export default CampaignItemsForm;
