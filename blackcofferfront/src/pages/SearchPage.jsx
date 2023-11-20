import React, { useEffect, useState } from 'react'
import Search from '../components/search/Search'
import TableOfData from '../components/search/TableOfData'
import { getSearchData } from '../redux/thunks/fatchMatching'
import { useThunk } from '../redux/thunks/useThunk'

const SearchPage = ({open}) => {
  const [searchOption, setSearchOption] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [doFetchSearch, isLoadingSearch, loadingSearchError] = useThunk(getSearchData)
  useEffect(() => {
    doFetchSearch({searchOption, searchValue});
}, [doFetchSearch, searchOption, searchValue]);

  return (
    <div className='w-[90%] mr-auto ml-auto relative'>
        <Search open={open} setSearchOption={setSearchOption} searchValue={searchValue} setSearchValue={setSearchValue} />
        <TableOfData />
    </div>
  )
}

export default SearchPage