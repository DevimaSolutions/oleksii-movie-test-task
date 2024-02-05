import { alpha } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: (isAccepted: boolean, isRejected: boolean) => ({
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundColor: 'transparent',
    ...(isAccepted && { border: `1px solid ${theme.palette.primary.main}` }),
    ...(isRejected && { border: `1px solid ${alpha(theme.palette.error.main, 0.5)}` }),
    ...(!isAccepted &&
      !isRejected && {
        backgroundImage: `repeating-linear-gradient(0deg, ${theme.palette.common.white}, ${theme.palette.common.white} 4px, transparent 4px, transparent 8px, ${theme.palette.common.white} 8px),
  repeating-linear-gradient(90deg, ${theme.palette.common.white}, ${theme.palette.common.white} 4px, transparent 4px, transparent 8px, ${theme.palette.common.white} 8px),
  repeating-linear-gradient(180deg, ${theme.palette.common.white}, ${theme.palette.common.white} 4px, transparent 4px,transparent 8px, ${theme.palette.common.white} 8px),
  repeating-linear-gradient(270deg, ${theme.palette.common.white}, ${theme.palette.common.white} 4px, transparent 4px, transparent 8px, ${theme.palette.common.white} 8px)`,
      }),
    backgroundSize: `2px 100%, 100% 2px, 2px 100% , 100% 2px`,
    backgroundPosition: `0 0, 0 0, 100% 0, 0 100%`,
    backgroundRepeat: `no-repeat`,
    '&:hover': {
      cursor: 'pointer',
    },
  }),
  formRoot: {
    width: '100%',
    height: '100%',
  },
  placeholderWrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(4),
  },
  placeholderLabel: {
    textAlign: 'center',
  },
  placeholderBrowse: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    cursor: 'pointer',
    fontSize: 'inherit',
    lineHeight: 'inherit',
  },
  buttonsWrapper: {
    display: 'flex',
    gap: theme.spacing(8),
    button: {
      width: '100%',
      padding: theme.spacing(6, 8),
    },
  },
  error: {
    fontSize: '12px',
  },
  acceptText: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    color: theme.palette.text.secondary,
  },
} as const;

export default styles;
