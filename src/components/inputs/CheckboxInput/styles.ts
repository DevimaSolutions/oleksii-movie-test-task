import { buttonBaseClasses, checkboxClasses, formControlLabelClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    [`& .${formControlLabelClasses.root}`]: {
      gap: theme.spacing(3),
    },
  },
  error: {
    [`& .${buttonBaseClasses.root}.${checkboxClasses.root}`]: {
      color: theme.palette.error.main,
    },
  },
} as const;

export default styles;
