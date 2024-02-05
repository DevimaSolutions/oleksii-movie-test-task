import { Box, Typography } from '@mui/material';

import { combineSx } from '@/utils';

import styles from './styles';

import type { IContentHeaderProps } from './types';

const ContentHeader = ({
  mainTitle,
  mainActionComponent,
  secondaryActionComponent,
  sx,
  ...props
}: IContentHeaderProps) => {
  return (
    <Box sx={combineSx(styles.root, sx)} {...props}>
      <Box sx={styles.mainWrapper}>
        <Typography variant="h2">{mainTitle}</Typography>
        {mainActionComponent}
      </Box>
      {secondaryActionComponent}
    </Box>
  );
};

export default ContentHeader;
