import { useRouter } from 'next/router';
import { useCallback } from 'react';

const useCreateMovie = () => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.push('/movies');
  }, [router]);

  return { handleBack };
};

export default useCreateMovie;
