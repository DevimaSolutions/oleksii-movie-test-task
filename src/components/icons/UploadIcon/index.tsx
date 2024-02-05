import { SvgIcon } from '@mui/material';

import { combineSx } from '@/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const UploadIcon = ({
  viewBox = '0, 0, 24, 24',
  width = '24',
  height = '24',
  fill = 'currentColor',
  direction = 'up',
  sx,
  ...rest
}: ISvgProps) => {
  return (
    <SvgIcon
      viewBox={viewBox}
      width={width}
      height={height}
      sx={combineSx(styles.root, sx, styles[direction])}
      {...rest}
    >
      <g clip-path="url(#clip0_3_346)">
        <path
          d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM17 11L15.59 9.59L13 12.17V4H11V12.17L8.41 9.59L7 11L12 16L17 11Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_3_346">
          <rect width="24" height="24" fill={fill} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default UploadIcon;
