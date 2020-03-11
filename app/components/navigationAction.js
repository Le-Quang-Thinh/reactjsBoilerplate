import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingLeft: '10px',
    paddingRight: '10px',
    '&:hover': {
      borderBottom: '3px solid #d80f16',
    },
  },
});

const NavigationAction = ({ label }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>{label}</Typography>
    </div>
  );
};

export default NavigationAction;
NavigationAction.propTypes = {
  label: PropTypes.any,
};
