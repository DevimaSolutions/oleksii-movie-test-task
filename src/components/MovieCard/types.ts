import type { IMovieItemDto } from '@/data-transfer/dto';
import type { BoxProps } from '@mui/material';

export interface IMovieCardProps extends Omit<BoxProps, 'title'>, Omit<IMovieItemDto, 'id'> {}
