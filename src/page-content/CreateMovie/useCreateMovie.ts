import { useEffect } from 'react';

import { useDispatch } from '@/hooks';
import { resetState } from '@/redux/movies/slice';

const useCreateMovie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);
};

export default useCreateMovie;
