import { createSlice } from '@reduxjs/toolkit';

import { getMovies, createMovie, updateMovie, deleteMovie, getMovie } from './thunks';

import type IMoviesState from './types';

const initialState: IMoviesState = {
  movies: [],
  selectedMovie: null,
  isLoading: false,
  total: 0,
  page: 1,
  perPage: 8,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload.data;
      state.total = payload.total;
      state.page = payload.page;
      state.perPage = payload.perPage;
    });
    builder.addCase(getMovies.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(getMovie.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getMovie.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.selectedMovie = payload;
    });
    builder.addCase(getMovie.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(createMovie.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createMovie.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.selectedMovie = payload;
    });
    builder.addCase(createMovie.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(updateMovie.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(updateMovie.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.selectedMovie = payload;
    });
    builder.addCase(updateMovie.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { resetState } = moviesSlice.actions;

export default moviesSlice.reducer;
