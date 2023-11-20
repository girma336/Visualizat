import React from 'react';

const Search = ({ open, setSearchOption, searchValue, setSearchValue }) => {
  const handleOptionChange = (event) => {
    setSearchOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={`${open ? 'w-[82.8%]' : 'w-[90%]'} fixed top-4 right z-50`}>
      <div className={`${open ? 'w-[82.8%]' : 'w-[90%]'} border border-gray-300 rounded-lg py-3 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500`}>
        <div className='flex justify-between'>
          <select className="border border-gray-300 rounded-md px-2 py-2" onChange={handleOptionChange}>
            <option value="">Select an Option</option>
            <option value="sector">Sector</option>
            <option value="topic">Topic</option>
            <option value="country">Country</option>
            <option value="region">Region</option>
            <option value="pestle">Pestle</option>
            <option value="end_year">End Year</option>
            <option value="source">Source</option>
          </select>
          <input
            className="border border-gray-300 rounded-md px-2 py-2"
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Enter a value"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;