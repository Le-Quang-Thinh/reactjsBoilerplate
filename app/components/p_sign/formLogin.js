import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';
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

export default function FormLogin(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);
  const [values, setStates] = useState({ email: '', password: '' });
  const handleChange = event => {
    setChecked(event.target.checked);
  };

  const handleChangeText = e => {
    const { id, value } = e.target;
    setStates({ ...values, [id]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.loginWithEmail(values.email, values.password);
  };
  const preventDefault = event => event.preventDefault();
  // eslint-disable-next-line react/prop-types
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          required
          id="email"
          label="UserName"
          onChange={handleChangeText}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={handleChangeText}
        />
      </div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            value="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>ghi nhớ</span>
        </Grid>
        <Grid item xs={6} className={classes.pass_forgot}>
          <Typography>
            <Link onClick={preventDefault}>Quên mật khẩu</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.pass_forgot}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Đăng nhập
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
FormLogin.propTypes = {
  loginWithEmail: PropTypes.any.isRequired,
};
