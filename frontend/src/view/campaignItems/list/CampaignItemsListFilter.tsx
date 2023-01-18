import { i18n } from 'src/i18n';
import actions from 'src/modules/campaignItems/list/campaignItemsListActions';
import selectors from 'src/modules/campaignItems/list/campaignItemsListSelectors';
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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import campaignItemsEnumerators from 'src/modules/campaignItems/campaignItemsEnumerators';

const schema = yup.object().shape({
  status: yupFilterSchemas.enumerator(
    i18n('entities.campaignItems.fields.status'),
  ),
  isFeature: yupFilterSchemas.enumerator(
    i18n('entities.campaignItems.fields.isFeature'),
  ),
});

const emptyValues = {
  status: null,
  isFeature: null,
};

const previewRenders = {
  status: {
    label: i18n('entities.campaignItems.fields.status'),
    render: filterRenders.enumerator(
      'entities.campaignItems.enumerators.status',
    ),
  },
  isFeature: {
    label: i18n('entities.campaignItems.fields.isFeature'),
    render: filterRenders.enumerator(
      'entities.campaignItems.enumerators.isFeature',
    ),
  },
};

function CampaignItemsListFilter(props) {
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
                  />
                </div>
                <div className="col-lg-6 col-12">
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

export default CampaignItemsListFilter;
