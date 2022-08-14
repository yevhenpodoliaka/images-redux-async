import { Grid, Item, ItemImg } from './Gallery.styled';
export default function Gallery({items}) {
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