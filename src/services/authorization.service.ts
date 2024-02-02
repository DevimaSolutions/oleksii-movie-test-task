import { getAuthManager } from '@/utils';

import type { ISignUpRequest } from '@/data-transfer/requests';
import type { ISignUpResponse, ISuccessResponse } from '@/data-transfer/responses';
import type { IVerifyAccountData } from '@/redux/authorization/types';

const sendForgotPassword = async (email: string) => {
  const auth = await getAuthManager();
  const response = await auth.axios
    .post<ISuccessResponse>('/auth/password/forgot', { email })
    .then((res) => res.data);

  return response;
};

const verifyAccount = async ({ verificationToken, password }: IVerifyAccountData) => {
  const auth = await getAuthManager();
  const response = await auth.axios
    .post<ISuccessResponse>('/auth/password/reset', {
      verificationToken,
      password,
    })
    .then((res) => res.data);

  return response;
};

/**
 * @function - Makes POST request to get user data to authorize
 * @param params ISignUpRequest - create account form data
 * @returns ISignUpResponse - user with access and refresh tokens to authorize user into platform
 */
const signUp = async (params: ISignUpRequest) => {
  const auth = await getAuthManager();
  const response = await auth.axios
    .post<ISignUpResponse>('/auth/sign-up', { ...params })
    .then((res) => res.data);
  return response;
};

const authorizationService = {
  sendForgotPassword,
  verifyAccount,
  signUp,
};
export default authorizationService;
