const styles = theme => ({
  main: {
    display: 'block',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 400
    }
  },
  paper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(1) * 8,
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(1)
  },
  form: {
    marginTop: theme.spacing(3),
    width: '100%'
  },
  submit: {
    marginTop: theme.spacing(3)
  }
});

export default styles;
