import  { useState} from 'react';
import PropTypes from 'prop-types';
import { SearchWrap, Form, Btn, Input } from './Searchbar.styled';
import { FiSearch } from 'react-icons/fi';

export default function Searchbar( {onSubmit,placeholder}) {
  const[value,setValue]=useState('')

  const handlerChange = e => {
    setValue( e.target.value );
  };
  const handlerSubmit = e => {
    e.preventDefault();
   onSubmit(value);
    setValue( '' );
  };

    return (
      <SearchWrap>
        <Form onSubmit={handlerSubmit}>
          <Btn type="submit">
            <FiSearch />
          </Btn>

          <Input
            onChange={handlerChange}
            value={value}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder={placeholder}
          />
        </Form>
      </SearchWrap>
    );
  }

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};