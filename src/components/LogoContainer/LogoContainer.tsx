import { Icon } from '@mui/material';
import Image from 'next/image';

import { combineSx } from '@/utils';

import styles from './styles';

import type { ILogoContainerProps } from './types';

const LogoContainer = ({ src, alt, sx, ...props }: ILogoContainerProps) => {
  return (
    <Icon sx={combineSx(styles.root, sx)} {...props}>
      <Image src={src} alt={alt} fill priority />
    </Icon>
  );
};

export default LogoContainer;
