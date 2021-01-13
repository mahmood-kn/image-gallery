import React, { useState } from 'react';

const Search = ({ setSearchTerm }) => {
  const [term, setTerm] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(term);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='flex justify-center my-5 '>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type='text'
            placeholder='Search...'
            className='w-4/6 border border-gray-200 border-r-0 rounded px-3 py-2 shadow-md rounded-r-none focus:outline-none focus:border-gray-500'
          />
          <button className='text-lg w-1/6 rounded shadow-md bg-green-500 text-white font-semibold px-3 py-2 hover:bg-green-400 rounded-l-none focus:outline-none'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
