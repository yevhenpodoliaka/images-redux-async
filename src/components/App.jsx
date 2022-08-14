import { useDispatch, useSelector } from 'react-redux';
import {
  getImagesItems,
  getFetchStatus,
  getImages,
  setQuery,
  resetPage,
  incrementPage,
} from '../redux/imagesSlice';
import Searchbar from './Searchbar/Searchbar';
import Gallery from './Gallery/Gallery';
import Button from 'Button/Button';

export const App = () => {
  const dispatch=useDispatch()
  const items = useSelector(getImagesItems)
  const status = useSelector(getFetchStatus);
  console.log(status)


  const onSubmit = (value) => {
    dispatch(resetPage())
    dispatch(setQuery(value));
     dispatch(getImages());
  }
  const handerClick = () => {
    dispatch(incrementPage());
      dispatch(getImages());

  }

  return (
    <>
      <Searchbar placeholder="search images..." onSubmit={onSubmit} />
      <Gallery items={items} />
      <Button
        text={status==='isLoading' ? 'loading ...' : 'Load More'}
        onClick={handerClick}
      />
    </>
  );
};
