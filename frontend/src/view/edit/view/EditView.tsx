import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import moment from 'moment';

function EditView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.edit.fields.campaignTitle')}
        value={record.campaignTitle}
      />

      {record.campaignLastDateTime && <TextViewItem
        label={i18n(
          'entities.edit.fields.campaignLastDateTime',
        )}
        value={moment(record.campaignLastDateTime).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      <TextViewItem
        label={i18n('entities.edit.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.edit.enumerators.status.${record.status}`,
          )
        }
      />
    </ViewWrapper>
  );
}

export default EditView;
