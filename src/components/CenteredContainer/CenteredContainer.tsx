import { Box } from '@mui/material';

import { combineSx } from '@/utils';

import styles from './styles';

import type { BoxProps } from '@mui/material';

const CenteredContainer = ({ children, sx, ...props }: BoxProps) => {
  return (
    <Box sx={combineSx(styles.root, sx)} {...props}>
      <Box>{children}</Box>
    </Box>
  );
};

export default CenteredContainer;
