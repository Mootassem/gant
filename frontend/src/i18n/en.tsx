const en = {
  common: {
    or: 'Or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
    filters: 'Filters',
    gallery: 'Gallery Imgaes',
    hightlight: 'Hightlight',
    attributes: 'Attributes',
    attributeoptions: 'Attribute options',
    administration: 'Administration',
    community: 'Community',
    news: 'News',
    membership: 'MemberShip',
    accounting: 'Accounting',
    configurations: 'Configurations',
  },

  app: {
    title: 'Jamaity',
  },

  api: {
    menu: 'API',
  },

  entities: {
    typeProjet: {
      name: 'typeProjet',
      label: 'TypeProjets',
      menu: 'TypeProjets',
      exporterFileName: 'typeProjet_export',
      list: {
        menu: 'TypeProjets',
        title: 'TypeProjets',
      },
      create: {
        success: 'TypeProjet successfully saved',
      },
      update: {
        success: 'TypeProjet successfully saved',
      },
      destroy: {
        success: 'TypeProjet successfully deleted',
      },
      destroyAll: {
        success: 'TypeProjet(s) successfully deleted',
      },
      edit: {
        title: 'Edit TypeProjet',
      },
      fields: {
        id: 'Id',
        nom: 'Nom',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {
        nom: 'Nom',
      },
      hints: {},
      new: {
        title: 'New TypeProjet',
      },
      view: {
        title: 'View TypeProjet',
      },
      importer: {
        title: 'Import TypeProjets',
        fileName: 'typeProjet_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    category: {
      name: 'category',
      label: 'Categories',
      menu: 'Categories',
      exporterFileName: 'category_export',
      list: {
        menu: 'Categories',
        title: 'Categories',
      },
      create: {
        success: 'Category successfully saved',
      },
      update: {
        success: 'Category successfully saved',
      },
      destroy: {
        success: 'Category successfully deleted',
      },
      destroyAll: {
        success: 'Category(s) successfully deleted',
      },
      edit: {
        title: 'Edit Category',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        slug: 'Slug',
        photo: 'Photo',
        metaKeywords: 'MetaKeywords',
        metaDescriptions: 'MetaDescriptions',
        status: 'Status',
        isFeature: 'IsFeature',
        serialRange: 'Serial',
        serial: 'Serial',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        status: {
          enable: 'Enable',
          disable: 'Disable',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Category',
      },
      view: {
        title: 'View Category',
      },
      importer: {
        title: 'Import Categories',
        fileName: 'category_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    palier: {
      name: 'Level',
      label: 'Levels',
      menu: 'Levels',
      exporterFileName: 'Level_export',
      list: {
        menu: 'Levels',
        title: 'Levels',
      },
      create: {
        success: 'Level successfully saved',
      },
      update: {
        success: 'Level successfully saved',
      },
      destroy: {
        success: 'Level successfully deleted',
      },
      destroyAll: {
        success: 'Level(s) successfully deleted',
      },
      edit: {
        title: 'Edit Level',
      },
      fields: {
        id: 'Id',
        title: 'Title',
        montantRange: 'Amount',
        montant: 'Amount',
        details: 'Details',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Level',
      },
      view: {
        title: 'View Level',
      },
      importer: {
        title: 'Import Levels',
        fileName: 'Level_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    projet: {
      name: 'Project',
      label: 'Projects',
      menu: 'Projects',
      exporterFileName: 'project_export',
      list: {
        menu: 'Projects',
        title: 'Projects',
      },
      create: {
        success: 'Project successfully saved',
      },
      update: {
        success: 'Project successfully saved',
      },
      destroy: {
        success: 'Project successfully deleted',
      },
      destroyAll: {
        success: 'Project(s) successfully deleted',
      },
      edit: {
        title: 'Edit Project',
      },
      fields: {
        id: 'Id',
        titre: 'Title',
        description: 'Description',
        details: 'Details',
        typeProjet: 'Type',
        statutProjet: 'Status',
        photoPrincipal: 'Main Photo',
        budgetRange: 'Budget',
        budget: 'Budget',
        lieu: 'Place',
        dateDebutProjetRange: 'Project Start Date',
        dateDebutProjet: 'Project Start Date',
        dateFinProjetRange: 'Project End Date',
        dateFinProjet: 'Project End Date',
        dateDebutDonRange: 'Donation Start Date',
        dateDebutDon: 'Donation Start Date',
        dateFinDonRange: 'Donation End Date',
        dateFinDon: 'Donation End Date',
        photos: 'Pictures',
        attachements: 'Attachments',
        votes: 'Votes',
        dons: 'Donation',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        typeProjet: {
          idee: 'Idea',
          projet_ligue: 'League Project',
          projet_ca: 'CA Project',
        },
        statutProjet: {
          draft: 'Draft',
          actif: 'Active',
          canceled: 'Canceled',
          closed: 'Closed',
        },
      },
      placeholders: {
        typeProjet: 'Type',
      },
      hints: {},
      new: {
        title: 'New Project',
      },
      view: {
        title: 'View Project',
      },
      importer: {
        title: 'Import Projects',
        fileName: 'project_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    votes: {
      name: 'Votes',
      label: 'Votes',
      menu: 'Votes',
      exporterFileName: 'votes_export',
      list: {
        menu: 'Votes',
        title: 'Votes',
      },
      create: {
        success: 'Votes successfully saved',
      },
      update: {
        success: 'Votes successfully saved',
      },
      destroy: {
        success: 'Votes successfully deleted',
      },
      destroyAll: {
        success: 'Votes(s) successfully deleted',
      },
      edit: {
        title: 'Edit Votes',
      },
      fields: {
        id: 'Id',
        adherent: 'Member',
        votesRange: 'Votes',
        votes: 'Votes',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Votes',
      },
      view: {
        title: 'View Votes',
      },
      importer: {
        title: 'Import Votes',
        fileName: 'votes_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    dons: {
      name: 'Donations',
      label: 'Donations',
      menu: 'Donations',
      exporterFileName: 'Donations_export',
      list: {
        menu: 'Donations',
        title: 'Donations',
      },
      create: {
        success: 'Donations successfully saved',
      },
      update: {
        success: 'Donations successfully saved',
      },
      destroy: {
        success: 'Donations successfully deleted',
      },
      destroyAll: {
        success: 'Donations(s) successfully deleted',
      },
      edit: {
        title: 'Edit Donations',
      },
      fields: {
        id: 'Id',
        adherent: 'Member',
        montantRange: 'Amount',
        montant: 'Amount',
        typePaiement: 'Payment type',
        attachements: 'Attachments',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        typePaiement: {
          paymee: 'Paymee',
          cb: 'Bank card',
          virement: 'Transfer',
          especes: 'Cash',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Donations',
      },
      view: {
        title: 'View Donations',
      },
      importer: {
        title: 'Import Donations',
        fileName: 'Donations_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    subcategories: {
      name: 'Sub Categories',
      label: 'Sub Categories',
      menu: 'Sub Categories',
      exporterFileName: 'Sub Categories_export',
      list: {
        menu: 'Sub Categories',
        title: 'Sub Categories',
      },
      create: {
        success: 'Sub Categories successfully saved',
      },
      update: {
        success: 'Sub Categories successfully saved',
      },
      destroy: {
        success: 'Sub Categories successfully deleted',
      },
      destroyAll: {
        success: 'Sub Categories(s) successfully deleted',
      },
      edit: {
        title: 'Edit Sub Categories',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        slug: 'Slug',
        status: 'Status',
        categoryId: 'Category',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        status: {
          enable: 'Enable',
          disable: 'Disable',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Sub Categories',
      },
      view: {
        title: 'View Sub Categories',
      },
      importer: {
        title: 'Import Sub Categories',
        fileName: 'Sub Categories_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    chieldCategories: {
      name: 'Chield Categories',
      label: 'Chield Categories',
      menu: 'Chield Categories',
      exporterFileName: 'Chield Categories_export',
      list: {
        menu: 'Chield Categories',
        title: 'Chield Categories',
      },
      create: {
        success: 'Chield Categories successfully saved',
      },
      update: {
        success: 'Chield Categories successfully saved',
      },
      destroy: {
        success: 'Chield Categories successfully deleted',
      },
      destroyAll: {
        success:
          'Chield Categories(s) successfully deleted',
      },
      edit: {
        title: 'Edit Chield Categories',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        slug: 'Slug',
        status: 'Status',
        categoryId: 'Category',
        subcategoryId: 'Sub Category',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        status: {
          enable: 'Enable',
          disable: 'Disable',
        },
      },
      placeholders: {
        subcategoryId: ' ',
      },
      hints: {},
      new: {
        title: 'New Chield Categories',
      },
      view: {
        title: 'View Chield Categories',
      },
      importer: {
        title: 'Import Chield Categories',
        fileName: 'Chield Categories_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    taxes: {
      name: 'taxes',
      label: 'Taxes',
      menu: 'Taxes',
      exporterFileName: 'taxes_export',
      list: {
        menu: 'Taxes',
        title: 'Taxes',
      },
      create: {
        success: 'Taxes successfully saved',
      },
      update: {
        success: 'Taxes successfully saved',
      },
      destroy: {
        success: 'Taxes successfully deleted',
      },
      destroyAll: {
        success: 'Taxes(s) successfully deleted',
      },
      edit: {
        title: 'Edit Taxes',
      },
      fields: {
        id: 'Id',
        name: 'Title',
        valueRange: 'Value',
        value: 'Tax',
        status: 'Status',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        status: {
          enable: 'Enable',
          disable: 'Disable',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Taxes',
      },
      view: {
        title: 'View Taxes',
      },
      importer: {
        title: 'Import Taxes',
        fileName: 'taxes_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    brands: {
      name: 'brands',
      label: 'Brands',
      menu: 'Brands',
      exporterFileName: 'brands_export',
      list: {
        menu: 'Brands',
        title: 'Brands',
      },
      create: {
        success: 'Brands successfully saved',
      },
      update: {
        success: 'Brands successfully saved',
      },
      destroy: {
        success: 'Brands successfully deleted',
      },
      destroyAll: {
        success: 'Brands(s) successfully deleted',
      },
      edit: {
        title: 'Edit Brands',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        slug: 'Slug',
        photo: 'Photo',
        status: 'Status',
        isPopular: 'Popular',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        status: {
          enable: 'Enable',
          disable: 'Disable',
        },
        isPopular: {
          enable: 'Enable',
          disable: 'Disable',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Brands',
      },
      view: {
        title: 'View Brands',
      },
      importer: {
        title: 'Import Brands',
        fileName: 'brands_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    edit: {
      name: 'edit',
      label: 'Edits',
      menu: 'Edits',
      exporterFileName: 'edit_export',
      list: {
        menu: 'Edits',
        title: 'Edits',
      },
      create: {
        success: 'Edit successfully saved',
      },
      update: {
        success: 'Edit successfully saved',
      },
      destroy: {
        success: 'Edit successfully deleted',
      },
      destroyAll: {
        success: 'Edit(s) successfully deleted',
      },
      edit: {
        title: 'Edit Edit',
      },
      fields: {
        id: 'Id',
        campaignTitle: 'Campaign Title',
        campaignLastDateTimeRange: 'Campaign Last DateTime',
        campaignLastDateTime: 'Campaign Last DateTime',
        status: 'Status',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        status: {
          enable: 'Enable',
          disable: 'Disable',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Edit',
      },
      view: {
        title: 'View Edit',
      },
      importer: {
        title: 'Import Edits',
        fileName: 'edit_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    campaignItems: {
      name: 'Campaign Offres',
      label: 'Campaign Offres',
      menu: 'Campaign Offres',
      exporterFileName: 'Campaign Offres_export',
      list: {
        menu: 'Campaign Offres',
        title: 'Campaign Offres',
      },
      create: {
        success: 'Campaign Offres successfully saved',
      },
      update: {
        success: 'Campaign Offres successfully saved',
      },
      destroy: {
        success: 'Campaign Offres successfully deleted',
      },
      destroyAll: {
        success: 'Campaign Offres(s) successfully deleted',
      },
      edit: {
        title: 'Edit Campaign Offres',
      },
      fields: {
        id: 'Id',
        status: 'Status',
        isFeature: 'Show Home Page',
        itemId: 'ItemId',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
        photo: 'photo',
        name: 'name',
        price: 'price',
      },
      enumerators: {
        status: {
          enable: 'Enable',
          disable: 'Disable',
        },
        isFeature: {
          publish: 'Publish',
          unpublish: 'Unpublish',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Campaign Offres',
      },
      view: {
        title: 'View Campaign Offres',
      },
      importer: {
        title: 'Import Campaign Offres',
        fileName: 'Campaign Offres_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    gallery: {
      name: 'gallery',
      label: 'Galleries',
      menu: 'Galleries',
      exporterFileName: 'gallery_export',
      list: {
        menu: 'Galleries',
        title: 'Galleries',
      },
      create: {
        success: 'Gallery successfully saved',
      },
      update: {
        success: 'Gallery successfully saved',
      },
      destroy: {
        success: 'Gallery successfully deleted',
      },
      destroyAll: {
        success: 'Gallery(s) successfully deleted',
      },
      edit: {
        title: 'Edit Gallery',
      },
      fields: {
        id: 'Id',
        photos: 'Photos',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Gallery',
      },
      view: {
        title: 'View Gallery',
      },
      importer: {
        title: 'Import Galleries',
        fileName: 'gallery_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    election: {
      name: 'election',
      label: 'Elections',
      menu: 'Elections',
      exporterFileName: 'election_export',
      list: {
        menu: 'Elections',
        title: 'Elections',
      },
      create: {
        success: 'Election successfully saved',
      },
      update: {
        success: 'Election successfully saved',
      },
      destroy: {
        success: 'Election successfully deleted',
      },
      destroyAll: {
        success: 'Election(s) successfully deleted',
      },
      edit: {
        title: 'Edit Election',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        members: 'Members',
        startDateRange: 'StartDate',
        startDate: 'StartDate',
        endDateRange: 'EndDate',
        endDate: 'EndDate',
        pv: 'Pv',
        objectifs: 'Goals',
        association: 'Association',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Election',
      },
      view: {
        title: 'View Election',
      },
      importer: {
        title: 'Import Elections',
        fileName: 'election_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    association: {
      name: 'association',
      label: 'Associations',
      menu: 'Associations',
      exporterFileName: 'association_export',
      list: {
        menu: 'Associations',
        title: 'Associations',
      },
      create: {
        success: 'Association successfully saved',
      },
      update: {
        success: 'Association successfully saved',
      },
      destroy: {
        success: 'Association successfully deleted',
      },
      destroyAll: {
        success: 'Association(s) successfully deleted',
      },
      edit: {
        title: 'Edit Association',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        logo: 'Logo',
        email: 'Email',
        phone: 'Phone',
        postalCodeRange: 'PostalCode',
        postalCode: 'PostalCode',
        city: 'City',
        country: 'Country',
        admins: 'Admins',
        elections: 'Elections',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Association',
      },
      view: {
        title: 'View Association',
      },
      importer: {
        title: 'Import Associations',
        fileName: 'association_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    newsCategory: {
      name: 'newsCategory',
      label: 'NewsCategories',
      menu: 'NewsCategories',
      exporterFileName: 'newsCategory_export',
      list: {
        menu: 'NewsCategories',
        title: 'NewsCategories',
      },
      create: {
        success: 'NewsCategory successfully saved',
      },
      update: {
        success: 'NewsCategory successfully saved',
      },
      destroy: {
        success: 'NewsCategory successfully deleted',
      },
      destroyAll: {
        success: 'NewsCategory(s) successfully deleted',
      },
      edit: {
        title: 'Edit NewsCategory',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        news: 'News',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New NewsCategory',
      },
      view: {
        title: 'View NewsCategory',
      },
      importer: {
        title: 'Import NewsCategories',
        fileName: 'newsCategory_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    tag: {
      name: 'newsTag',
      label: 'NewsTags',
      menu: 'NewsTags',
      exporterFileName: 'newsTag_export',
      list: {
        menu: 'NewsTags',
        title: 'NewsTags',
      },
      create: {
        success: 'NewsTag successfully saved',
      },
      update: {
        success: 'NewsTag successfully saved',
      },
      destroy: {
        success: 'NewsTag successfully deleted',
      },
      destroyAll: {
        success: 'NewsTag(s) successfully deleted',
      },
      edit: {
        title: 'Edit NewsTag',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        news: 'News',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New NewsTag',
      },
      view: {
        title: 'View NewsTag',
      },
      importer: {
        title: 'Import NewsTags',
        fileName: 'newsTag_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    news: {
      name: 'news',
      label: 'News',
      menu: 'News',
      exporterFileName: 'news_export',
      list: {
        menu: 'News',
        title: 'News',
      },
      create: {
        success: 'News successfully saved',
      },
      update: {
        success: 'News successfully saved',
      },
      destroy: {
        success: 'News successfully deleted',
      },
      destroyAll: {
        success: 'News(s) successfully deleted',
      },
      edit: {
        title: 'Edit News',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        type: 'Type',
        shortDescription: 'ShortDescription',
        description: 'Description',
        image: 'Image',
        attachements: 'Attachements',
        category: 'Category',
        tags: 'Tags',
        published: 'Published',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        type: {
          news: 'News',
          appelOffre: 'AppelOffre',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New News',
      },
      view: {
        title: 'View News',
      },
      importer: {
        title: 'Import News',
        fileName: 'news_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    partner: {
      name: 'partner',
      label: 'Partners',
      menu: 'Partners',
      exporterFileName: 'partner_export',
      list: {
        menu: 'Partners',
        title: 'Partners',
      },
      create: {
        success: 'Partner successfully saved',
      },
      update: {
        success: 'Partner successfully saved',
      },
      destroy: {
        success: 'Partner successfully deleted',
      },
      destroyAll: {
        success: 'Partner(s) successfully deleted',
      },
      edit: {
        title: 'Edit Partner',
      },
      fields: {
        id: 'Id',
        acronym: 'Acronym',
        name: 'Name',
        email: 'Email',
        logo: 'Logo',
        postalAddress: 'PostalAddress',
        postalCode: 'PostalCode',
        city: 'City',
        country: 'Country',
        members: 'Members',
        type: 'Type',
        group: 'Group',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        type: {
          association: 'Association',
          funder: 'Funder',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Partner',
      },
      view: {
        title: 'View Partner',
      },
      importer: {
        title: 'Import Partners',
        fileName: 'partner_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    group: {
      name: 'group',
      label: 'Groups',
      menu: 'Groups',
      exporterFileName: 'group_export',
      list: {
        menu: 'Groups',
        title: 'Groups',
      },
      create: {
        success: 'Group successfully saved',
      },
      update: {
        success: 'Group successfully saved',
      },
      destroy: {
        success: 'Group successfully deleted',
      },
      destroyAll: {
        success: 'Group(s) successfully deleted',
      },
      edit: {
        title: 'Edit Group',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        logo: 'Logo',
        admin: 'Admin',
        members: 'Members',
        partners: 'Partners',
        type: 'Type',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        type: {
          administrative: 'Administrative',
          cultural: 'Cultural',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Group',
      },
      view: {
        title: 'View Group',
      },
      importer: {
        title: 'Import Groups',
        fileName: 'group_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    formule: {
      name: 'formule',
      label: 'Formules',
      menu: 'Formules',
      exporterFileName: 'formule_export',
      list: {
        menu: 'Formules',
        title: 'Formules',
      },
      create: {
        success: 'Formule successfully saved',
      },
      update: {
        success: 'Formule successfully saved',
      },
      destroy: {
        success: 'Formule successfully deleted',
      },
      destroyAll: {
        success: 'Formule(s) successfully deleted',
      },
      edit: {
        title: 'Edit Formule',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        amountRange: 'Amount',
        amount: 'Amount',
        membership: 'Membership',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Formule',
      },
      view: {
        title: 'View Formule',
      },
      importer: {
        title: 'Import Formules',
        fileName: 'formule_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    membership: {
      name: 'membership',
      label: 'Memberships',
      menu: 'Memberships',
      exporterFileName: 'membership_export',
      list: {
        menu: 'Memberships',
        title: 'Memberships',
      },
      create: {
        success: 'Membership successfully saved',
      },
      update: {
        success: 'Membership successfully saved',
      },
      destroy: {
        success: 'Membership successfully deleted',
      },
      destroyAll: {
        success: 'Membership(s) successfully deleted',
      },
      edit: {
        title: 'Edit Membership',
      },
      fields: {
        id: 'Id',
        status: 'Status',
        paymentMethod: 'PaymentMethod',
        formule: 'Formule',
        attachements: 'Attachements',
        member: 'Member',
        campaign: 'Campaign',
        amountRange: 'Amount',
        amount: 'Amount',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        status: {
          paid: 'Paid',
          waiting: 'Waiting',
        },
        paymentMethod: {
          cash: 'Cash',
          check: 'Check',
          bank: 'Bank',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Membership',
      },
      view: {
        title: 'View Membership',
      },
      importer: {
        title: 'Import Memberships',
        fileName: 'membership_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    campaign: {
      name: 'campaign',
      label: 'Campaigns',
      menu: 'Campaigns',
      exporterFileName: 'campaign_export',
      list: {
        menu: 'Campaigns',
        title: 'Campaigns',
      },
      create: {
        success: 'Campaign successfully saved',
      },
      update: {
        success: 'Campaign successfully saved',
      },
      destroy: {
        success: 'Campaign successfully deleted',
      },
      destroyAll: {
        success: 'Campaign(s) successfully deleted',
      },
      edit: {
        title: 'Edit Campaign',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        membership: 'Membership',
        status: 'Status',
        yearRange: 'Year',
        year: 'Year',
        startDateRange: 'StartDate',
        startDate: 'StartDate',
        endDateRange: 'EndDate',
        endDate: 'EndDate',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        status: {
          published: 'Published',
          draft: 'Draft',
          suspended: 'Suspended',
          archived: 'Archived',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Campaign',
      },
      view: {
        title: 'View Campaign',
      },
      importer: {
        title: 'Import Campaigns',
        fileName: 'campaign_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    objectif: {
      name: 'objectif',
      label: 'Objectifs',
      menu: 'Objectifs',
      exporterFileName: 'objectif_export',
      list: {
        menu: 'Objectifs',
        title: 'Objectifs',
      },
      create: {
        success: 'Objectif successfully saved',
      },
      update: {
        success: 'Objectif successfully saved',
      },
      destroy: {
        success: 'Objectif successfully deleted',
      },
      destroyAll: {
        success: 'Objectif(s) successfully deleted',
      },
      edit: {
        title: 'Edit Objectif',
      },
      fields: {
        id: 'Id',
        numberRange: 'Number',
        number: 'Number',
        title: 'Title',
        description: 'Description',
        status: 'Status',
        yearRange: 'Year',
        year: 'Year',
        progression: 'Progress',
        startDateRange: 'StartDate',
        startDate: 'StartDate',
        endDateRange: 'EndDate',
        endDate: 'EndDate',
        election: 'Election',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        status: {
          achieved: 'Achieved',
          waiting: 'Waiting',
          progress: 'In progress',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Objectif',
      },
      view: {
        title: 'View Objectif',
      },
      importer: {
        title: 'Import Objectifs',
        fileName: 'objectif_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    entree: {
      name: 'entree',
      label: 'Revenues',
      menu: 'Revenues',
      exporterFileName: 'entree_export',
      list: {
        menu: 'Revenues',
        title: 'Revenues',
      },
      create: {
        success: 'Revenue successfully saved',
      },
      update: {
        success: 'Revenue successfully saved',
      },
      destroy: {
        success: 'Revenue successfully deleted',
      },
      destroyAll: {
        success: 'Revenue(s) successfully deleted',
      },
      edit: {
        title: 'Edit Revenue',
      },
      fields: {
        id: 'Id',
        type: 'Type',
        sourceLink: 'Source Link',
        amountRange: 'Amount',
        amount: 'Amount',
        dateRange: 'Date',
        date: 'Date',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        type: {
          'e-commerce': 'E-commerce',
          boutique: 'Shop',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Revenue',
      },
      view: {
        title: 'View Revenue',
      },
      importer: {
        title: 'Import Revenues',
        fileName: 'entree_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    depense: {
      name: 'depense',
      label: 'Expenses',
      menu: 'Expenses',
      exporterFileName: 'depense_export',
      list: {
        menu: 'Expenses',
        title: 'Expenses',
      },
      create: {
        success: 'Expense successfully saved',
      },
      update: {
        success: 'Expense successfully saved',
      },
      destroy: {
        success: 'Expense successfully deleted',
      },
      destroyAll: {
        success: 'Expense(s) successfully deleted',
      },
      edit: {
        title: 'Edit Expense',
      },
      fields: {
        id: 'Id',
        facture: 'Billed',
        charge: 'Charge',
        amountRange: 'Amount',
        amount: 'Amount',
        type: 'Type',
        dateRange: 'Date',
        date: 'Date',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        type: {
          salaires: 'Salaries',
          loyers: 'Rents',
          impots: 'Taxes',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Expense',
      },
      view: {
        title: 'View Expense',
      },
      importer: {
        title: 'Import Expenses',
        fileName: 'depense_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    charge: {
      name: 'charge',
      label: 'Charges',
      menu: 'Charges',
      exporterFileName: 'charge_export',
      list: {
        menu: 'Charges',
        title: 'Charges',
      },
      create: {
        success: 'Charge successfully saved',
      },
      update: {
        success: 'Charge successfully saved',
      },
      destroy: {
        success: 'Charge successfully deleted',
      },
      destroyAll: {
        success: 'Charge(s) successfully deleted',
      },
      edit: {
        title: 'Edit Charge',
      },
      fields: {
        id: 'Id',
        type: 'Type',
        amountRange: 'Amount',
        amount: 'Amount',
        depense: 'Expense',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        type: {
          salaires: 'Salaries',
          loyers: 'Rents',
          impots: 'Taxes',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Charge',
      },
      view: {
        title: 'View Charge',
      },
      importer: {
        title: 'Import Charges',
        fileName: 'charge_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    product: {
      name: 'product',
      label: 'Products',
      menu: 'Products',
      exporterFileName: 'product_export',
      list: {
        menu: 'Products',
        title: 'Products',
      },
      create: {
        success: 'Product successfully saved',
      },
      update: {
        success: 'Product successfully saved',
      },
      destroy: {
        success: 'Product successfully deleted',
      },
      destroyAll: {
        success: 'Product(s) successfully deleted',
      },
      edit: {
        title: 'Edit Product',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        slug: 'Slug',
        tags: 'Tags',
        video: 'Video',
        specificationName: 'Specification Name',
        specificationDesciption: 'Specification Desciption',
        isSpecification: 'Is Specification',
        details: 'Details',
        photo: 'Photo',
        discountPriceRange: 'Discount Price',
        discountPrice: 'Current Price',
        previousPriceRange: 'Previous Price',
        previousPrice: 'Previous Price',
        stockRange: 'Stock',
        stock: 'Stock',
        metaKeywords: 'MetaKeywords',
        metaDesctiption: 'Short Description',
        status: 'Status',
        isType: 'Type',
        dateRange: 'Date',
        date: 'Date',
        itemType: 'Item Type',
        file: 'File',
        link: 'Link',
        fileType: 'File Type',
        taxe: 'Taxe',
        category: 'Category',
        subcategory: 'Sub Category',
        childcategory: 'Child Category',
        brand: 'Brand',
        gallery: 'Gallery',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        status: {
          enable: 'Enable',
          disable: 'Disable',
        },
        itemType: {
          physical: 'physical',
          digitale: 'Digitale',
        },
        fileType: {
          file: 'File',
          link: 'Link',
        },
        isType: {
          new_arrival: 'New Arrival',
          feature_product: 'Features Product',
          top_pdroduct: 'Top Product',
          best_product: 'Best Product',
          flash_deal_product: 'Flash Deal Product',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Product',
      },
      view: {
        title: 'View Product',
      },
      importer: {
        title: 'Import Products',
        fileName: 'product_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    shippingservice: {
      name: 'Shipping',
      label: 'Shipping',
      menu: 'Shipping',
      exporterFileName: 'shippingservice_export',
      list: {
        menu: 'Shipping',
        title: 'Shipping',
      },
      create: {
        success: 'Shipping service successfully saved',
      },
      update: {
        success: 'Shipping service successfully saved',
      },
      destroy: {
        success: 'Shipping service successfully deleted',
      },
      destroyAll: {
        success: 'Shipping service(s) successfully deleted',
      },
      edit: {
        title: 'Edit Shipping',
      },
      fields: {
        id: 'Id',
        name: 'Title',
        priceRange: 'Price',
        price: 'Shipping Cost',
        status: 'Status',
        minimumPriceRange: 'Minimum Price',
        minimumPrice: 'Minimum Price',
        isCondition: 'IsCondition',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        status: {
          enable: 'Enable',
          disable: 'Disable',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Shipping',
      },
      view: {
        title: 'View Shipping',
      },
      importer: {
        title: 'Import Shipping',
        fileName: 'shippingservice_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    typeDepense: {
      name: 'type Depense',
      label: 'Type Depenses',
      menu: 'Type Depenses',
      exporterFileName: 'Type Depense_export',
      list: {
        menu: 'Type Depenses',
        title: 'Type Depenses',
      },
      create: {
        success: 'Type Depense successfully saved',
      },
      update: {
        success: 'Type Depense successfully saved',
      },
      destroy: {
        success: 'Type Depense successfully deleted',
      },
      destroyAll: {
        success: 'Type Depense(s) successfully deleted',
      },
      edit: {
        title: 'Edit type Depense',
      },
      fields: {
        id: 'Id',
        nom: 'Nom',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New type Depense',
      },
      view: {
        title: 'View type Depense',
      },
      importer: {
        title: 'Import Type Depenses',
        fileName: 'Type Depense_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    typeCharge: {
      name: 'Type Charge',
      label: 'Type Charges',
      menu: 'Type Charges',
      exporterFileName: 'type_Charge_export',
      list: {
        menu: 'Type Charges',
        title: 'Type Charges',
      },
      create: {
        success: 'Type Charge successfully saved',
      },
      update: {
        success: 'Type Charge successfully saved',
      },
      destroy: {
        success: 'Type Charge successfully deleted',
      },
      destroyAll: {
        success: 'Type Charge(s) successfully deleted',
      },
      edit: {
        title: 'Edit TypeCharge',
      },
      fields: {
        id: 'Id',
        nom: 'Nom',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Type Charge',
      },
      view: {
        title: 'View Type Charge',
      },
      importer: {
        title: 'Import TypeCharges',
        fileName: 'Type Charge_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    typeRevenue: {
      name: 'Type Revenue',
      label: 'Type Revenues',
      menu: 'Type Revenues',
      exporterFileName: 'type_Revenue_export',
      list: {
        menu: 'Type Revenues',
        title: 'Type Revenues',
      },
      create: {
        success: 'Type Revenue successfully saved',
      },
      update: {
        success: 'Type Revenue successfully saved',
      },
      destroy: {
        success: 'Type Revenue successfully deleted',
      },
      destroyAll: {
        success: 'Type Revenue(s) successfully deleted',
      },
      edit: {
        title: 'Edit Type Revenue',
      },
      fields: {
        id: 'Id',
        nom: 'Nom',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Type Revenue',
      },
      view: {
        title: 'View Type Revenue',
      },
      importer: {
        title: 'Import TypeRevenues',
        fileName: 'Type Revenue_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    coupons: {
      name: 'coupons',
      label: 'Coupons',
      menu: 'Coupons',
      exporterFileName: 'coupons_export',
      list: {
        menu: 'Coupons',
        title: 'Coupons',
      },
      create: {
        success: 'Coupons successfully saved',
      },
      update: {
        success: 'Coupons successfully saved',
      },
      destroy: {
        success: 'Coupons successfully deleted',
      },
      destroyAll: {
        success: 'Coupons(s) successfully deleted',
      },
      edit: {
        title: 'Edit Coupons',
      },
      fields: {
        id: 'Id',
        title: 'Title',
        codeName: 'Code Name',
        discountRange: 'Discount',
        discount: 'Discount',
        noOfTimesRange: 'Number Of Times ',
        noOfTimes: 'Number Of Times ',
        status: 'Status',
        type: 'Type',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        status: {
          enable: 'Enable',
          disable: 'Disable',
        },
        type: {
          'Percentage (%)': 'Percentage (%)',
          'amount ( TND)': 'Amount ( TND)',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Coupons',
      },
      view: {
        title: 'View Coupons',
      },
      importer: {
        title: 'Import Coupons',
        fileName: 'coupons_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    transaction: {
      name: 'transaction',
      label: 'Transactions',
      menu: 'Transactions',
      exporterFileName: 'transaction_export',
      list: {
        menu: 'Transactions',
        title: 'Transactions',
      },
      create: {
        success: 'Transaction successfully saved',
      },
      update: {
        success: 'Transaction successfully saved',
      },
      destroy: {
        success: 'Transaction successfully deleted',
      },
      destroyAll: {
        success: 'Transaction(s) successfully deleted',
      },
      edit: {
        title: 'Edit Transaction',
      },
      fields: {
        id: 'Id',
        amountRange: 'Amount',
        amount: 'Amount',
        email: 'Email',
        tax: 'Tax',
        currencySign: 'CurrencySign',
        currencyValue: 'CurrencyValue',
        orderId: 'OrderId',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Transaction',
      },
      view: {
        title: 'View Transaction',
      },
      importer: {
        title: 'Import Transactions',
        fileName: 'transaction_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    trackOrder: {
      name: 'trackOrder',
      label: 'TrackOrders',
      menu: 'TrackOrders',
      exporterFileName: 'trackOrder_export',
      list: {
        menu: 'TrackOrders',
        title: 'TrackOrders',
      },
      create: {
        success: 'TrackOrder successfully saved',
      },
      update: {
        success: 'TrackOrder successfully saved',
      },
      destroy: {
        success: 'TrackOrder successfully deleted',
      },
      destroyAll: {
        success: 'TrackOrder(s) successfully deleted',
      },
      edit: {
        title: 'Edit TrackOrder',
      },
      fields: {
        id: 'Id',
        title: 'Title',
        item: 'Item',
        order: 'Order',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New TrackOrder',
      },
      view: {
        title: 'View TrackOrder',
      },
      importer: {
        title: 'Import TrackOrders',
        fileName: 'trackOrder_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    order: {
      name: 'order',
      label: 'Orders',
      menu: 'Orders',
      exporterFileName: 'order_export',
      list: {
        menu: 'Orders',
        title: 'Orders',
      },
      create: {
        success: 'Order successfully saved',
      },
      update: {
        success: 'Order successfully saved',
      },
      destroy: {
        success: 'Order successfully deleted',
      },
      destroyAll: {
        success: 'Order(s) successfully deleted',
      },
      edit: {
        title: 'Edit Order',
      },
      fields: {
        id: 'Id',
        userId: 'User',
        cart: 'Cart',
        shipping: 'Shipping',
        discountRange: 'Discount',
        discount: 'Discount',
        paymentMethod: 'PaymentMethod',
        taxe: 'Taxe',
        transactionNumber: 'TransactionNumber',
        orderStatus: 'OrderStatus',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        orderStatus: {
          pending: 'Pending',
          in_progress: 'In_progress',
          delivered: 'Delivered',
          canceled: 'Canceled',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Order',
      },
      view: {
        title: 'View Order',
      },
      importer: {
        title: 'Import Orders',
        fileName: 'order_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    state: {
      name: 'state',
      label: 'States',
      menu: 'States',
      exporterFileName: 'state_export',
      list: {
        menu: 'States',
        title: 'States',
      },
      create: {
        success: 'State successfully saved',
      },
      update: {
        success: 'State successfully saved',
      },
      destroy: {
        success: 'State successfully deleted',
      },
      destroyAll: {
        success: 'State(s) successfully deleted',
      },
      edit: {
        title: 'Edit State',
      },
      fields: {
        id: 'Id',
        name: 'State',
        priceRange: 'Price',
        price: 'Price',
        status: 'Status',
        type: 'Type',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        status: {
          enable: 'Enable',
          disable: 'Disable',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New State',
      },
      view: {
        title: 'View State',
      },
      importer: {
        title: 'Import States',
        fileName: 'state_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    attributeOptions: {
      name: 'attributeOptions',
      label: 'AttributeOptions',
      menu: 'AttributeOptions',
      exporterFileName: 'attributeOptions_export',
      list: {
        menu: 'AttributeOptions',
        title: 'AttributeOptions',
      },
      create: {
        success: 'AttributeOptions successfully saved',
      },
      update: {
        success: 'AttributeOptions successfully saved',
      },
      destroy: {
        success: 'AttributeOptions successfully deleted',
      },
      destroyAll: {
        success: 'AttributeOptions(s) successfully deleted',
      },
      edit: {
        title: 'Edit AttributeOptions',
      },
      fields: {
        id: 'Id',
        name: 'Option Name	',
        priceRange: 'Price',
        price: 'Price',
        keyword: 'Keyword',
        stock: 'stock',
        attributeId: 'Attribute',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New AttributeOptions',
      },
      view: {
        title: 'View AttributeOptions',
      },
      importer: {
        title: 'Import AttributeOptions',
        fileName: 'attributeOptions_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    cart: {
      name: 'cart',
      label: 'Carts',
      menu: 'Carts',
      exporterFileName: 'cart_export',
      list: {
        menu: 'Carts',
        title: 'Carts',
      },
      create: {
        success: 'Cart successfully saved',
      },
      update: {
        success: 'Cart successfully saved',
      },
      destroy: {
        success: 'Cart successfully deleted',
      },
      destroyAll: {
        success: 'Cart(s) successfully deleted',
      },
      edit: {
        title: 'Edit Cart',
      },
      fields: {
        id: 'Id',
        optionsId: 'OptionsId',
        attribute: 'Attribute',
        name: 'Name',
        slug: 'Slug',
        qtyRange: 'Qty',
        qty: 'Qty',
        priceRange: 'Price',
        price: 'Price',
        mainPriceRange: 'MainPrice',
        mainPrice: 'MainPrice',
        photo: 'Photo',
        itemType: 'Item Type',
        itemLN: 'ItemLN',
        itemLK: 'ItemLK',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Cart',
      },
      view: {
        title: 'View Cart',
      },
      importer: {
        title: 'Import Carts',
        fileName: 'cart_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    paymentsettings: {
      name: 'paymentsettings',
      label: 'Paymentsettings',
      menu: 'Paymentsettings',
      exporterFileName: 'paymentsettings_export',
      list: {
        menu: 'Paymentsettings',
        title: 'Paymentsettings',
      },
      create: {
        success: 'Paymentsettings successfully saved',
      },
      update: {
        success: 'Paymentsettings successfully saved',
      },
      destroy: {
        success: 'Paymentsettings successfully deleted',
      },
      destroyAll: {
        success: 'Paymentsettings(s) successfully deleted',
      },
      edit: {
        title: 'Edit Paymentsettings',
      },
      fields: {
        id: 'Id',
        name: 'Sandbox URL',
        information: 'vendor',
        uniqueKeywords: 'Token',
        photo: 'Photo',
        text: 'Live URL',
        status: 'Statut',
        type: 'Type',
        createdAt: 'Créé à',
        updatedAt: 'Mis à jour à',
        createdAtRange: 'Créé à',
      },
      enumerators: {
        status: {
          enable: 'Enable',
          disable: 'Disable',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Paymentsettings',
      },
      view: {
        title: 'View Paymentsettings',
      },
      importer: {
        title: 'Import Paymentsettings',
        fileName: 'paymentsettings_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    review: {
      name: 'review',
      label: 'Reviews',
      menu: 'Reviews',
      exporterFileName: 'review_export',
      list: {
        menu: 'Reviews',
        title: 'Reviews',
      },
      create: {
        success: 'Review successfully saved',
      },
      update: {
        success: 'Review successfully saved',
      },
      destroy: {
        success: 'Review successfully deleted',
      },
      destroyAll: {
        success: 'Review(s) successfully deleted',
      },
      edit: {
        title: 'Edit Review',
      },
      fields: {
        id: 'Id',
        review: 'Review',
        ratingRange: 'Rating',
        rating: 'Rating',
        status: 'Status',
        subject: 'Subject',
        item: 'Item',
        user: 'User',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        status: {
          enable: 'Enable',
          disable: 'Disable',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Review',
      },
      view: {
        title: 'View Review',
      },
      importer: {
        title: 'Import Reviews',
        fileName: 'review_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    attributes: {
      name: 'attributes',
      label: 'Attributes',
      menu: 'Attributes',
      exporterFileName: 'attributes_export',
      list: {
        menu: 'Attributes',
        title: 'Attributes',
      },
      create: {
        success: 'Attributes successfully saved',
      },
      update: {
        success: 'Attributes successfully saved',
      },
      destroy: {
        success: 'Attributes successfully deleted',
      },
      destroyAll: {
        success: 'Attributes(s) successfully deleted',
      },
      edit: {
        title: 'Edit Attributes',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        itemId: 'ItemId',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Attributes',
      },
      view: {
        title: 'View Attributes',
      },
      importer: {
        title: 'Import Attributes',
        fileName: 'attributes_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    adherent: {
      label: 'adherent Role',
      description: 'adherent role access',
    },
    member: {
      label: 'Member',
      description: 'Member role access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      sector: 'Sector',
      employer: 'Employer',
      profession: 'Profession',
      address: 'Address',
      birthDate: 'Birth Date',
      maritalStatus: 'Marital Status',
      facebookLink: 'Facebook Link',
      sponsor: 'Sponsor',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    sector: {
      AGRO_ALIMENTAIRE: 'Food industry',
      ASSURANCES: 'Assurance',
      AUDIOVISUEL: 'Audio-visual',
      BANCAIRE: 'Banking',
      CHIMIE: 'Chemistry',
      COMPOSANTS_AUTOMOBILES: 'Automotive components',
      DISTRIBUTION: 'Distribution',
      DISTRIBUTION_AUTOMOBILE: 'Automotive Distribution',
      DIVERS: 'Various',
      FINANCIER: 'Financial',
      HOLDING: 'Holding',
      IMMOBILIER: 'Real estate',
      INDUSTRIEL: 'Industrial',
      LEASING: 'Leasing',
      LOGISTIQUE_TRANSPORT: 'Logistics and transport',
      PHARMACEUTIQUE: 'Pharmaceutical',
      SANTÉ: 'Health',
      TOURSIME: 'Tourism',
      INFORMATION_TECHNOLOGY: 'Information Technology',
    },
    maritalStatus: {
      célébataire: 'Single',
      marié: 'Married',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
      inactive: 'Inactive',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint: 'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url: 'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Dark',
      light: 'Light',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'Novembre',
        12: 'December',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
      objectif: 'Objectives by status',
      projectS: 'Projects by status',
      projectT: 'Projects by type',
      adherent: 'Number of members',
      news: 'Number of news',
      project: 'Number of projects',
      partner: 'Number of partners',
      nodata: 'no data to display',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },

  // See https://github.com/jquense/yup#using-a-adherent-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min: '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max: '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint: 'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    items_per_page: '/ page',
    jump_to: 'Goto',
    jump_to_confirm: 'confirm',
    page: '',

    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
  },
};

export default en;
