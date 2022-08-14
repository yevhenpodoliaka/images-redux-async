import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getImagesPage,
  getImagesQuery,
  getImagesItems,
  getImages,
  setQuery,
  resetPage,
} from '../redux/imagesSlice';
import Searchbar from './Searchbar/Searchbar';
import Gallery from './Gallery/Gallery';

export const App = () => {
  const dispatch=useDispatch()
  const items = useSelector(getImagesItems)
  const page = useSelector(getImagesPage)
  const query = useSelector(getImagesQuery)

  useEffect(() => {
  dispatch(getImages())
  },[query, page, dispatch])
  const onSubmit = (value) => {
    console.log(value);
    dispatch(resetPage())
    dispatch(setQuery(value));
}
  return (
    <>
      <Searchbar placeholder='search images...' onSubmit={onSubmit} />
      <Gallery items={items}/>
    </>
  );
};
