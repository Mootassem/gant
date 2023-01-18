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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import reviewEnumerators from 'src/modules/review/reviewEnumerators';
import ProductAutocompleteFormItem from 'src/view/product/autocomplete/ProductAutocompleteFormItem';

const schema = yup.object().shape({
  review: yupFormSchemas.string(
    i18n('entities.review.fields.review'),
    {
      required: true,
    },
  ),
  rating: yupFormSchemas.integer(
    i18n('entities.review.fields.rating'),
    {
      required: true,
    },
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.review.fields.status'),
    {
      options: reviewEnumerators.status,
    },
  ),
  subject: yupFormSchemas.string(
    i18n('entities.review.fields.subject'),
    {
      required: true,
    },
  ),
  item: yupFormSchemas.relationToOne(
    i18n('entities.review.fields.item'),
    {
      required: true,
    },
  ),
  user: yupFormSchemas.relationToOne(
    i18n('entities.review.fields.user'),
    {
      required: true,
    },
  ),
});

function ReviewForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      review: record.review,
      rating: record.rating,
      status: record.status,
      subject: record.subject,
      item: record.item,
      user: record.user,
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
                name="review"
                label={i18n(
                  'entities.review.fields.review',
                )}
                required={true}
                autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputNumberFormItem
                name="rating"
                label={i18n(
                  'entities.review.fields.rating',
                )}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="status"
                label={i18n(
                  'entities.review.fields.status',
                )}
                options={reviewEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.review.enumerators.status.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="subject"
                label={i18n(
                  'entities.review.fields.subject',
                )}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ProductAutocompleteFormItem
                name="item"
                label={i18n('entities.review.fields.item')}
                required={true}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <UserAutocompleteFormItem
                name="user"
                label={i18n('entities.review.fields.user')}
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

export default ReviewForm;
