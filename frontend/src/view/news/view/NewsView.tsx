import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import NewsCategoryViewItem from 'src/view/newsCategory/view/NewsCategoryViewItem';
import TagViewItem from 'src/view/tag/view/TagViewItem';

function NewsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.news.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.news.fields.type')}
        value={
          record.type &&
          i18n(
            `entities.news.enumerators.type.${record.type}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.news.fields.shortDescription')}
        value={record.shortDescription}
      />

      <TextViewItem
        label={i18n('entities.news.fields.description')}
        value={record.description}
      />

      <ImagesViewItem
        label={i18n('entities.news.fields.image')}
        value={record.image}
      />

      <FilesViewItem
        label={i18n(
          'entities.news.fields.attachements',
        )}
        value={record.attachements}
      />

      <NewsCategoryViewItem
        label={i18n('entities.news.fields.category')}
        value={record.category}
      />

      <TagViewItem
        label={i18n('entities.news.fields.tags')}
        value={record.tags}
      />

      <TextViewItem
        label={i18n('entities.news.fields.published')}
        value={
          record.published
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </ViewWrapper>
  );
}

export default NewsView;
