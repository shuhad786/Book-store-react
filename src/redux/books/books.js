import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_BOOK = 'book/BookStore/BOOK_ADDED';
const REMOVE_BOOK = 'book/BookStore/BOOK_REMOVED';
const GET_BOOK = 'book/BookStore/GET_BOOK';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aqP6V44fqgOgWiHaV50H/books';
const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [...state];

    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.id !== action.payload);

    case `${GET_BOOK}/fulfilled`:
      return action.payload;

    default:
      return state;
  }
};

export const getBook = createAsyncThunk((GET_BOOK), async () => {
  const response = await axios.get(baseUrl);
  const everything = response.data;
  const array = Object.keys(everything).map((id) => ({
    id,
    author: everything[id][0].author,
    title: everything[id][0].title,
    category: everything[id][0].category,
  }));
  return array;
});

export const addBook = createAsyncThunk((ADD_BOOK), async (payload, thunkApi) => {
  const {
    id,
    title,
    author,
    category,
  } = payload;
  await axios.post(baseUrl, {
    item_id: id,
    title,
    author,
    category,
  });
  thunkApi.dispatch(getBook());
});

export const removeBook = createAsyncThunk((REMOVE_BOOK), async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
  return id;
});

export default booksReducer;
