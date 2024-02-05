import { useRouter } from 'next/router';
import { useEffect, useCallback, useMemo } from 'react';

import { useDispatch, useSelector } from '@/hooks';
import { selectors as moviesSelectors, thunks as movieThunks } from '@/redux/movies';
import { getAuthManager } from '@/utils';

const useMovies = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isLoading, movies, total, page, perPage } = useSelector(moviesSelectors.moviesSelector);

  const handleChangePage = useCallback(
    (_event: React.ChangeEvent<unknown>, value: number) => {
      dispatch(movieThunks.getMovies({ page: value, perPage }));
    },
    [dispatch, perPage],
  );

  const pagesAmount = useMemo(() => Math.ceil(total / perPage), [total, perPage]);

  const handleAddMovie = useCallback(() => {
    router.push('/movies/create');
  }, [router]);

  const handleMovieRedirect = useCallback(
    (id: string) => () => {
      router.push(`/movies/${id}`);
    },
    [router],
  );

  const handleLogout = useCallback(() => {
    getAuthManager().then((auth) => auth.signOut());
  }, []);

  useEffect(() => {
    dispatch(movieThunks.getMovies({ page: 1, perPage: 8 }));
  }, [dispatch]);

  return {
    isLoading,
    movies,
    total,
    page,
    perPage,
    pagesAmount,
    handleChangePage,
    handleAddMovie,
    handleLogout,
    handleMovieRedirect,
  };
};

export default useMovies;
