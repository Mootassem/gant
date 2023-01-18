import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import CategoryAutocompleteFormItem from 'src/view/category/autocomplete/CategoryAutocompleteFormItem';
import SubcategoriesAutocompleteFormItem from 'src/view/subcategories/autocomplete/SubcategoriesAutocompleteFormItem';
import subcategoriesEnumerators from 'src/modules/subcategories/subcategoriesEnumerators';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.chieldCategories.fields.name'),
    {},
  ),
  slug: yupFormSchemas.string(
    i18n('entities.chieldCategories.fields.slug'),
    {},
  ),
  categoryId: yupFormSchemas.relationToOne(
    i18n('entities.chieldCategories.fields.categoryId'),
    {},
  ),
  subcategoryId: yupFormSchemas.relationToOne(
    i18n('entities.chieldCategories.fields.subcategoryId'),
    {
      required: true,
    },
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.subcategories.fields.status'),
    {
      options: subcategoriesEnumerators.status,
    },
  ),
});

function ChieldCategoriesForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      slug: record.slug,
      categoryId: record.categoryId || [],
      subcategoryId: record.subcategoryId || [],
      status: record.status,
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
              <CategoryAutocompleteFormItem
                name="categoryId"
                label={i18n(
                  'entities.chieldCategories.fields.categoryId',
                )}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SubcategoriesAutocompleteFormItem
                name="subcategoryId"
                label={i18n(
                  'entities.chieldCategories.fields.subcategoryId',
                )}
                placeholder={i18n(
                  'entities.chieldCategories.placeholders.subcategoryId',
                )}
                required={true}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="name"
                label={i18n(
                  'entities.chieldCategories.fields.name',
                )}
                required={false}
                autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="slug"
                label={i18n(
                  'entities.chieldCategories.fields.slug',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="status"
                label={i18n(
                  'entities.subcategories.fields.status',
                )}
                options={subcategoriesEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.chieldCategories.enumerators.status.${value}`,
                    ),
                  }),
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

export default ChieldCategoriesForm;
