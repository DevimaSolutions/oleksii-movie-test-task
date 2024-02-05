import type { IMovieItemDto } from '@/data-transfer/dto';

export interface IMovieFormProps {
  movie: IMovieItemDto | null;
}

export interface IMovieFormData {
  id?: string;
  title: string;
  publishYear: number | null;
  posterImageUri?: string;
  file: File[] | null;
}
