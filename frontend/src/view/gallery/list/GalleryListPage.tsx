import React from 'react';
import { i18n } from 'src/i18n';
import GalleryListFilter from 'src/view/gallery/list/GalleryListFilter';
import GalleryListTable from 'src/view/gallery/list/GalleryListTable';
import GalleryListToolbar from 'src/view/gallery/list/GalleryListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function GalleryListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.gallery.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.gallery.list.title')}
        </PageTitle>

        <GalleryListToolbar />
        <GalleryListFilter />
        <GalleryListTable />
      </ContentWrapper>
    </>
  );
}

export default GalleryListPage;
