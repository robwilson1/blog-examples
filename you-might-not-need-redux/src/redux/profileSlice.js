import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  error: null,
  isFetching: false
};

const fetchMockProfile = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    return data;
}

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async () => {
    const response = await fetchMockProfile();
    return response;
  }
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.isFetching = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
      });
  },
});

export const selectProfile = (state) => state.profile;

export default profileSlice.reducer;
