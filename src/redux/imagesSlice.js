import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchImg from '../service/apiService';
const initialState = {
  items: [],
  query: '',
  page: 1,
  status: null,
  error: null,
};

export const getImages = createAsyncThunk(
  'items/getImages',
  async (_, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    const { page, query } = state.images;
    try {
      const res = await fetchImg(query, page);
      await dispatch(setItems(res.hits));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
    resetPage(state) {
      state.page = 1;
    },
    setQuery(state, actions) {
      state.query = actions.payload;
    },
    setItems(state, actions) {
      state.items.push(...actions.payload);
    },
  },
  extraReducers: {
    [getImages.pending]: state => {
      console.log('pending');
      state.status = 'isLoading';
    },
    [getImages.fulfilled]: state => {
      console.log('fulfilled');
      state.status = 'fulfilled';
    },
    [getImages.rejected]: state => {
      console.log('rejected');
      state.status = 'rejected';
    },
  },
});

export const { incrementPage, resetPage, setQuery, setItems } =
  imagesSlice.actions;
export default imagesSlice.reducer;

// selector
export const getImagesItems = state => state.images.items;
export const getImagesQuery = state => state.images.query;
export const getImagesPage = state => state.images.page;
export const getFetchStatus = state => state.images.status;
