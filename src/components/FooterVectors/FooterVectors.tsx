import { Box } from '@mui/material';
import Image from 'next/image';

import footerVectors from '@/public/footer-vectors.svg';

import styles from './styles';

const FooterVectors = () => {
  return (
    <Box sx={styles.root}>
      <Image
        src={footerVectors}
        alt={'footer-vectors'}
        priority
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'top center',
        }}
      />
    </Box>
  );
};

export default FooterVectors;
