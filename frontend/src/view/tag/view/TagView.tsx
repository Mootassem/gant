import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function TagView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.tag.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.tag.fields.description')}
        value={record.description}
      />
    </ViewWrapper>
  );
}

export default TagView;
