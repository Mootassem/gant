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
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import newsEnumerators from 'src/modules/news/newsEnumerators';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import NewsCategoryAutocompleteFormItem from 'src/view/newsCategory/autocomplete/NewsCategoryAutocompleteFormItem';
import TagAutocompleteFormItem from 'src/view/tag/autocomplete/TagAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.news.fields.name'),
    {},
  ),
  type: yupFormSchemas.enumerator(
    i18n('entities.news.fields.type'),
    {
      "options": newsEnumerators.type
    },
  ),
  shortDescription: yupFormSchemas.string(
    i18n('entities.news.fields.shortDescription'),
    {},
  ),
  description: yupFormSchemas.string(
    i18n('entities.news.fields.description'),
    {},
  ),
  image: yupFormSchemas.images(
    i18n('entities.news.fields.image'),
    {
      "max": 1
    },
  ),
  attachements: yupFormSchemas.files(
    i18n('entities.news.fields.attachements'),
    {},
  ),
  category: yupFormSchemas.relationToOne(
    i18n('entities.news.fields.category'),
    {},
  ),
  tags: yupFormSchemas.relationToMany(
    i18n('entities.news.fields.tags'),
    {},
  ),
  published: yupFormSchemas.boolean(
    i18n('entities.news.fields.published'),
    {},
  ),
});

function NewsForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      type: record.type,
      shortDescription: record.shortDescription,
      description: record.description,
      image: record.image || [],
      attachements: record.attachements || [],
      category: record.category,
      tags: record.tags || [],
      published: record.published,
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
                label={i18n('entities.news.fields.name')}
                required={false}
              autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <RadioFormItem
                name="type"
                label={i18n('entities.news.fields.type')}
                options={newsEnumerators.type.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.news.enumerators.type.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TextAreaFormItem
                name="shortDescription"
                label={i18n('entities.news.fields.shortDescription')}  
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TextAreaFormItem
                name="description"
                label={i18n('entities.news.fields.description')}  
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="image"
                label={i18n('entities.news.fields.image')}
                required={false}
                storage={Storage.values.newsImage}
                max={1}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <FilesFormItem
                name="attachements"
                label={i18n('entities.news.fields.attachements')}
                required={false}
                storage={Storage.values.newsAttachements}
                max={undefined}
                formats={undefined}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <NewsCategoryAutocompleteFormItem  
                name="category"
                label={i18n('entities.news.fields.category')}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TagAutocompleteFormItem  
                name="tags"
                label={i18n('entities.news.fields.tags')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SwitchFormItem
                name="published"
                label={i18n('entities.news.fields.published')}
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

export default NewsForm;
