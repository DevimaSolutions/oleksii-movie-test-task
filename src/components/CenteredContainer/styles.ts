const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 'inherit',
    height: '100%',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      maxWidth: '1440px',
    },
  },
} as const;

export default styles;
