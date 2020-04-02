import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 300,
    },
  },
  grind: {
    flexGrow: 1,
  },
  pass_forgot: {
    marginTop: '10px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  btn: {
    marginTop: '10px',
    textAlign: 'center',
    width: 300,
  },
}));

export default function FormSignUp(props) {
  const classes = useStyles();
  const [values, setStates] = React.useState({
    email: '',
    password: '',
    name: '',
  });

  const handleChangeText = e => {
    const { id, value } = e.target;
    setStates({ ...values, [id]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.registerWithEmail(values.email, values.password, values.name);
  };
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="email"
            label="email"
            onChange={handleChangeText}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={handleChangeText}
          />
          <TextField id="name" label="Name" onChange={handleChangeText} />
        </div>
      </form>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Đăng ký
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

FormSignUp.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  registerWithEmail: PropTypes.any.isRequired,
};
