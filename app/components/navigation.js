import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import PropTypes from 'prop-types';
import Button from './button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionWrapper: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    justifyContent: 'flex-start',
    '&:hover': {
      background: 'inherit',
      color: theme.palette.primary.dark,
    },
  },
  actionLinkWrapper: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    lineHeight: '100px',
    height: '100px',
    minWidth: '200px',

    '&:hover': {
      background: 'inherit',
    },

    '&:active': {
      background: '#f9f9f9',
    },
  },
}));

const Navigation = ({ link, children }) => {
  const classes = useStyles();

  const renderActions = React.Children.map(children, child => {
    const childWithProps = React.cloneElement(child, { link });

    if (link) {
      return (
        <Button
          component={Link}
          disableRipple
          className={classes.actionLinkWrapper}
        >
          {childWithProps}
        </Button>
      );
    }

    return (
      <Button disableRipple className={classes.actionWrapper}>
        {childWithProps}
      </Button>
    );
  });

  return <div className={classes.root}>{renderActions}</div>;
};

export default Navigation;
Navigation.propTypes = {
  children: PropTypes.any,
  link: PropTypes.any,
};
