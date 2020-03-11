import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import HeaderLogo from './headerLogo';
import HeaderNavbar from './navigationHeader';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '60px',
    padding: '10px 0',
    minHeight: '40px',
  },
  appbar: {
    display: 'flex',
    width: '100%',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.appbar}>
          <HeaderLogo />
          <HeaderNavbar />
        </div>
      </Container>
    </div>
  );
};

export default Header;
