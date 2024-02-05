import type { BoxProps } from '@mui/material';

export interface IContentHeaderProps extends BoxProps {
  mainTitle: string;
  mainActionComponent?: React.ReactNode;
  secondaryActionComponent?: React.ReactNode;
}
