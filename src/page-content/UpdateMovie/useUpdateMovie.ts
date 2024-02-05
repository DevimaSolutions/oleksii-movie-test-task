import { useEffect } from 'react';

import { useDispatch, useSelector } from '@/hooks';
import { selectors as moviesSelectors, thunks as movieThunks } from '@/redux/movies';
import { resetState } from '@/redux/movies/slice';

import type { IUpdateMovieProps } from './types';

const useUpdateMovie = ({ movieId }: IUpdateMovieProps) => {
  const dispatch = useDispatch();

  const { selectedMovie } = useSelector(moviesSelectors.moviesSelector);

  useEffect(() => {
    dispatch(movieThunks.getMovie({ movieId }));
    return () => {
      dispatch(resetState());
    };
  }, [dispatch, movieId]);

  return { movie: selectedMovie };
};

export default useUpdateMovie;
