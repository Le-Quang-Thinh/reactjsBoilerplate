import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Welcome() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={6}
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <p>Chào Khách</p>
      </Grid>
      <Grid
        item
        xs={6}
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
      >
        <Avatar alt="" className={classes.large} />
      </Grid>
    </Grid>
  );
}
