import type { IMovieFormData } from '@/components/forms/MovieForm/types';

export interface IUpdateMovieRequest extends Omit<IMovieFormData, 'id'> {
  id: string;
}

export type ICreateMovieRequest = Omit<IUpdateMovieRequest, 'id'>;

export interface IGetMovieRequest {
  movieId: string;
}
