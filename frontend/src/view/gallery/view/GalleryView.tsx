import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';

function GalleryView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <ImagesViewItem
        label={i18n('entities.gallery.fields.photos')}
        value={record.photos}
      />
    </ViewWrapper>
  );
}

export default GalleryView;
