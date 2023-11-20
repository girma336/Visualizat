
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

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

export const getSearchData = createAsyncThunk('search/fetch', async () => {
  try {
    const response = await fetch('http://localhost:8000/api/v1/data/search', {
      // params: {
      // }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching Searching data: ' + error.message);
  }
});

export default getMatchingData;