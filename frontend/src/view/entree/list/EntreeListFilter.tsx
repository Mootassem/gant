import { i18n } from 'src/i18n';
import actions from 'src/modules/entree/list/entreeListActions';
import selectors from 'src/modules/entree/list/entreeListSelectors';
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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import entreeEnumerators from 'src/modules/entree/entreeEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  type: yupFilterSchemas.enumerator(
    i18n('entities.entree.fields.type'),
  ),
  sourceLink: yupFilterSchemas.string(
    i18n('entities.entree.fields.sourceLink'),
  ),
  amountRange: yupFilterSchemas.integerRange(
    i18n('entities.entree.fields.amountRange'),
  ),
  dateRange: yupFilterSchemas.dateRange(
    i18n('entities.entree.fields.dateRange'),
  ),
});

const emptyValues = {
  type: null,
  sourceLink: null,
  amountRange: [],
  dateRange: [],
};

const previewRenders = {
  type: {
    label: i18n('entities.entree.fields.type'),
    render: filterRenders.enumerator(
      'entities.entree.enumerators.type',
    ),
  },
  sourceLink: {
    label: i18n('entities.entree.fields.sourceLink'),
    render: filterRenders.generic(),
  },
  amountRange: {
    label: i18n('entities.entree.fields.amountRange'),
    render: filterRenders.range(),
  },
  dateRange: {
    label: i18n('entities.entree.fields.dateRange'),
    render: filterRenders.dateRange(),
  },
};

function EntreeListFilter(props) {
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
                  <SelectFormItem
                    name="type"
                    label={i18n(
                      'entities.entree.fields.type',
                    )}
                    options={entreeEnumerators.type.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.entree.enumerators.type.${value}`,
                        ),
                      }),
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="sourceLink"
                    label={i18n(
                      'entities.entree.fields.sourceLink',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputNumberRangeFormItem
                    name="amountRange"
                    label={i18n(
                      'entities.entree.fields.amountRange',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <DatePickerRangeFormItem
                    name="dateRange"
                    label={i18n(
                      'entities.entree.fields.dateRange',
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

export default EntreeListFilter;
