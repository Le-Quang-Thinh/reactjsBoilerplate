import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
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

export default function FormSignUp() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');
  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField required id="standard-required" label="UserName" />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            id="standard-password-input"
            label="RePassword"
            type="password"
            autoComplete="current-password"
          />
          <TextField label="Name" />
          <TextField type="emal" required label="Emal" />
        </div>
      </form>
      <Grid container spacing={3}>
        <FormLabel component="legend">Giới tính</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
          className={classes.btn}
        >
          <Grid item xs={12}>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </Grid>
        </RadioGroup>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Đăng ký
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
