import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import HeaderLogo from './headerLogo';
import HeaderNavbar from './navigationHeader';

// import Index from './customeSlider';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const styles = () => ({
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
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Container>
          <div className={classes.appbar}>
            <HeaderLogo />
            <HeaderNavbar />
          </div>
          {/* <Index /> */}
        </Container>
      </div>
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Header);
