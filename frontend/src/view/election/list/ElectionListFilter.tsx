import { i18n } from 'src/i18n';
import actions from 'src/modules/election/list/electionListActions';
import selectors from 'src/modules/election/list/electionListSelectors';
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
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.election.fields.name'),
  ),
  startDateRange: yupFilterSchemas.dateRange(
    i18n('entities.election.fields.startDateRange'),
  ),
  endDateRange: yupFilterSchemas.dateRange(
    i18n('entities.election.fields.endDateRange'),
  ),
});

const emptyValues = {
  name: null,
  startDateRange: [],
  endDateRange: [],
}

const previewRenders = {
  name: {
    label: i18n('entities.election.fields.name'),
    render: filterRenders.generic(),
  },
  startDateRange: {
    label: i18n('entities.election.fields.startDateRange'),
    render: filterRenders.dateRange(),
  },
  endDateRange: {
    label: i18n('entities.election.fields.endDateRange'),
    render: filterRenders.dateRange(),
  },
}

function ElectionListFilter(props) {
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
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
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
                      <InputFormItem
                        name="name"
                        label={i18n('entities.election.fields.name')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="startDateRange"
                        label={i18n('entities.election.fields.startDateRange')}    
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="endDateRange"
                        label={i18n('entities.election.fields.endDateRange')}    
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
                    />{' '}
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
                    />{' '}
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

export default ElectionListFilter;