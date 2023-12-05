import useDebounce from '@/hooks/useDebounceHook';
import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debounceSearch = useDebounce(handleSearch, 300); 

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    debounceSearch(value); 
  };

  return (
    <div className='flex justify-between items-center'>
      <p className='text-xl font-bold'>Products</p>
      <input
      type="text"
      placeholder="Search products"
      value={searchTerm}
      onChange={handleChange}
      className="border border-gray-300 rounded-md my-5 py-2 px-4 mb-4 outline-none"
    />
    </div>
  );
};

export default SearchBar;
