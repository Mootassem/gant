import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actions from 'src/modules/gallery/list/galleryListActions';

const GalleryListFilter = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.doFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default GalleryListFilter;