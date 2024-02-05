import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/redux/store';

export const moviesStateSelector = ({ movies }: RootState) => movies;

export const moviesSelector = createSelector(
  moviesStateSelector,
  ({ movies, selectedMovie, isLoading, total, page, perPage }) => ({
    movies,
    selectedMovie,
    isLoading,
    total,
    page,
    perPage,
  }),
);
