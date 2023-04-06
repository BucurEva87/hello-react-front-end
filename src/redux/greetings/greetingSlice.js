import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async () => {
  const response = await fetch('http://127.0.0.1:3000/');
  const data = await response.json();

  return data;
});

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    content: null,
    error: null,
    isLoading: false,
    successful: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(fetchGreetings.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      successful: true,
      content: action.payload.greeting,
    }));
    builder.addCase(fetchGreetings.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error,
    }));
  },
});

export default greetingSlice.reducer;
