import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Welcome from './welcome';
import TabLogin from './tabInSignUp';

const useStyles = makeStyles(theme => ({
  list: {
    width: 400,
  },
  fullList: {
    width: 'auto',
  },
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

function FromSignUp(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  console.log(props);
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, true)}
      onKeyDown={toggleDrawer(side, true)}
    >
      <List>
        <ListItem>
          {props.auth.FormLogin ? (
            <Welcome name={props.auth.FormLogin} />
          ) : (
            <Welcome />
          )}
        </ListItem>
        <ListItem button>
          <TabLogin />
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  return (
    <div>
      <Avatar
        src="../../app/images/icon-512x512.png"
        onClick={toggleDrawer('right', true)}
      />
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {sideList('right')}
      </Drawer>
    </div>
  );
}

FromSignUp.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  auth: PropTypes.any,
};

const mapStateToProps = state => ({
  auth: state,
});

export default connect(
  mapStateToProps,
  null,
)(FromSignUp);
