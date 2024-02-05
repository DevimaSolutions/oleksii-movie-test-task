import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

import { useDispatch } from '@/hooks';
import { resetState } from '@/redux/movies/slice';

const useCreateMovie = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.push('/movies');
  }, [router]);

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  return { handleBack };
};

export default useCreateMovie;
