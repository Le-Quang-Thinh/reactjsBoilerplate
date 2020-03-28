/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { deepOrange } from '@material-ui/core/colors';
import PropTypes from 'prop-types';

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
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Welcome(props) {
  const classes = useStyles();
  console.log(props);
  if (props === '') {
    const { user } = props.name;

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
          <p>{user.email}</p>
        </Grid>
        <Grid
          item
          xs={6}
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Avatar alt="" className={classes.orange}>
            {user.email}{' '}
          </Avatar>
        </Grid>
      </Grid>
    );
  }
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
