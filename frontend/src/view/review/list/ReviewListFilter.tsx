import { i18n } from 'src/i18n';
import actions from 'src/modules/review/list/reviewListActions';
import selectors from 'src/modules/review/list/reviewListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FilterWrapper from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import reviewEnumerators from 'src/modules/review/reviewEnumerators';
import ProductAutocompleteFormItem from 'src/view/product/autocomplete/ProductAutocompleteFormItem';

const schema = yup.object().shape({
  ratingRange: yupFilterSchemas.integerRange(
    i18n('entities.review.fields.ratingRange'),
  ),
  status: yupFilterSchemas.enumerator(
    i18n('entities.review.fields.status'),
  ),
  subject: yupFilterSchemas.string(
    i18n('entities.review.fields.subject'),
  ),
  item: yupFilterSchemas.relationToOne(
    i18n('entities.review.fields.item'),
  ),
  user: yupFilterSchemas.relationToOne(
    i18n('entities.review.fields.user'),
  ),
});

const emptyValues = {
  ratingRange: [],
  status: null,
  subject: null,
  item: null,
  user: null,
};

const previewRenders = {
  ratingRange: {
    label: i18n('entities.review.fields.ratingRange'),
    render: filterRenders.range(),
  },
  status: {
    label: i18n('entities.review.fields.status'),
    render: filterRenders.enumerator(
      'entities.review.enumerators.status',
    ),
  },
  subject: {
    label: i18n('entities.review.fields.subject'),
    render: filterRenders.generic(),
  },
  item: {
    label: i18n('entities.review.fields.item'),
    render: filterRenders.relationToOne(),
  },
  user: {
    label: i18n('entities.review.fields.user'),
    render: filterRenders.relationToOne(),
  },
};

function ReviewListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(
      actions.doFetch(
        schema.cast(initialValues),
        rawFilter,
      ),
    );
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  return (
    <FilterWrapper>
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className="container">
        <div
          className={`collapse ${expanded ? 'show' : ''}`}
        >
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-6 col-12">
                  <InputNumberRangeFormItem
                    name="ratingRange"
                    label={i18n(
                      'entities.review.fields.ratingRange',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
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
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="subject"
                    label={i18n(
                      'entities.review.fields.subject',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <ProductAutocompleteFormItem
                    name="item"
                    label={i18n(
                      'entities.review.fields.item',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <UserAutocompleteFormItem
                    name="user"
                    label={i18n(
                      'entities.review.fields.user',
                    )}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 filter-buttons">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-search"
                    />
                    {i18n('common.search')}
                  </button>
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={onReset}
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-undo"
                    />
                    {i18n('common.reset')}
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </FilterWrapper>
  );
}

export default ReviewListFilter;
