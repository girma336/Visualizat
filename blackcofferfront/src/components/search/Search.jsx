import React from 'react'

const Search = ({open}) => {
  return (
    <div className={`${open ? 'w-[82.8%]': 'w-[90%]'} fixed top-4 right z-50`}>
      <div className={`${open ? 'w-[82.8%]' : 'w-[90%]'} border border-gray-300 rounded-lg py-3 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500`}>
        search
      </div>
    </div>
  )
}

export default Search