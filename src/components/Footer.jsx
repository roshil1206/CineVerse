import React from 'react';

import {default as headerStyles} from './HeaderStyle';
import useStyles from './FooterStyle';
import { Container } from '@material-ui/core';

const Footer = () => {
  const headerClasses = headerStyles();
  const classes = useStyles();
  return (
    <Container className={classes.footer}>
      <div className={classes.cp}>
        <div>Tickets © 2023. All rights reserved.</div>
        <div style={{height: "1vh"}}></div>
        <div>Terms of Service | Privacy</div>
      </div>
      <div className={headerClasses.profileName}>
        <div style={{marginRight: '7vh'}}>
          <a href="#" className={headerClasses.noDecoration}>About</a>
        </div>
        <a href="#" className={headerClasses.noDecoration}>Contact</a>
      </div>
    </Container>
  );
};

export default Footer;
