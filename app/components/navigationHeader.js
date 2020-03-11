import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FromSignUp from './drawerLeftsiteSignup';
import Navigation from './navigation';
import NavigationAction from './navigationAction';
import Search from './search';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '60px',
    justifyContent: 'space-between',
  },
  search: {
    backgroundColor: '#f9f0ec',
    color: theme.palette.primary.dark,
    fontWeight: 500,
    marginLeft: theme.spacing(1),
  },
}));

const HeaderNavbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navigation>
        <NavigationAction label="Anime" />
        <NavigationAction label="Movie" />
        <NavigationAction label="Tin tức" />
        <NavigationAction label="Video" />
        <NavigationAction label="Bảng xếp hạng" />
      </Navigation>
      <Search />
      <FromSignUp />
    </div>
  );
};

export default HeaderNavbar;
