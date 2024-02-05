import type { SvgIconProps } from '@mui/material/SvgIcon';

export interface ISvgProps extends SvgIconProps {
  direction?: 'up' | 'down' | 'left' | 'right';
}
