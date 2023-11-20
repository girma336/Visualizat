import React, { useEffect } from 'react'
import Search from '../components/search/Search'
import TableOfData from '../components/search/TableOfData'
import { getSearchData } from '../redux/thunks/fatchMatching'
import { useThunk } from '../redux/thunks/useThunk'

const SearchPage = ({open}) => {
  const [doFetchSearch, isLoadingSearch, loadingSearchError] = useThunk(getSearchData)
  useEffect(() => {
    doFetchSearch();
}, [doFetchSearch]);

  return (
    <div className='w-[90%] mr-auto ml-auto relative'>
        <Search open={open} />
        <TableOfData />
    </div>
  )
}

export default SearchPage