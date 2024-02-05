import { createAsyncThunk } from '@reduxjs/toolkit';

import { moviesService } from '@/services';
import { handleThunkApiError } from '@/utils';

export const getMovies = createAsyncThunk(
  'movies/get-movies',
  handleThunkApiError(moviesService.getMovies, { showToast: true }),
);

export const getMovie = createAsyncThunk(
  'movies/get-movie',
  handleThunkApiError(moviesService.getMovie, { showToast: true }),
);

export const createMovie = createAsyncThunk(
  'movies/create-movie',
  handleThunkApiError(moviesService.createMovie, { showToast: true }),
);

export const updateMovie = createAsyncThunk(
  'movies/update-movie',
  handleThunkApiError(moviesService.updateMovie, { showToast: true }),
);

export const deleteMovie = createAsyncThunk(
  'movies/delete-movie',
  handleThunkApiError(moviesService.deleteMovie, { showToast: true }),
);
