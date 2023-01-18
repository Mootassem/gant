import { i18n } from 'src/i18n';
import actions from 'src/modules/product/list/productListActions';
import selectors from 'src/modules/product/list/productListSelectors';
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
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import productEnumerators from 'src/modules/product/productEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import TaxesAutocompleteFormItem from 'src/view/taxes/autocomplete/TaxesAutocompleteFormItem';
import CategoryAutocompleteFormItem from 'src/view/category/autocomplete/CategoryAutocompleteFormItem';
import SubcategoriesAutocompleteFormItem from 'src/view/subcategories/autocomplete/SubcategoriesAutocompleteFormItem';
import ChieldCategoriesAutocompleteFormItem from 'src/view/chieldCategories/autocomplete/ChieldCategoriesAutocompleteFormItem';
import BrandsAutocompleteFormItem from 'src/view/brands/autocomplete/BrandsAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.product.fields.name'),
  ),
  slug: yupFilterSchemas.string(
    i18n('entities.product.fields.slug'),
  ),
  tags: yupFilterSchemas.string(
    i18n('entities.product.fields.tags'),
  ),
  video: yupFilterSchemas.string(
    i18n('entities.product.fields.video'),
  ),
  specificationName: yupFilterSchemas.string(
    i18n('entities.product.fields.specificationName'),
  ),
  specificationDesciption: yupFilterSchemas.string(
    i18n('entities.product.fields.specificationDesciption'),
  ),
  isSpecification: yupFilterSchemas.boolean(
    i18n('entities.product.fields.isSpecification'),
  ),
  details: yupFilterSchemas.string(
    i18n('entities.product.fields.details'),
  ),
  discountPriceRange: yupFilterSchemas.decimalRange(
    i18n('entities.product.fields.discountPriceRange'),
  ),
  previousPriceRange: yupFilterSchemas.decimalRange(
    i18n('entities.product.fields.previousPriceRange'),
  ),
  stockRange: yupFilterSchemas.integerRange(
    i18n('entities.product.fields.stockRange'),
  ),

  metaDesctiption: yupFilterSchemas.string(
    i18n('entities.product.fields.metaDesctiption'),
  ),
  status: yupFilterSchemas.enumerator(
    i18n('entities.product.fields.status'),
  ),
  isType: yupFilterSchemas.string(
    i18n('entities.product.fields.isType'),
  ),
  dateRange: yupFilterSchemas.dateRange(
    i18n('entities.product.fields.dateRange'),
  ),
  itemType: yupFilterSchemas.enumerator(
    i18n('entities.product.fields.itemType'),
  ),
  link: yupFilterSchemas.string(
    i18n('entities.product.fields.link'),
  ),
  fileType: yupFilterSchemas.enumerator(
    i18n('entities.product.fields.fileType'),
  ),
  taxe: yupFilterSchemas.relationToOne(
    i18n('entities.product.fields.taxe'),
  ),
  category: yupFilterSchemas.relationToOne(
    i18n('entities.product.fields.category'),
  ),
  subcategory: yupFilterSchemas.relationToOne(
    i18n('entities.product.fields.subcategory'),
  ),
  childcategory: yupFilterSchemas.relationToOne(
    i18n('entities.product.fields.childcategory'),
  ),
  brand: yupFilterSchemas.relationToOne(
    i18n('entities.product.fields.brand'),
  ),
});

const emptyValues = {
  name: null,
  slug: null,
  tags: null,
  video: null,
  specificationName: null,
  specificationDesciption: null,
  isSpecification: null,
  details: null,
  discountPriceRange: [],
  previousPriceRange: [],
  stockRange: [],

  metaDesctiption: null,
  status: null,
  isType: null,
  dateRange: [],
  itemType: null,
  link: null,
  fileType: null,
  taxe: null,
  category: null,
  subcategory: null,
  childcategory: null,
  brand: null,
};

const previewRenders = {
  name: {
    label: i18n('entities.product.fields.name'),
    render: filterRenders.generic(),
  },
  slug: {
    label: i18n('entities.product.fields.slug'),
    render: filterRenders.generic(),
  },
  tags: {
    label: i18n('entities.product.fields.tags'),
    render: filterRenders.generic(),
  },
  video: {
    label: i18n('entities.product.fields.video'),
    render: filterRenders.generic(),
  },
  specificationName: {
    label: i18n(
      'entities.product.fields.specificationName',
    ),
    render: filterRenders.generic(),
  },
  specificationDesciption: {
    label: i18n(
      'entities.product.fields.specificationDesciption',
    ),
    render: filterRenders.generic(),
  },
  isSpecification: {
    label: i18n('entities.product.fields.isSpecification'),
    render: filterRenders.boolean(),
  },
  details: {
    label: i18n('entities.product.fields.details'),
    render: filterRenders.generic(),
  },
  discountPriceRange: {
    label: i18n(
      'entities.product.fields.discountPriceRange',
    ),
    render: filterRenders.decimalRange(),
  },
  previousPriceRange: {
    label: i18n(
      'entities.product.fields.previousPriceRange',
    ),
    render: filterRenders.decimalRange(),
  },
  stockRange: {
    label: i18n('entities.product.fields.stockRange'),
    render: filterRenders.range(),
  },

  metaDesctiption: {
    label: i18n('entities.product.fields.metaDesctiption'),
    render: filterRenders.generic(),
  },
  status: {
    label: i18n('entities.product.fields.status'),
    render: filterRenders.enumerator(
      'entities.product.enumerators.status',
    ),
  },
  isType: {
    label: i18n('entities.product.fields.isType'),
    render: filterRenders.generic(),
  },
  dateRange: {
    label: i18n('entities.product.fields.dateRange'),
    render: filterRenders.dateRange(),
  },
  itemType: {
    label: i18n('entities.product.fields.itemType'),
    render: filterRenders.enumerator(
      'entities.product.enumerators.itemType',
    ),
  },
  link: {
    label: i18n('entities.product.fields.link'),
    render: filterRenders.generic(),
  },
  fileType: {
    label: i18n('entities.product.fields.fileType'),
    render: filterRenders.enumerator(
      'entities.product.enumerators.fileType',
    ),
  },
  taxe: {
    label: i18n('entities.product.fields.taxe'),
    render: filterRenders.relationToOne(),
  },
  category: {
    label: i18n('entities.product.fields.category'),
    render: filterRenders.relationToOne(),
  },
  subcategory: {
    label: i18n('entities.product.fields.subcategory'),
    render: filterRenders.relationToOne(),
  },
  childcategory: {
    label: i18n('entities.product.fields.childcategory'),
    render: filterRenders.relationToOne(),
  },
  brand: {
    label: i18n('entities.product.fields.brand'),
    render: filterRenders.relationToOne(),
  },
};

function ProductListFilter(props) {
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
                      'entities.product.fields.name',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="slug"
                    label={i18n(
                      'entities.product.fields.slug',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="tags"
                    label={i18n(
                      'entities.product.fields.tags',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="video"
                    label={i18n(
                      'entities.product.fields.video',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="specificationName"
                    label={i18n(
                      'entities.product.fields.specificationName',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="specificationDesciption"
                    label={i18n(
                      'entities.product.fields.specificationDesciption',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <SelectFormItem
                    name="isSpecification"
                    label={i18n(
                      'entities.product.fields.isSpecification',
                    )}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="details"
                    label={i18n(
                      'entities.product.fields.details',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputRangeFormItem
                    name="discountPriceRange"
                    label={i18n(
                      'entities.product.fields.discountPriceRange',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputRangeFormItem
                    name="previousPriceRange"
                    label={i18n(
                      'entities.product.fields.previousPriceRange',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputNumberRangeFormItem
                    name="stockRange"
                    label={i18n(
                      'entities.product.fields.stockRange',
                    )}
                  />
                </div>

                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="metaDesctiption"
                    label={i18n(
                      'entities.product.fields.metaDesctiption',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <SelectFormItem
                    name="status"
                    label={i18n(
                      'entities.product.fields.status',
                    )}
                    options={productEnumerators.status.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.product.enumerators.status.${value}`,
                        ),
                      }),
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="isType"
                    label={i18n(
                      'entities.product.fields.isType',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <DatePickerRangeFormItem
                    name="dateRange"
                    label={i18n(
                      'entities.product.fields.dateRange',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <SelectFormItem
                    name="itemType"
                    label={i18n(
                      'entities.product.fields.itemType',
                    )}
                    options={productEnumerators.itemType.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.product.enumerators.itemType.${value}`,
                        ),
                      }),
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="link"
                    label={i18n(
                      'entities.product.fields.link',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <SelectFormItem
                    name="fileType"
                    label={i18n(
                      'entities.product.fields.fileType',
                    )}
                    options={productEnumerators.fileType.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.product.enumerators.fileType.${value}`,
                        ),
                      }),
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <TaxesAutocompleteFormItem
                    name="taxe"
                    label={i18n(
                      'entities.product.fields.taxe',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <CategoryAutocompleteFormItem
                    name="category"
                    label={i18n(
                      'entities.product.fields.category',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <SubcategoriesAutocompleteFormItem
                    name="subcategory"
                    label={i18n(
                      'entities.product.fields.subcategory',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <ChieldCategoriesAutocompleteFormItem
                    name="childcategory"
                    label={i18n(
                      'entities.product.fields.childcategory',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <BrandsAutocompleteFormItem
                    name="brand"
                    label={i18n(
                      'entities.product.fields.brand',
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

export default ProductListFilter;
