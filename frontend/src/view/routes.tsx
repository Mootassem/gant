import Permissions from 'src/security/permissions';
import config from 'src/config';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/highlights/:id/edit',
    loader: () =>
      import('src/view/product/form/Highlights'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserDetails'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/category',
    loader: () =>
      import('src/view/category/list/CategoryListPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/category/new',
    loader: () =>
      import('src/view/category/form/CategoryFormPage'),
    permissionRequired: permissions.categoryCreate,
    exact: true,
  },
  {
    path: '/category/importer',
    loader: () =>
      import(
        'src/view/category/importer/CategoryImporterPage'
      ),
    permissionRequired: permissions.categoryImport,
    exact: true,
  },
  {
    path: '/category/:id/edit',
    loader: () =>
      import('src/view/category/form/CategoryFormPage'),
    permissionRequired: permissions.categoryEdit,
    exact: true,
  },
  {
    path: '/category/:id',
    loader: () =>
      import('src/view/category/view/CategoryViewPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },

  {
    path: '/subcategories',
    loader: () =>
      import(
        'src/view/subcategories/list/SubcategoriesListPage'
      ),
    permissionRequired: permissions.subcategoriesRead,
    exact: true,
  },
  {
    path: '/subcategories/new',
    loader: () =>
      import(
        'src/view/subcategories/form/SubcategoriesFormPage'
      ),
    permissionRequired: permissions.subcategoriesCreate,
    exact: true,
  },
  {
    path: '/subcategories/importer',
    loader: () =>
      import(
        'src/view/subcategories/importer/SubcategoriesImporterPage'
      ),
    permissionRequired: permissions.subcategoriesImport,
    exact: true,
  },
  {
    path: '/subcategories/:id/edit',
    loader: () =>
      import(
        'src/view/subcategories/form/SubcategoriesFormPage'
      ),
    permissionRequired: permissions.subcategoriesEdit,
    exact: true,
  },
  {
    path: '/subcategories/:id',
    loader: () =>
      import(
        'src/view/subcategories/view/SubcategoriesViewPage'
      ),
    permissionRequired: permissions.subcategoriesRead,
    exact: true,
  },

  {
    path: '/chield-categories',
    loader: () =>
      import(
        'src/view/chieldCategories/list/ChieldCategoriesListPage'
      ),
    permissionRequired: permissions.chieldCategoriesRead,
    exact: true,
  },
  {
    path: '/chield-categories/new',
    loader: () =>
      import(
        'src/view/chieldCategories/form/ChieldCategoriesFormPage'
      ),
    permissionRequired: permissions.chieldCategoriesCreate,
    exact: true,
  },
  {
    path: '/chield-categories/importer',
    loader: () =>
      import(
        'src/view/chieldCategories/importer/ChieldCategoriesImporterPage'
      ),
    permissionRequired: permissions.chieldCategoriesImport,
    exact: true,
  },
  {
    path: '/chield-categories/:id/edit',
    loader: () =>
      import(
        'src/view/chieldCategories/form/ChieldCategoriesFormPage'
      ),
    permissionRequired: permissions.chieldCategoriesEdit,
    exact: true,
  },
  {
    path: '/chield-categories/:id',
    loader: () =>
      import(
        'src/view/chieldCategories/view/ChieldCategoriesViewPage'
      ),
    permissionRequired: permissions.chieldCategoriesRead,
    exact: true,
  },

  {
    path: '/taxes',
    loader: () =>
      import('src/view/taxes/list/TaxesListPage'),
    permissionRequired: permissions.taxesRead,
    exact: true,
  },
  {
    path: '/taxes/new',
    loader: () =>
      import('src/view/taxes/form/TaxesFormPage'),
    permissionRequired: permissions.taxesCreate,
    exact: true,
  },
  {
    path: '/taxes/importer',
    loader: () =>
      import('src/view/taxes/importer/TaxesImporterPage'),
    permissionRequired: permissions.taxesImport,
    exact: true,
  },
  {
    path: '/taxes/:id/edit',
    loader: () =>
      import('src/view/taxes/form/TaxesFormPage'),
    permissionRequired: permissions.taxesEdit,
    exact: true,
  },
  {
    path: '/taxes/:id',
    loader: () =>
      import('src/view/taxes/view/TaxesViewPage'),
    permissionRequired: permissions.taxesRead,
    exact: true,
  },

  {
    path: '/brands',
    loader: () =>
      import('src/view/brands/list/BrandsListPage'),
    permissionRequired: permissions.brandsRead,
    exact: true,
  },
  {
    path: '/brands/new',
    loader: () =>
      import('src/view/brands/form/BrandsFormPage'),
    permissionRequired: permissions.brandsCreate,
    exact: true,
  },
  {
    path: '/brands/importer',
    loader: () =>
      import('src/view/brands/importer/BrandsImporterPage'),
    permissionRequired: permissions.brandsImport,
    exact: true,
  },
  {
    path: '/brands/:id/edit',
    loader: () =>
      import('src/view/brands/form/BrandsFormPage'),
    permissionRequired: permissions.brandsEdit,
    exact: true,
  },
  {
    path: '/brands/:id',
    loader: () =>
      import('src/view/brands/view/BrandsViewPage'),
    permissionRequired: permissions.brandsRead,
    exact: true,
  },

  {
    path: '/edit',
    loader: () => import('src/view/edit/list/EditListPage'),
    permissionRequired: permissions.editRead,
    exact: true,
  },
  {
    path: '/edit/new',
    loader: () => import('src/view/edit/form/EditFormPage'),
    permissionRequired: permissions.editCreate,
    exact: true,
  },
  {
    path: '/edit/importer',
    loader: () =>
      import('src/view/edit/importer/EditImporterPage'),
    permissionRequired: permissions.editImport,
    exact: true,
  },
  {
    path: '/edit/:id/edit',
    loader: () => import('src/view/edit/form/EditFormPage'),
    permissionRequired: permissions.editEdit,
    exact: true,
  },
  {
    path: '/edit/:id',
    loader: () => import('src/view/edit/view/EditViewPage'),
    permissionRequired: permissions.editRead,
    exact: true,
  },

  {
    path: '/campaign-items',
    loader: () =>
      import(
        'src/view/campaignItems/list/CampaignItemsListPage'
      ),
    permissionRequired: permissions.campaignItemsRead,
    exact: true,
  },
  {
    path: '/campaign-items/new',
    loader: () =>
      import(
        'src/view/campaignItems/form/CampaignItemsFormPage'
      ),
    permissionRequired: permissions.campaignItemsCreate,
    exact: true,
  },
  {
    path: '/campaign-items/importer',
    loader: () =>
      import(
        'src/view/campaignItems/importer/CampaignItemsImporterPage'
      ),
    permissionRequired: permissions.campaignItemsImport,
    exact: true,
  },
  {
    path: '/campaign-items/:id/edit',
    loader: () =>
      import(
        'src/view/campaignItems/form/CampaignItemsFormPage'
      ),
    permissionRequired: permissions.campaignItemsEdit,
    exact: true,
  },
  {
    path: '/campaign-items/:id',
    loader: () =>
      import(
        'src/view/campaignItems/view/CampaignItemsViewPage'
      ),
    permissionRequired: permissions.campaignItemsRead,
    exact: true,
  },

  {
    path: '/gallery',
    loader: () =>
      import('src/view/gallery/list/GalleryListPage'),
    permissionRequired: permissions.galleryRead,
    exact: true,
  },
  {
    path: '/gallery/new',
    loader: () =>
      import('src/view/gallery/form/GalleryFormPage'),
    permissionRequired: permissions.galleryCreate,
    exact: true,
  },
  {
    path: '/gallery/importer',
    loader: () =>
      import(
        'src/view/gallery/importer/GalleryImporterPage'
      ),
    permissionRequired: permissions.galleryImport,
    exact: true,
  },
  {
    path: '/gallery/:id/edit',
    loader: () =>
      import('src/view/gallery/form/GalleryFormPage'),
    permissionRequired: permissions.galleryEdit,
    exact: true,
  },
  {
    path: '/gallery/:id',
    loader: () =>
      import('src/view/gallery/view/GalleryViewPage'),
    permissionRequired: permissions.galleryRead,
    exact: true,
  },

  {
    path: '/product',
    loader: () =>
      import('src/view/product/list/ProductListPage'),
    permissionRequired: permissions.productRead,
    exact: true,
  },
  {
    path: '/product/choose',
    loader: () =>
      import('src/view/product/form/ChooseForm'),
    permissionRequired: permissions.productCreate,
    exact: true,
  },
  {
    path: '/product/new/:name',
    loader: () =>
      import('src/view/product/form/ProductFormPage'),
    permissionRequired: permissions.productCreate,
    exact: true,
  },
  {
    path: '/product/importer',
    loader: () =>
      import(
        'src/view/product/importer/ProductImporterPage'
      ),
    permissionRequired: permissions.productImport,
    exact: true,
  },
  {
    path: '/product/:id/edit',
    loader: () =>
      import('src/view/product/form/ProductFormPage'),
    permissionRequired: permissions.productEdit,
    exact: true,
  },
  {
    path: '/product/:id',
    loader: () =>
      import('src/view/product/view/ProductViewPage'),
    permissionRequired: permissions.productRead,
    exact: true,
  },

  {
    path: '/shippingservice',
    loader: () =>
      import(
        'src/view/shippingservice/list/ShippingserviceListPage'
      ),
    permissionRequired: permissions.shippingserviceRead,
    exact: true,
  },
  {
    path: '/shippingservice/new',
    loader: () =>
      import(
        'src/view/shippingservice/form/ShippingserviceFormPage'
      ),
    permissionRequired: permissions.shippingserviceCreate,
    exact: true,
  },
  {
    path: '/shippingservice/importer',
    loader: () =>
      import(
        'src/view/shippingservice/importer/ShippingserviceImporterPage'
      ),
    permissionRequired: permissions.shippingserviceImport,
    exact: true,
  },
  {
    path: '/shippingservice/:id/edit',
    loader: () =>
      import(
        'src/view/shippingservice/form/ShippingserviceFormPage'
      ),
    permissionRequired: permissions.shippingserviceEdit,
    exact: true,
  },
  {
    path: '/shippingservice/:id',
    loader: () =>
      import(
        'src/view/shippingservice/view/ShippingserviceViewPage'
      ),
    permissionRequired: permissions.shippingserviceRead,
    exact: true,
  },

  {
    path: '/coupons',
    loader: () =>
      import('src/view/coupons/list/CouponsListPage'),
    permissionRequired: permissions.couponsRead,
    exact: true,
  },
  {
    path: '/coupons/new',
    loader: () =>
      import('src/view/coupons/form/CouponsFormPage'),
    permissionRequired: permissions.couponsCreate,
    exact: true,
  },
  {
    path: '/coupons/importer',
    loader: () =>
      import(
        'src/view/coupons/importer/CouponsImporterPage'
      ),
    permissionRequired: permissions.couponsImport,
    exact: true,
  },
  {
    path: '/coupons/:id/edit',
    loader: () =>
      import('src/view/coupons/form/CouponsFormPage'),
    permissionRequired: permissions.couponsEdit,
    exact: true,
  },
  {
    path: '/coupons/:id',
    loader: () =>
      import('src/view/coupons/view/CouponsViewPage'),
    permissionRequired: permissions.couponsRead,
    exact: true,
  },

  {
    path: '/transaction',
    loader: () =>
      import(
        'src/view/transaction/list/TransactionListPage'
      ),
    permissionRequired: permissions.transactionRead,
    exact: true,
  },
  {
    path: '/transaction/new',
    loader: () =>
      import(
        'src/view/transaction/form/TransactionFormPage'
      ),
    permissionRequired: permissions.transactionCreate,
    exact: true,
  },
  {
    path: '/transaction/importer',
    loader: () =>
      import(
        'src/view/transaction/importer/TransactionImporterPage'
      ),
    permissionRequired: permissions.transactionImport,
    exact: true,
  },
  {
    path: '/transaction/:id/edit',
    loader: () =>
      import(
        'src/view/transaction/form/TransactionFormPage'
      ),
    permissionRequired: permissions.transactionEdit,
    exact: true,
  },
  {
    path: '/transaction/:id',
    loader: () =>
      import(
        'src/view/transaction/view/TransactionViewPage'
      ),
    permissionRequired: permissions.transactionRead,
    exact: true,
  },

  {
    path: '/track-order',
    loader: () =>
      import('src/view/trackOrder/list/TrackOrderListPage'),
    permissionRequired: permissions.trackOrderRead,
    exact: true,
  },
  {
    path: '/track-order/new',
    loader: () =>
      import('src/view/trackOrder/form/TrackOrderFormPage'),
    permissionRequired: permissions.trackOrderCreate,
    exact: true,
  },
  {
    path: '/track-order/importer',
    loader: () =>
      import(
        'src/view/trackOrder/importer/TrackOrderImporterPage'
      ),
    permissionRequired: permissions.trackOrderImport,
    exact: true,
  },
  {
    path: '/track-order/:id/edit',
    loader: () =>
      import('src/view/trackOrder/form/TrackOrderFormPage'),
    permissionRequired: permissions.trackOrderEdit,
    exact: true,
  },
  {
    path: '/track-order/:id',
    loader: () =>
      import('src/view/trackOrder/view/TrackOrderViewPage'),
    permissionRequired: permissions.trackOrderRead,
    exact: true,
  },

  {
    path: '/order',
    loader: () =>
      import('src/view/order/list/OrderListPage'),
    permissionRequired: permissions.orderRead,
    exact: true,
  },
  {
    path: '/order/new',
    loader: () =>
      import('src/view/order/form/OrderFormPage'),
    permissionRequired: permissions.orderCreate,
    exact: true,
  },
  {
    path: '/order/importer',
    loader: () =>
      import('src/view/order/importer/OrderImporterPage'),
    permissionRequired: permissions.orderImport,
    exact: true,
  },
  {
    path: '/order/:id/edit',
    loader: () =>
      import('src/view/order/form/OrderFormPage'),
    permissionRequired: permissions.orderEdit,
    exact: true,
  },
  {
    path: '/order/:id',
    loader: () =>
      import('src/view/order/view/OrderViewPage'),
    permissionRequired: permissions.orderRead,
    exact: true,
  },

  {
    path: '/state',
    loader: () =>
      import('src/view/state/list/StateListPage'),
    permissionRequired: permissions.stateRead,
    exact: true,
  },
  {
    path: '/state/new',
    loader: () =>
      import('src/view/state/form/StateFormPage'),
    permissionRequired: permissions.stateCreate,
    exact: true,
  },
  {
    path: '/state/importer',
    loader: () =>
      import('src/view/state/importer/StateImporterPage'),
    permissionRequired: permissions.stateImport,
    exact: true,
  },
  {
    path: '/state/:id/edit',
    loader: () =>
      import('src/view/state/form/StateFormPage'),
    permissionRequired: permissions.stateEdit,
    exact: true,
  },
  {
    path: '/state/:id',
    loader: () =>
      import('src/view/state/view/StateViewPage'),
    permissionRequired: permissions.stateRead,
    exact: true,
  },
  {
    path: '/attribute-options/new/:name',
    loader: () =>
      import(
        'src/view/attributeOptions/form/AttributeOptionsFormPage'
      ),
    permissionRequired: permissions.attributeOptionsCreate,
    exact: true,
  },
  {
    path: '/attribute-options/:name',
    loader: () =>
      import(
        'src/view/attributeOptions/list/AttributeOptionsListPage'
      ),
    permissionRequired: permissions.attributeOptionsRead,
    exact: true,
  },

  {
    path: '/attribute-options/importer',
    loader: () =>
      import(
        'src/view/attributeOptions/importer/AttributeOptionsImporterPage'
      ),
    permissionRequired: permissions.attributeOptionsImport,
    exact: true,
  },
  {
    path: '/attribute-options/:id/edit',
    loader: () =>
      import(
        'src/view/attributeOptions/form/AttributeOptionsFormPage'
      ),
    permissionRequired: permissions.attributeOptionsEdit,
    exact: true,
  },
  {
    path: '/attribute-options/:id',
    loader: () =>
      import(
        'src/view/attributeOptions/view/AttributeOptionsViewPage'
      ),
    permissionRequired: permissions.attributeOptionsRead,
    exact: true,
  },

  {
    path: '/cart',
    loader: () => import('src/view/cart/list/CartListPage'),
    permissionRequired: permissions.cartRead,
    exact: true,
  },
  {
    path: '/cart/new',
    loader: () => import('src/view/cart/form/CartFormPage'),
    permissionRequired: permissions.cartCreate,
    exact: true,
  },
  {
    path: '/cart/importer',
    loader: () =>
      import('src/view/cart/importer/CartImporterPage'),
    permissionRequired: permissions.cartImport,
    exact: true,
  },
  {
    path: '/cart/:id/edit',
    loader: () => import('src/view/cart/form/CartFormPage'),
    permissionRequired: permissions.cartEdit,
    exact: true,
  },
  {
    path: '/cart/:id',
    loader: () => import('src/view/cart/view/CartViewPage'),
    permissionRequired: permissions.cartRead,
    exact: true,
  },

  {
    path: '/paymentsettings',
    loader: () =>
      import(
        'src/view/paymentsettings/list/PaymentsettingsListPage'
      ),
    permissionRequired: permissions.paymentsettingsRead,
    exact: true,
  },
  {
    path: '/paymentsettings/new',
    loader: () =>
      import(
        'src/view/paymentsettings/form/PaymentsettingsFormPage'
      ),
    permissionRequired: permissions.paymentsettingsCreate,
    exact: true,
  },
  {
    path: '/paymentsettings/importer',
    loader: () =>
      import(
        'src/view/paymentsettings/importer/PaymentsettingsImporterPage'
      ),
    permissionRequired: permissions.paymentsettingsImport,
    exact: true,
  },
  {
    path: '/paymentsettings/:id/edit',
    loader: () =>
      import(
        'src/view/paymentsettings/form/PaymentsettingsFormPage'
      ),
    permissionRequired: permissions.paymentsettingsEdit,
    exact: true,
  },
  {
    path: '/paymentsettings/:id',
    loader: () =>
      import(
        'src/view/paymentsettings/view/PaymentsettingsViewPage'
      ),
    permissionRequired: permissions.paymentsettingsRead,
    exact: true,
  },

  {
    path: '/review',
    loader: () =>
      import('src/view/review/list/ReviewListPage'),
    permissionRequired: permissions.reviewRead,
    exact: true,
  },
  {
    path: '/review/new',
    loader: () =>
      import('src/view/review/form/ReviewFormPage'),
    permissionRequired: permissions.reviewCreate,
    exact: true,
  },
  {
    path: '/review/importer',
    loader: () =>
      import('src/view/review/importer/ReviewImporterPage'),
    permissionRequired: permissions.reviewImport,
    exact: true,
  },
  {
    path: '/review/:id/edit',
    loader: () =>
      import('src/view/review/form/ReviewFormPage'),
    permissionRequired: permissions.reviewEdit,
    exact: true,
  },
  {
    path: '/review/:id',
    loader: () =>
      import('src/view/review/view/ReviewViewPage'),
    permissionRequired: permissions.reviewRead,
    exact: true,
  },
  {
    path: '/attributes/:id',
    loader: () =>
      import('src/view/attributes/list/AttributesListPage'),
    permissionRequired: permissions.attributesRead,
    exact: true,
  },
  {
    path: '/attributes/new/:name',
    loader: () =>
      import('src/view/attributes/form/AttributesFormPage'),
    permissionRequired: permissions.attributesCreate,
    exact: true,
  },
  {
    path: '/attributes/importer',
    loader: () =>
      import(
        'src/view/attributes/importer/AttributesImporterPage'
      ),
    permissionRequired: permissions.attributesImport,
    exact: true,
  },
  {
    path: '/attributes/:id/edit',
    loader: () =>
      import('src/view/attributes/form/AttributesFormPage'),
    permissionRequired: permissions.attributesEdit,
    exact: true,
  },
  {
    path: '/attributes/:id',
    loader: () =>
      import('src/view/attributes/view/AttributesViewPage'),
    permissionRequired: permissions.attributesRead,
    exact: true,
  },
  {
    path: '/projet',
    loader: () =>
      import('src/view/projet/list/ProjetListPage'),
    permissionRequired: permissions.projetRead,
    exact: true,
  },
  {
    path: '/projet/new',
    loader: () =>
      import('src/view/projet/form/ProjetFormPage'),
    permissionRequired: permissions.projetCreate,
    exact: true,
  },
  {
    path: '/projet/importer',
    loader: () =>
      import('src/view/projet/importer/ProjetImporterPage'),
    permissionRequired: permissions.projetImport,
    exact: true,
  },
  {
    path: '/projet/:id/edit',
    loader: () =>
      import('src/view/projet/form/ProjetFormPage'),
    permissionRequired: permissions.projetEdit,
    exact: true,
  },
  {
    path: '/projet/:id',
    loader: () =>
      import('src/view/projet/view/ProjetDetails'),
    permissionRequired: permissions.projetRead,
    exact: true,
  },

  {
    path: '/votes',
    loader: () =>
      import('src/view/votes/list/VotesListPage'),
    permissionRequired: permissions.votesRead,
    exact: true,
  },
  {
    path: '/votes/new',
    loader: () =>
      import('src/view/votes/form/VotesFormPage'),
    permissionRequired: permissions.votesCreate,
    exact: true,
  },
  {
    path: '/votes/importer',
    loader: () =>
      import('src/view/votes/importer/VotesImporterPage'),
    permissionRequired: permissions.votesImport,
    exact: true,
  },
  {
    path: '/votes/:id/edit',
    loader: () =>
      import('src/view/votes/form/VotesFormPage'),
    permissionRequired: permissions.votesEdit,
    exact: true,
  },
  {
    path: '/votes/:id',
    loader: () =>
      import('src/view/votes/view/VotesViewPage'),
    permissionRequired: permissions.votesRead,
    exact: true,
  },

  {
    path: '/dons',
    loader: () => import('src/view/dons/list/DonsListPage'),
    permissionRequired: permissions.donsRead,
    exact: true,
  },

  {
    path: '/dons/new',
    loader: () => import('src/view/dons/form/DonsFormPage'),
    permissionRequired: permissions.donsCreate,
    exact: true,
  },
  {
    path: '/dons/:id/new',
    loader: () =>
      import('src/view/dons/form/DonsFormModal'),
    permissionRequired: permissions.detailsCampagneCreate,
    exact: true,
  },
  {
    path: '/dons/importer',
    loader: () =>
      import('src/view/dons/importer/DonsImporterPage'),
    permissionRequired: permissions.donsImport,
    exact: true,
  },
  {
    path: '/dons/:id/edit',
    loader: () => import('src/view/dons/form/DonsFormPage'),
    permissionRequired: permissions.donsEdit,
    exact: true,
  },
  {
    path: '/dons/:id',
    loader: () => import('src/view/dons/view/DonsViewPage'),
    permissionRequired: permissions.donsRead,
    exact: true,
  },
  {
    path: '/campagne',
    loader: () =>
      import('src/view/campagne/list/CampagneListPage'),
    permissionRequired: permissions.campagneRead,
    exact: true,
  },
  {
    path: '/campagne/new',
    loader: () =>
      import('src/view/campagne/form/CampagneFormPage'),
    permissionRequired: permissions.campagneCreate,
    exact: true,
  },
  {
    path: '/campagne/importer',
    loader: () =>
      import(
        'src/view/campagne/importer/CampagneImporterPage'
      ),
    permissionRequired: permissions.campagneImport,
    exact: true,
  },
  {
    path: '/campagne/:id/edit',
    loader: () =>
      import('src/view/campagne/form/CampagneFormPage'),
    permissionRequired: permissions.campagneEdit,
    exact: true,
  },
  {
    path: '/campagne/:id',
    loader: () =>
      import('src/view/campagne/view/CampagneViewPage'),
    permissionRequired: permissions.campagneRead,
    exact: true,
  },

  {
    path: '/details-campagne',
    loader: () =>
      import(
        'src/view/detailsCampagne/list/DetailsCampagneListPage'
      ),
    permissionRequired: permissions.detailsCampagneRead,
    exact: true,
  },

  {
    path: '/details-campagne/:id',
    loader: () =>
      import(
        'src/view/detailsCampagne/view/DetailsCampagneViewPage'
      ),
    permissionRequired: permissions.detailsCampagneRead,
    exact: true,
  },
  {
    path: '/details-campagne/new',
    loader: () =>
      import(
        'src/view/detailsCampagne/form/DetailsCampagneFormPage'
      ),
    permissionRequired: permissions.detailsCampagneCreate,
    exact: true,
  },
  {
    path: '/details-campagne/:id/new',
    loader: () =>
      import(
        'src/view/detailsCampagne/form/DetailsCampagneFormModal'
      ),
    permissionRequired: permissions.detailsCampagneCreate,
    exact: true,
  },
  {
    path: '/details-campagne/importer',
    loader: () =>
      import(
        'src/view/detailsCampagne/importer/DetailsCampagneImporterPage'
      ),
    permissionRequired: permissions.detailsCampagneImport,
    exact: true,
  },
  {
    path: '/details-campagne/:id/edit',
    loader: () =>
      import(
        'src/view/detailsCampagne/form/DetailsCampagneFormPage'
      ),
    permissionRequired: permissions.detailsCampagneEdit,
    exact: true,
  },
  {
    path: '/election',
    loader: () =>
      import('src/view/election/list/ElectionListPage'),
    permissionRequired: permissions.electionRead,
    exact: true,
  },
  {
    path: '/election/new',
    loader: () =>
      import('src/view/election/form/ElectionFormPage'),
    permissionRequired: permissions.electionCreate,
    exact: true,
  },
  {
    path: '/election/importer',
    loader: () =>
      import(
        'src/view/election/importer/ElectionImporterPage'
      ),
    permissionRequired: permissions.electionImport,
    exact: true,
  },
  {
    path: '/election/:id/edit',
    loader: () =>
      import('src/view/election/form/ElectionFormPage'),
    permissionRequired: permissions.electionEdit,
    exact: true,
  },
  {
    path: '/election/:id',
    loader: () =>
      import('src/view/election/view/ElectionViewPage'),
    permissionRequired: permissions.electionRead,
    exact: true,
  },

  {
    path: '/association',
    loader: () =>
      import(
        'src/view/association/list/AssociationListPage'
      ),
    permissionRequired: permissions.associationRead,
    exact: true,
  },
  {
    path: '/association/new',
    loader: () =>
      import(
        'src/view/association/form/AssociationFormPage'
      ),
    permissionRequired: permissions.associationCreate,
    exact: true,
  },
  {
    path: '/association/importer',
    loader: () =>
      import(
        'src/view/association/importer/AssociationImporterPage'
      ),
    permissionRequired: permissions.associationImport,
    exact: true,
  },
  {
    path: '/association/:id/edit',
    loader: () =>
      import(
        'src/view/association/form/AssociationFormPage'
      ),
    permissionRequired: permissions.associationEdit,
    exact: true,
  },
  {
    path: '/association/:id',
    loader: () =>
      import(
        'src/view/association/view/AssociationViewPage'
      ),
    permissionRequired: permissions.associationRead,
    exact: true,
  },

  {
    path: '/news-category',
    loader: () =>
      import(
        'src/view/newsCategory/list/NewsCategoryListPage'
      ),
    permissionRequired: permissions.newsCategoryRead,
    exact: true,
  },
  {
    path: '/news-category/new',
    loader: () =>
      import(
        'src/view/newsCategory/form/NewsCategoryFormPage'
      ),
    permissionRequired: permissions.newsCategoryCreate,
    exact: true,
  },
  {
    path: '/news-category/importer',
    loader: () =>
      import(
        'src/view/newsCategory/importer/NewsCategoryImporterPage'
      ),
    permissionRequired: permissions.newsCategoryImport,
    exact: true,
  },
  {
    path: '/news-category/:id/edit',
    loader: () =>
      import(
        'src/view/newsCategory/form/NewsCategoryFormPage'
      ),
    permissionRequired: permissions.newsCategoryEdit,
    exact: true,
  },
  {
    path: '/news-category/:id',
    loader: () =>
      import(
        'src/view/newsCategory/view/NewsCategoryViewPage'
      ),
    permissionRequired: permissions.newsCategoryRead,
    exact: true,
  },

  {
    path: '/tag',
    loader: () => import('src/view/tag/list/TagListPage'),
    permissionRequired: permissions.tagRead,
    exact: true,
  },
  {
    path: '/tag/new',
    loader: () => import('src/view/tag/form/TagFormPage'),
    permissionRequired: permissions.tagCreate,
    exact: true,
  },
  {
    path: '/tag/importer',
    loader: () =>
      import('src/view/tag/importer/TagImporterPage'),
    permissionRequired: permissions.tagImport,
    exact: true,
  },
  {
    path: '/tag/:id/edit',
    loader: () => import('src/view/tag/form/TagFormPage'),
    permissionRequired: permissions.tagEdit,
    exact: true,
  },
  {
    path: '/tag/:id',
    loader: () => import('src/view/tag/view/TagViewPage'),
    permissionRequired: permissions.tagRead,
    exact: true,
  },

  {
    path: '/news',
    loader: () => import('src/view/news/list/NewsListPage'),
    permissionRequired: permissions.newsRead,
    exact: true,
  },
  {
    path: '/news/new',
    loader: () => import('src/view/news/form/NewsFormPage'),
    permissionRequired: permissions.newsCreate,
    exact: true,
  },
  {
    path: '/news/importer',
    loader: () =>
      import('src/view/news/importer/NewsImporterPage'),
    permissionRequired: permissions.newsImport,
    exact: true,
  },
  {
    path: '/news/:id/edit',
    loader: () => import('src/view/news/form/NewsFormPage'),
    permissionRequired: permissions.newsEdit,
    exact: true,
  },
  {
    path: '/news/:id',
    loader: () => import('src/view/news/view/NewsViewPage'),
    permissionRequired: permissions.newsRead,
    exact: true,
  },

  {
    path: '/partner',
    loader: () =>
      import('src/view/partner/list/PartnerListPage'),
    permissionRequired: permissions.partnerRead,
    exact: true,
  },
  {
    path: '/partner/new',
    loader: () =>
      import('src/view/partner/form/PartnerFormPage'),
    permissionRequired: permissions.partnerCreate,
    exact: true,
  },
  {
    path: '/partner/importer',
    loader: () =>
      import(
        'src/view/partner/importer/PartnerImporterPage'
      ),
    permissionRequired: permissions.partnerImport,
    exact: true,
  },
  {
    path: '/partner/:id/edit',
    loader: () =>
      import('src/view/partner/form/PartnerFormPage'),
    permissionRequired: permissions.partnerEdit,
    exact: true,
  },
  {
    path: '/partner/:id',
    loader: () =>
      import('src/view/partner/view/PartnerViewPage'),
    permissionRequired: permissions.partnerRead,
    exact: true,
  },

  {
    path: '/group',
    loader: () =>
      import('src/view/group/list/GroupListPage'),
    permissionRequired: permissions.groupRead,
    exact: true,
  },
  {
    path: '/group/new',
    loader: () =>
      import('src/view/group/form/GroupFormPage'),
    permissionRequired: permissions.groupCreate,
    exact: true,
  },
  {
    path: '/group/importer',
    loader: () =>
      import('src/view/group/importer/GroupImporterPage'),
    permissionRequired: permissions.groupImport,
    exact: true,
  },
  {
    path: '/group/:id/edit',
    loader: () =>
      import('src/view/group/form/GroupFormPage'),
    permissionRequired: permissions.groupEdit,
    exact: true,
  },
  {
    path: '/group/:id',
    loader: () =>
      import('src/view/group/view/GroupViewPage'),
    permissionRequired: permissions.groupRead,
    exact: true,
  },

  {
    path: '/formule',
    loader: () =>
      import('src/view/formule/list/FormuleListPage'),
    permissionRequired: permissions.formuleRead,
    exact: true,
  },
  {
    path: '/formule/new',
    loader: () =>
      import('src/view/formule/form/FormuleFormPage'),
    permissionRequired: permissions.formuleCreate,
    exact: true,
  },
  {
    path: '/formule/importer',
    loader: () =>
      import(
        'src/view/formule/importer/FormuleImporterPage'
      ),
    permissionRequired: permissions.formuleImport,
    exact: true,
  },
  {
    path: '/formule/:id/edit',
    loader: () =>
      import('src/view/formule/form/FormuleFormPage'),
    permissionRequired: permissions.formuleEdit,
    exact: true,
  },
  {
    path: '/formule/:id',
    loader: () =>
      import('src/view/formule/view/FormuleViewPage'),
    permissionRequired: permissions.formuleRead,
    exact: true,
  },

  {
    path: '/membership',
    loader: () =>
      import('src/view/membership/list/MembershipListPage'),
    permissionRequired: permissions.membershipRead,
    exact: true,
  },
  {
    path: '/membership/new',
    loader: () =>
      import('src/view/membership/form/MembershipFormPage'),
    permissionRequired: permissions.membershipCreate,
    exact: true,
  },
  {
    path: '/membership/importer',
    loader: () =>
      import(
        'src/view/membership/importer/MembershipImporterPage'
      ),
    permissionRequired: permissions.membershipImport,
    exact: true,
  },
  {
    path: '/membership/:id/edit',
    loader: () =>
      import('src/view/membership/form/MembershipFormPage'),
    permissionRequired: permissions.membershipEdit,
    exact: true,
  },
  {
    path: '/membership/:id',
    loader: () =>
      import('src/view/membership/view/MembershipViewPage'),
    permissionRequired: permissions.membershipRead,
    exact: true,
  },

  {
    path: '/campaign',
    loader: () =>
      import('src/view/campaign/list/CampaignListPage'),
    permissionRequired: permissions.campaignRead,
    exact: true,
  },
  {
    path: '/campaign/new',
    loader: () =>
      import('src/view/campaign/form/CampaignFormPage'),
    permissionRequired: permissions.campaignCreate,
    exact: true,
  },
  {
    path: '/campaign/importer',
    loader: () =>
      import(
        'src/view/campaign/importer/CampaignImporterPage'
      ),
    permissionRequired: permissions.campaignImport,
    exact: true,
  },
  {
    path: '/campaign/:id/edit',
    loader: () =>
      import('src/view/campaign/form/CampaignFormPage'),
    permissionRequired: permissions.campaignEdit,
    exact: true,
  },
  {
    path: '/campaign/:id',
    loader: () =>
      import('src/view/campaign/view/CampaignViewPage'),
    permissionRequired: permissions.campaignRead,
    exact: true,
  },
  {
    path: '/objectif',
    loader: () =>
      import('src/view/objectif/list/ObjectifListPage'),
    permissionRequired: permissions.objectifRead,
    exact: true,
  },
  {
    path: '/objectif/new/:name',
    loader: () =>
      import('src/view/objectif/form/ObjectifFormPage'),
    permissionRequired: permissions.objectifCreate,
    exact: true,
  },
  {
    path: '/objectif/importer',
    loader: () =>
      import(
        'src/view/objectif/importer/ObjectifImporterPage'
      ),
    permissionRequired: permissions.objectifImport,
    exact: true,
  },
  {
    path: '/objectif/:id/edit',
    loader: () =>
      import('src/view/objectif/form/ObjectifFormPage'),
    permissionRequired: permissions.objectifEdit,
    exact: true,
  },
  {
    path: '/objectif/:id',
    loader: () =>
      import('src/view/objectif/view/ObjectifViewPage'),
    permissionRequired: permissions.objectifRead,
    exact: true,
  },
  {
    path: '/entree',
    loader: () =>
      import('src/view/entree/list/EntreeListPage'),
    permissionRequired: permissions.entreeRead,
    exact: true,
  },
  {
    path: '/entree/new',
    loader: () =>
      import('src/view/entree/form/EntreeFormPage'),
    permissionRequired: permissions.entreeCreate,
    exact: true,
  },
  {
    path: '/entree/importer',
    loader: () =>
      import('src/view/entree/importer/EntreeImporterPage'),
    permissionRequired: permissions.entreeImport,
    exact: true,
  },
  {
    path: '/entree/:id/edit',
    loader: () =>
      import('src/view/entree/form/EntreeFormPage'),
    permissionRequired: permissions.entreeEdit,
    exact: true,
  },
  {
    path: '/entree/:id',
    loader: () =>
      import('src/view/entree/view/EntreeViewPage'),
    permissionRequired: permissions.entreeRead,
    exact: true,
  },

  {
    path: '/depense',
    loader: () =>
      import('src/view/depense/list/DepenseListPage'),
    permissionRequired: permissions.depenseRead,
    exact: true,
  },
  {
    path: '/depense/new',
    loader: () =>
      import('src/view/depense/form/DepenseFormPage'),
    permissionRequired: permissions.depenseCreate,
    exact: true,
  },
  {
    path: '/depense/importer',
    loader: () =>
      import(
        'src/view/depense/importer/DepenseImporterPage'
      ),
    permissionRequired: permissions.depenseImport,
    exact: true,
  },
  {
    path: '/depense/:id/edit',
    loader: () =>
      import('src/view/depense/form/DepenseFormPage'),
    permissionRequired: permissions.depenseEdit,
    exact: true,
  },
  {
    path: '/depense/:id',
    loader: () =>
      import('src/view/depense/view/DepenseViewPage'),
    permissionRequired: permissions.depenseRead,
    exact: true,
  },

  {
    path: '/charge',
    loader: () =>
      import('src/view/charge/list/ChargeListPage'),
    permissionRequired: permissions.chargeRead,
    exact: true,
  },
  {
    path: '/charge/new',
    loader: () =>
      import('src/view/charge/form/ChargeFormPage'),
    permissionRequired: permissions.chargeCreate,
    exact: true,
  },
  {
    path: '/charge/importer',
    loader: () =>
      import('src/view/charge/importer/ChargeImporterPage'),
    permissionRequired: permissions.chargeImport,
    exact: true,
  },
  {
    path: '/charge/:id/edit',
    loader: () =>
      import('src/view/charge/form/ChargeFormPage'),
    permissionRequired: permissions.chargeEdit,
    exact: true,
  },
  {
    path: '/charge/:id',
    loader: () =>
      import('src/view/charge/view/ChargeViewPage'),
    permissionRequired: permissions.chargeRead,
    exact: true,
  },
  {
    path: '/category',
    loader: () =>
      import('src/view/category/list/CategoryListPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/category/new',
    loader: () =>
      import('src/view/category/form/CategoryFormPage'),
    permissionRequired: permissions.categoryCreate,
    exact: true,
  },
  {
    path: '/category/importer',
    loader: () =>
      import(
        'src/view/category/importer/CategoryImporterPage'
      ),
    permissionRequired: permissions.categoryImport,
    exact: true,
  },
  {
    path: '/category/:id/edit',
    loader: () =>
      import('src/view/category/form/CategoryFormPage'),
    permissionRequired: permissions.categoryEdit,
    exact: true,
  },
  {
    path: '/category/:id',
    loader: () =>
      import('src/view/category/view/CategoryViewPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/type-depense',
    loader: () =>
      import(
        'src/view/typeDepense/list/TypeDepenseListPage'
      ),
    permissionRequired: permissions.typeDepenseRead,
    exact: true,
  },
  {
    path: '/type-depense/new',
    loader: () =>
      import(
        'src/view/typeDepense/form/TypeDepenseFormPage'
      ),
    permissionRequired: permissions.typeDepenseCreate,
    exact: true,
  },
  {
    path: '/type-depense/importer',
    loader: () =>
      import(
        'src/view/typeDepense/importer/TypeDepenseImporterPage'
      ),
    permissionRequired: permissions.typeDepenseImport,
    exact: true,
  },
  {
    path: '/type-depense/:id/edit',
    loader: () =>
      import(
        'src/view/typeDepense/form/TypeDepenseFormPage'
      ),
    permissionRequired: permissions.typeDepenseEdit,
    exact: true,
  },
  {
    path: '/type-depense/:id',
    loader: () =>
      import(
        'src/view/typeDepense/view/TypeDepenseViewPage'
      ),
    permissionRequired: permissions.typeDepenseRead,
    exact: true,
  },

  {
    path: '/type-charge',
    loader: () =>
      import('src/view/typeCharge/list/TypeChargeListPage'),
    permissionRequired: permissions.typeChargeRead,
    exact: true,
  },
  {
    path: '/type-charge/new',
    loader: () =>
      import('src/view/typeCharge/form/TypeChargeFormPage'),
    permissionRequired: permissions.typeChargeCreate,
    exact: true,
  },
  {
    path: '/type-charge/importer',
    loader: () =>
      import(
        'src/view/typeCharge/importer/TypeChargeImporterPage'
      ),
    permissionRequired: permissions.typeChargeImport,
    exact: true,
  },
  {
    path: '/type-charge/:id/edit',
    loader: () =>
      import('src/view/typeCharge/form/TypeChargeFormPage'),
    permissionRequired: permissions.typeChargeEdit,
    exact: true,
  },
  {
    path: '/type-charge/:id',
    loader: () =>
      import('src/view/typeCharge/view/TypeChargeViewPage'),
    permissionRequired: permissions.typeChargeRead,
    exact: true,
  },

  {
    path: '/type-revenue',
    loader: () =>
      import(
        'src/view/typeRevenue/list/TypeRevenueListPage'
      ),
    permissionRequired: permissions.typeRevenueRead,
    exact: true,
  },
  {
    path: '/type-revenue/new',
    loader: () =>
      import(
        'src/view/typeRevenue/form/TypeRevenueFormPage'
      ),
    permissionRequired: permissions.typeRevenueCreate,
    exact: true,
  },
  {
    path: '/type-revenue/importer',
    loader: () =>
      import(
        'src/view/typeRevenue/importer/TypeRevenueImporterPage'
      ),
    permissionRequired: permissions.typeRevenueImport,
    exact: true,
  },
  {
    path: '/type-revenue/:id/edit',
    loader: () =>
      import(
        'src/view/typeRevenue/form/TypeRevenueFormPage'
      ),
    permissionRequired: permissions.typeRevenueEdit,
    exact: true,
  },
  {
    path: '/type-revenue/:id',
    loader: () =>
      import(
        'src/view/typeRevenue/view/TypeRevenueViewPage'
      ),
    permissionRequired: permissions.typeRevenueRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
