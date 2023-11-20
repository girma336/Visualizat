import React, { useEffect } from 'react'
import { useThunk } from '../redux/thunks/useThunk'
import getMatchingData, { getSearchData } from '../redux/thunks/fatchMatching'
import ChartData from '../components/ChartData'
import getData from '../redux/thunks/fetchAllData'

const Dashboard = () => {
  const [doFetchUser, isLoadingUser, loadingUserError] = useThunk(getMatchingData)
  const [doFetchData, isLoadingData, loadingDataError] = useThunk(getData)
  // const [doFetchSearch, isLoadingSearch, loadingSearchError] = useThunk(getSearchData)


  useEffect(() => {
      doFetchUser();
      doFetchData();
      // doFetchSearch()
  }, [doFetchData, doFetchUser]);

  return (
    <div className='relative flex flex-col'>
      <ChartData />
    </div>
  )
}

export default Dashboard