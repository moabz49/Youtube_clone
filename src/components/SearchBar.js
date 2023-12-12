import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim() !== '') {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='rounded-[40px] border-[0.5px] border-neutral-500 pl-2'>
      <input
        className='w-[140px] outline-none border-none xs:w-[200px] md:w-[280px] xl:w-[320px] py-[3px] rounded-lg bg-transparent text-white placeholder:text-zinc-600 text-sm pl-4'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button type='submit' className='text-zinc-300 bg-neutral-800 border-neutral-500 border-[0.5px] px-[14px] py-[3px] rounded-r-[40px]' aria-label='search'>
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
