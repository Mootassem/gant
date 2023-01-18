import { i18n } from 'src/i18n';
import actions from 'src/modules/partner/list/partnerListActions';
import selectors from 'src/modules/partner/list/partnerListSelectors';
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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import partnerEnumerators from 'src/modules/partner/partnerEnumerators';

const schema = yup.object().shape({
  acronym: yupFilterSchemas.string(
    i18n('entities.partner.fields.acronym'),
  ),
  name: yupFilterSchemas.string(
    i18n('entities.partner.fields.name'),
  ),
  email: yupFilterSchemas.string(
    i18n('entities.partner.fields.email'),
  ),
  postalAddress: yupFilterSchemas.string(
    i18n('entities.partner.fields.postalAddress'),
  ),
  postalCode: yupFilterSchemas.string(
    i18n('entities.partner.fields.postalCode'),
  ),
  city: yupFilterSchemas.string(
    i18n('entities.partner.fields.city'),
  ),
  country: yupFilterSchemas.string(
    i18n('entities.partner.fields.country'),
  ),
  type: yupFilterSchemas.enumerator(
    i18n('entities.partner.fields.type'),
  ),
});

const emptyValues = {
  acronym: null,
  name: null,
  email: null,
  postalAddress: null,
  postalCode: null,
  city: null,
  country: null,
  type: null,
};

const previewRenders = {
  acronym: {
    label: i18n('entities.partner.fields.acronym'),
    render: filterRenders.generic(),
  },
  name: {
    label: i18n('entities.partner.fields.name'),
    render: filterRenders.generic(),
  },
  email: {
    label: i18n('entities.partner.fields.email'),
    render: filterRenders.generic(),
  },
  postalAddress: {
    label: i18n('entities.partner.fields.postalAddress'),
    render: filterRenders.generic(),
  },
  postalCode: {
    label: i18n('entities.partner.fields.postalCode'),
    render: filterRenders.generic(),
  },
  city: {
    label: i18n('entities.partner.fields.city'),
    render: filterRenders.generic(),
  },
  country: {
    label: i18n('entities.partner.fields.country'),
    render: filterRenders.generic(),
  },
  type: {
    label: i18n('entities.partner.fields.type'),
    render: filterRenders.enumerator(
      'entities.partner.enumerators.type',
    ),
  },
};

function PartnerListFilter(props) {
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
                    name="acronym"
                    label={i18n(
                      'entities.partner.fields.acronym',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="name"
                    label={i18n(
                      'entities.partner.fields.name',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="email"
                    label={i18n(
                      'entities.partner.fields.email',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="postalAddress"
                    label={i18n(
                      'entities.partner.fields.postalAddress',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="postalCode"
                    label={i18n(
                      'entities.partner.fields.postalCode',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="city"
                    label={i18n(
                      'entities.partner.fields.city',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="country"
                    label={i18n(
                      'entities.partner.fields.country',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <SelectFormItem
                    name="type"
                    label={i18n(
                      'entities.partner.fields.type',
                    )}
                    options={partnerEnumerators.type.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.partner.enumerators.type.${value}`,
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

export default PartnerListFilter;
