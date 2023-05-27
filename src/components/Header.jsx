import React from 'react';

import useStyles from './HeaderStyle';
import { Container } from '@material-ui/core';

const Header = () => {
  const classes = useStyles();
  return (
    <Container className={classes.headerStyle}>
      <div>
        <h1 className={classes.appName}><i>CineVerse</i></h1>
      </div>
      <div className={classes.profileName}>
        <div style={{marginRight: '7vh'}}>
          <a href="#" className={classes.noDecoration}>Himanshu</a>
        </div>
        <a href="#" className={classes.noDecoration}>Sign Out</a>
      </div>
    </Container>
  );
};

export default Header;
