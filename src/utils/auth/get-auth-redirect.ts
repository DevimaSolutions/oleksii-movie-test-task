import type { IFullUserResponse } from '@/data-transfer/responses';

const getAuthRedirect = (user?: IFullUserResponse | null) => {
  if (!user) {
    return '/sign-in';
  }

  // Handle additional redirects here

  return '/';
};

export default getAuthRedirect;
