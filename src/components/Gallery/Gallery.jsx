import {  useSelector } from 'react-redux';
import { getImagesItems } from '../../redux/imagesSlice';
import { Grid, Item, ItemImg } from './Gallery.styled';
export default function Gallery() {
    const items = useSelector(getImagesItems);
  return (
    <Grid>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <Item key={id}>
          <ItemImg src={webformatURL} alt={tags} />
        </Item>
      ))}
    </Grid>
  );
}
