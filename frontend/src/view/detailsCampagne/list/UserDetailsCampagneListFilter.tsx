import { i18n } from 'src/i18n';
import actions from 'src/modules/membership/list/membershipListActions';
import selectors from 'src/modules/membership/list/membershipListSelectors';
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
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import membershipEnumerators from 'src/modules/membership/membershipEnumerators';
import FormuleAutocompleteFormItem from 'src/view/formule/autocomplete/FormuleAutocompleteFormItem';
import CampaignAutocompleteFormItem from 'src/view/campaign/autocomplete/CampaignAutocompleteFormItem';

const schema = yup.object().shape({
  status: yupFilterSchemas.enumerator(
    i18n('entities.membership.fields.status'),
  ),
  paymentMethod: yupFilterSchemas.enumerator(
    i18n('entities.membership.fields.paymentMethod'),
  ),
  // formule: yupFilterSchemas.relationToOne(
  //   i18n('entities.membership.fields.formule'),
  // ),
  // user: yupFilterSchemas.relationToOne(
  //   i18n('entities.membership.fields.user'),
  // ),
  // campaign: yupFilterSchemas.relationToOne(
  //   i18n('entities.membership.fields.campaign'),
  // ),
  amountRange: yupFilterSchemas.decimalRange(
    i18n('entities.membership.fields.amountRange'),
  ),
});

const emptyValues = {
  status: null,
  paymentMethod: null,
  // formule: null,
  // user: null,
  // campaign: null,
  amountRange: [],
};

const previewRenders = {
  status: {
    label: i18n('entities.membership.fields.status'),
    render: filterRenders.enumerator(
      'entities.membership.enumerators.status',
    ),
  },
  paymentMethod: {
    label: i18n('entities.membership.fields.paymentMethod'),
    render: filterRenders.enumerator(
      'entities.membership.enumerators.paymentMethod',
    ),
  },
  // formule: {
  //   label: i18n('entities.membership.fields.formule'),
  //   render: filterRenders.relationToOne(),
  // },
  // user: {
  //   label: i18n('entities.membership.fields.user'),
  //   render: filterRenders.relationToOne(),
  // },
  // campaign: {
  //   label: i18n('entities.membership.fields.campaign'),
  //   render: filterRenders.relationToOne(),
  // },
  amountRange: {
    label: i18n('entities.membership.fields.amountRange'),
    render: filterRenders.decimalRange(),
  },
};

function UserAdhesionsListFilter(props) {
  const { user, match } = props;
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
    initialValues.user = user;
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
    rawValues.user = user;
    values.user = user;
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
                      'entities.membership.fields.status',
                    )}
                    options={membershipEnumerators.status.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.membership.enumerators.status.${value}`,
                        ),
                      }),
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <SelectFormItem
                    name="paymentMethod"
                    label={i18n(
                      'entities.membership.fields.paymentMethod',
                    )}
                    options={membershipEnumerators.paymentMethod.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.membership.enumerators.paymentMethod.${value}`,
                        ),
                      }),
                    )}
                  />
                </div>
                {/* <div className="col-lg-6 col-12">
                  <FormuleAutocompleteFormItem
                    name="formule"
                    label={i18n(
                      'entities.membership.fields.formule',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <UserAutocompleteFormItem
                    name="user"
                    label={i18n(
                      'entities.membership.fields.user',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <CampaignAutocompleteFormItem
                    name="campaign"
                    label={i18n(
                      'entities.membership.fields.campaign',
                    )}
                  />
                </div> */}
                <div className="col-lg-6 col-12">
                  <InputRangeFormItem
                    name="amountRange"
                    label={i18n(
                      'entities.membership.fields.amountRange',
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

export default UserAdhesionsListFilter;
