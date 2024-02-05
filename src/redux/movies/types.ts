import type { IMovieItemDto } from '@/data-transfer/dto';

export default interface IMoviesState {
  movies: IMovieItemDto[];
  selectedMovie: IMovieItemDto | null;
  isLoading: boolean;
  total: number;
  page: number;
  perPage: number;
}
