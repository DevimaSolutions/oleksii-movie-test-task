const styles = {
  container: {
    minHeight: '100vh',
  },
  root: {
    paddingTop: '120px',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  contentWrapper: {
    minHeight: 'calc(100vh - 120px - 112px)',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '0px 24px',
    flex: 1,
  },
} as const;
export default styles;
