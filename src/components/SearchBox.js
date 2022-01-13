import React from 'react';
import { setSearchField } from '../state/features/searchField';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  console.log('Searchbox');

  const searchFieldRedux = useSelector((state) => state.searchField.value);

  const dispatch = useDispatch();

  return (
    <div className='pa2'>
      <input
        onChange={(e) => dispatch(setSearchField(e.target.value))}
        value={searchFieldRedux}
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
      />
    </div>
  );
};

export default SearchBox;
