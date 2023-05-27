import React, { useState } from 'react';
import useStyles from './ScreenStyle';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Container } from '@material-ui/core';
import Seat from './Seat';

const Screen = () => {
  const classes = useStyles();
  const leftRowTransform = -14;
  const leftRowSeatTransform = 20;
  const rightRowTransform = 8;
  const rightRowSeatTransform = -8;
  const [isHoverTab1, setIsHoverTab1] = useState(false);
  const [isHoverTab2, setIsHoverTab2] = useState(false);
  const [isHoverTab3, setIsHoverTab3] = useState(false);
  const [isSelectedTab1, setSelectedTab1] = useState(true);
  const [isSelectedTab2, setSelectedTab2] = useState(false);
  const [isSelectedTab3, setSelectedTab3] = useState(false);

  const rowName = ['A', 'B', 'C', 'D', 'E', 'F'].reverse()

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

  const handleMouseEnter3 = () => {
    setIsHoverTab3(true);
  };
  const handleMouseLeave3 = () => {
      setIsHoverTab3(false);
  };

  const handleMouseClick1 = () => {
    setSelectedTab1(true);
    setSelectedTab2(false);
    setSelectedTab3(false);
  }

  const handleMouseClick2 = () => {
    setSelectedTab1(false);
    setSelectedTab2(true);
    setSelectedTab3(false);
  }

  const handleMouseClick3 = () => {
    setSelectedTab1(false);
    setSelectedTab2(false);
    setSelectedTab3(true);
  }

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
            11 : 00 AM
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
            04 : 00 PM
          </Tab>
          <Tab 
                className={[
                  classes.tab,
                  isHoverTab3 ? classes.tabHover : null,
                  isSelectedTab3 ? classes.tabSelected : null
                ]}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
                onClick={handleMouseClick3}>
            08 : 00 PM
          </Tab>
        </TabList>
        <TabPanel className={[
                              classes.tabPanel,
                              isSelectedTab1 ? classes.tabPanelSelected : null
                            ]}>
          <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{display: "flex", marginTop: "5%"}}>
              {[...Array(6)].map((x, i) => {
                  return <div style={{ transform: "skew("+ (leftRowTransform+i) +"deg)", margin: "0 6px"}}>
                    {
                      [...Array(6)].map((x, j) => {
                        return <div style={{ transform: "skew("+ (leftRowSeatTransform-2*i) +"deg)"}}>
                          <Seat seatNo={rowName[j]+(i+1)}/>
                        </div>
                      }
                      )
                    }
                  </div>
                }
              )}
            </div>
            <div style={{display: "flex", marginTop: "5%", marginLeft: "70px"}}>
             {[...Array(6)].map((x, i) => {
                  return <div style={{ transform: "skew("+ (rightRowTransform+i) +"deg)", margin: "0 6px"}}>
                    {
                      [...Array(6)].map((x, j) => {
                        return <div style={{ transform: "skew("+ (rightRowSeatTransform-2*i) +"deg)"}}>
                          <Seat seatNo={rowName[j]+(i+7)}/>
                        </div>
                      }
                      )
                    }
                  </div>
                }
              )}
            </div>
          </div>
        </TabPanel>
        <TabPanel className={[
                              classes.tabPanel,
                              isSelectedTab2 ? classes.tabPanelSelected : null
                            ]}>
          <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{display: "flex", marginTop: "5%"}}>
              {[...Array(6)].map((x, i) => {
                  return <div style={{ transform: "skew("+ (leftRowTransform+i) +"deg)", margin: "0 6px"}}>
                    {
                      [...Array(6)].map((x, j) => {
                        return <div style={{ transform: "skew("+ (leftRowSeatTransform-2*i) +"deg)"}}>
                          <Seat seatNo={rowName[j]+(i+1)}/>
                        </div>
                      }
                      )
                    }
                  </div>
                }
              )}
            </div>
            <div style={{display: "flex", marginTop: "5%", marginLeft: "70px"}}>
             {[...Array(6)].map((x, i) => {
                  return <div style={{ transform: "skew("+ (rightRowTransform+i) +"deg)", margin: "0 6px"}}>
                    {
                      [...Array(6)].map((x, j) => {
                        return <div style={{ transform: "skew("+ (rightRowSeatTransform-2*i) +"deg)"}}>
                          <Seat seatNo={rowName[j]+(i+7)}/>
                        </div>
                      }
                      )
                    }
                  </div>
                }
              )}
            </div>
          </div>
        </TabPanel>
        <TabPanel className={[
                              classes.tabPanel,
                              isSelectedTab3 ? classes.tabPanelSelected : null
                            ]}>
          <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{display: "flex", marginTop: "5%"}}>
              {[...Array(6)].map((x, i) => {
                  return <div style={{ transform: "skew("+ (leftRowTransform+i) +"deg)", margin: "0 6px"}}>
                    {
                      [...Array(6)].map((x, j) => {
                        return <div style={{ transform: "skew("+ (leftRowSeatTransform-2*i) +"deg)"}}>
                          <Seat seatNo={rowName[j]+(i+1)}/>
                        </div>
                      }
                      )
                    }
                  </div>
                }
              )}
            </div>
            <div style={{display: "flex", marginTop: "5%", marginLeft: "70px"}}>
             {[...Array(6)].map((x, i) => {
                  return <div style={{ transform: "skew("+ (rightRowTransform+i) +"deg)", margin: "0 6px"}}>
                    {
                      [...Array(6)].map((x, j) => {
                        return <div style={{ transform: "skew("+ (rightRowSeatTransform-2*i) +"deg)"}}>
                          <Seat seatNo={rowName[j]+(i+7)}/>
                        </div>
                      }
                      )
                    }
                  </div>
                }
              )}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </Container>
  );
}

export default Screen;
