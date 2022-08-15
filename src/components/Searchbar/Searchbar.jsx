import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  getImages,
  setQuery,
  resetPage,
} from '../../redux/imagesSlice';
import { SearchWrap, Form, Btn, Input } from './Searchbar.styled';
import { FiSearch } from 'react-icons/fi';

export default function Searchbar() {

  const dispatch = useDispatch();


  const [value, setValue] = useState('');


  const handlerSubmit = e => {
    e.preventDefault();
      dispatch(resetPage());
      dispatch(setQuery(value));
      dispatch(getImages());
    setValue('');
  };

  return (
    <SearchWrap>
      <Form onSubmit={handlerSubmit}>
        <Btn type="submit">
          <FiSearch />
        </Btn>

        <Input
          onChange={(e)=>{setValue(e.target.value)}}
          value={value}
          type="text"
          autocomplete="off"
          autoFocus
          placeholder='search images ...'
        />
      </Form>
    </SearchWrap>
  );
}




