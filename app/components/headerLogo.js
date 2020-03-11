import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    width: '130px',
    height: '40px',
  },
});

const HeaderLogo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src="https://vuighe.net/assets/img/logo.png"
        alt="Vui he"
      />
    </div>
  );
};

export default HeaderLogo;
