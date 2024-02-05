import { useRouter } from 'next/router';
import { useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from '@/hooks';
import { selectors as moviesSelectors, thunks as movieThunks } from '@/redux/movies';
import { resetState } from '@/redux/movies/slice';

import type { IUpdateMovieProps } from './types';

const useUpdateMovie = ({ movieId }: IUpdateMovieProps) => {
  const dispatch = useDispatch();

  const router = useRouter();

  const { selectedMovie } = useSelector(moviesSelectors.moviesSelector);

  const handleBack = useCallback(() => {
    router.push('/movies');
  }, [router]);

  useEffect(() => {
    dispatch(movieThunks.getMovie({ movieId }));
    return () => {
      dispatch(resetState());
    };
  }, [dispatch, movieId]);

  return { movie: selectedMovie, handleBack };
};

export default useUpdateMovie;
