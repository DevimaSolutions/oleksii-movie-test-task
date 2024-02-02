import type { IFullUserResponse } from '@/data-transfer/responses';

export interface ISignUpResponse {
  user: IFullUserResponse;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}
