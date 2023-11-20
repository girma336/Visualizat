
import { createAsyncThunk } from "@reduxjs/toolkit";

const getMatchingData = createAsyncThunk('matching/fetch', async () => {
  try {
    const response = await fetch('http://localhost:8000/api/v1/data/matching');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching matching data: ' + error.message);
  }
});

export const getSearchData = createAsyncThunk('search/fetch', async (search) => {
  try {
    const option = search.searchOption;
    const value = search.searchValue;
    const response = await fetch(`http://localhost:8000/api/v1/data/search?${option}=${value}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data, 'filtereds')
    return data;
  } catch (error) {
    throw new Error('Error fetching search data: ' + error.message);
  }
});

export default getMatchingData;