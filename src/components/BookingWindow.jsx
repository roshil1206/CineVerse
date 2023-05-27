import React, { useState } from 'react';
import useStyles from './BookingWindowStyle';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Button, Container } from '@material-ui/core';
import Screen from './Screen';

const BookingWindow = () => {
  const classes = useStyles();
  const [isHoverTab1, setIsHoverTab1] = useState(false);
  const [isHoverTab2, setIsHoverTab2] = useState(false);
  const [isSelectedTab1, setSelectedTab1] = useState(true);
  const [isSelectedTab2, setSelectedTab2] = useState(false);
  const [isPBHover, setIsPBHover] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHoverTab1(true);
  };
  const handleMouseLeave1 = () => {
    setIsHoverTab1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHoverTab2(true);
  };
  const handleMouseLeave2 = () => {
    setIsHoverTab2(false);
  };

  const handleMouseClick1 = () => {
    setSelectedTab1(true);
    setSelectedTab2(false);
  }

  const handleMouseClick2 = () => {
    setSelectedTab2(true);
    setSelectedTab1(false);
  }

  const handlePBMouseEnter = () => {
    setIsPBHover(true);
  };
  const handlePBMouseLeave = () => {
    setIsPBHover(false);
  };

  return (
    <Container>
      <Tabs className={classes.tabs}>
        <TabList className={classes.tabList}>
          <Tab 
                className={[
                  classes.tab, 
                  isHoverTab1 ? classes.tabHover : null,
                  isSelectedTab1 ? classes.tabSelected : null
                ]}
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
                onClick={handleMouseClick1}>
            Today
          </Tab>
          <Tab 
                className={[
                  classes.tab,
                  isHoverTab2 ? classes.tabHover : null,
                  isSelectedTab2 ? classes.tabSelected : null
                ]}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                onClick={handleMouseClick2}>
            Tomorrow
          </Tab>
        </TabList>
        <TabPanel className={[
                              classes.tabPanel,
                              isSelectedTab1 ? classes.tabPanelSelected : null
                            ]}>
          <Screen />
        </TabPanel>
        <TabPanel className={[
                              classes.tabPanel,
                              isSelectedTab2 ? classes.tabPanelSelected : null
                            ]}>
          <Screen />
        </TabPanel>
        <div style={{alignContent: "center", marginLeft: "40%"}}>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            onMouseEnter={handlePBMouseEnter}
            onMouseLeave={handlePBMouseLeave}
          >
            <b>PROCEED TO PAYMENT</b>
          </Button>
        </div>
      </Tabs>
    </Container>
  );
}

export default BookingWindow;
