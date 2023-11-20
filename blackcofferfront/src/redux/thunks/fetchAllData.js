import { createAsyncThunk } from "@reduxjs/toolkit";
const getData = createAsyncThunk('data/fetch', async () => {
  try {
    const response = await fetch('http://localhost:8000/api/v1/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching matching data: ' + error.message);
  }
});

export default getData;