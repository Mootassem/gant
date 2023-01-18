import { i18n } from 'src/i18n';
import actions from 'src/modules/campaign/list/campaignListActions';
import selectors from 'src/modules/campaign/list/campaignListSelectors';
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
import campaignEnumerators from 'src/modules/campaign/campaignEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.campaign.fields.name'),
  ),
  status: yupFilterSchemas.enumerator(
    i18n('entities.campaign.fields.status'),
  ),
  yearRange: yupFilterSchemas.integerRange(
    i18n('entities.campaign.fields.yearRange'),
  ),
  startDateRange: yupFilterSchemas.dateRange(
    i18n('entities.campaign.fields.startDateRange'),
  ),
  endDateRange: yupFilterSchemas.dateRange(
    i18n('entities.campaign.fields.endDateRange'),
  ),
});

const emptyValues = {
  name: null,
  status: null,
  yearRange: [],
  startDateRange: [],
  endDateRange: [],
};

const previewRenders = {
  name: {
    label: i18n('entities.campaign.fields.name'),
    render: filterRenders.generic(),
  },
  status: {
    label: i18n('entities.campaign.fields.status'),
    render: filterRenders.enumerator(
      'entities.campaign.enumerators.status',
    ),
  },
  yearRange: {
    label: i18n('entities.campaign.fields.yearRange'),
    render: filterRenders.range(),
  },
  startDateRange: {
    label: i18n('entities.campaign.fields.startDateRange'),
    render: filterRenders.dateRange(),
  },
  endDateRange: {
    label: i18n('entities.campaign.fields.endDateRange'),
    render: filterRenders.dateRange(),
  },
};

function CampaignListFilter(props) {
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
                  <InputFormItem
                    name="name"
                    label={i18n(
                      'entities.campaign.fields.name',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <SelectFormItem
                    name="status"
                    label={i18n(
                      'entities.campaign.fields.status',
                    )}
                    options={campaignEnumerators.status.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.campaign.enumerators.status.${value}`,
                        ),
                      }),
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputNumberRangeFormItem
                    name="yearRange"
                    label={i18n(
                      'entities.campaign.fields.yearRange',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <DatePickerRangeFormItem
                    name="startDateRange"
                    label={i18n(
                      'entities.campaign.fields.startDateRange',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <DatePickerRangeFormItem
                    name="endDateRange"
                    label={i18n(
                      'entities.campaign.fields.endDateRange',
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

export default CampaignListFilter;
