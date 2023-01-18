import React, { useState, useEffect } from 'react';
import { i18n } from 'src/i18n';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { useRouteMatch } from 'react-router-dom';
import actions from 'src/modules/product/form/productFormActions';
import selectors from 'src/modules/product/form/productFormSelectors';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import { FormProvider, useForm } from 'react-hook-form';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import productEnumerators from 'src/modules/product/productEnumerators';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'src/view/shared/Spinner';
const schema = yup.object().shape({
  itemType: yupFormSchemas.enumerator(
    i18n('entities.product.fields.itemType'),
    {
      options: productEnumerators.itemType,
      required: true,
    },
  ),
});
function Highlights() {
  const [dispatched, setDispatched] = useState(false);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const { id } = match.params.id;
  useEffect(() => {
    dispatch(actions.doInit(match.params.id));
    setDispatched(true);
  }, [dispatch, match.params.id]);

  const record = useSelector(selectors.selectRecord);

  const [initialValues] = useState(() => {
    const item = record || {};
    return {
      isType: item.isType,
    };
  });

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );
  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });
  const onSubmit = (values) => {
    dispatch(actions.doUpdate(id, values));
  };
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.product.menu'), '/product'],
          ['Higlights'],
        ]}
      />

      <ContentWrapper>
        <PageTitle>{'Higlights'}</PageTitle>

        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <FormWrapper>
            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-8">
                    <div id="specificationForm">
                      <div className="">
                        <SelectFormItem
                          name="isType"
                          label={i18n(
                            'entities.product.fields.isType',
                          )}
                          options={productEnumerators.isType.map(
                            (value) => ({
                              value,
                              label: i18n(
                                `entities.product.enumerators.isType.${value}`,
                              ),
                            }),
                          )}
                          required={false}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-buttons">
                    <button
                      className="btn btn-primary"
                      disabled={saveLoading}
                      type="button"
                      onClick={form.handleSubmit(onSubmit)}
                    >
                      <ButtonIcon
                        loading={saveLoading}
                        iconClass="far fa-save"
                      />
                      {i18n('common.save')}
                    </button>
                  </div>
                  {/* 
        <button
              className="btn btn-light"
              type="button"
              disabled={props.saveLoading}
              onClick={onReset}
            >
              <i className="fas fa-undo"></i>
&nbsp;
              {i18n('common.reset')}
            </button> */}
                  {/* 
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
            ) : null} */}
                </div>
              </form>
            </FormProvider>
          </FormWrapper>
        )}
      </ContentWrapper>
    </>
  );
}

export default Highlights;
