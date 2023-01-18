import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ElectionViewItem from 'src/view/election/view/ElectionViewItem';

function ObjectifView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.objectif.fields.number')}
        value={record.number}
      />
      <TextViewItem
        label={i18n('entities.objectif.fields.progression')}
        value={record.progression}
      />

      <TextViewItem
        label={i18n('entities.objectif.fields.title')}
        value={record.title}
      />

      <TextViewItem
        label={i18n('entities.objectif.fields.description')}
        value={record.description}
      />

      <TextViewItem
        label={i18n('entities.objectif.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.objectif.enumerators.status.${record.status}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.objectif.fields.year')}
        value={record.year}
      />

      <TextViewItem
        label={i18n('entities.objectif.fields.startDate')}
        value={record.startDate}
      />

      <TextViewItem
        label={i18n('entities.objectif.fields.endDate')}
        value={record.endDate}
      />

      <ElectionViewItem
        label={i18n('entities.objectif.fields.election')}
        value={record.election}
      />
    </ViewWrapper>
  );
}

export default ObjectifView;
