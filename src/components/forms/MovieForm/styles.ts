import { theme } from '@/constants';

const styles = {
  root: {
    display: 'flex',
    gap: '24px',
    marginTop: theme.spacing(11),
    width: '100%',
    height: '100%',
    flexDirection: 'column-reverse',
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(12),
      flexDirection: 'row',
      gap: '128px',
    },
  },
  form: {
    width: 'inherit',
    height: 'inherit',
  },
  dndWrapper: {
    width: '100%',
    height: '100%',
    aspectRatio: '1 / 1',
    [theme.breakpoints.up('lg')]: {
      width: '473px',
      height: '504px',
    },
  },
  deleteButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: theme.palette.common.white,
  },
  formWrapper: {},
  fieldsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(5),
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '362px',
      '& > div:last-of-type': {
        width: '216px',
      },
    },
  },
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(4),
    marginTop: '0px',
    marginBottom: '83px',
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(10),
      marginBottom: '0px',
    },
  },
  imageContainer: {
    flexShrink: 0,
    position: 'relative',
    width: '100%',
    height: '100%',
    '& > img': {
      borderRadius: '10px',
    },
  },
  button: {
    width: '100%',
    marginTop: '16px',
    [theme.breakpoints.up('lg')]: {
      width: '167px',
    },
  },
  numberField: {
    '& input[type=number]': {
      '-moz-appearance': 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
} as const;

export default styles;
