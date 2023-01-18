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

function MembershipListFilter(props) {
  const { campaign } = props;
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
    initialValues.campaign = campaign;
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
    rawFilter.campaign = campaign;
    values.campaign = campaign;
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

  return <></>;
}

export default MembershipListFilter;
