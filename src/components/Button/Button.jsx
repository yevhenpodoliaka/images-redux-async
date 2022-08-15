import { useDispatch, useSelector } from 'react-redux';
import {
  getFetchStatus,
  getImages,
  incrementPage,
  getImagesItems,
} from '../../redux/imagesSlice';
import {Btn} from './Button.styled'

export default function Button() {
  const dispatch = useDispatch();
  const status = useSelector(getFetchStatus);
  const images = useSelector(getImagesItems);
   
    
  const handlerClick = () => {
    dispatch(incrementPage());
    dispatch(getImages());
  };
  return (
     images.length > 0 && <Btn onClick={handlerClick}>
          {status === 'isLoading' ? 'loading ...' : 'Load More'}
      </Btn>
  );
}
