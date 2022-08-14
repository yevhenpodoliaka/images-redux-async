import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchImg from '../service/apiService';
const initialState = {
  items: [],
  query:'',
  page: 1,
  status: null,
  error:null,
};


export const getImages = createAsyncThunk('items/getImg', async (_, { rejectWithValue, dispatch, getState }) => {
  const state = getState()
  const { page, query } = state.images
try {
    const res = await fetchImg(query, page);
    await dispatch(setItems(res.hits));
} catch (error) {
  console.log(error)
}

})

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
    [getImages.pending]: () => {
      console.log('pending');
    },
    [getImages.fulfilled]: () => {
      console.log('fulfilled');
    },
    [getImages.rejected]: () => {
      console.log('rejected');
    },
  },
});


export const { incrementPage, resetPage, setQuery, setItems } = imagesSlice.actions;
export default imagesSlice.reducer;

// selector
export const getImagesItems = state => state.images.items;
export const getImagesQuery = state => state.images.query;
export const getImagesPage = state => state.images.page;
