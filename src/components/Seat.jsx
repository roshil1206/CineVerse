import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './SeatStyle';

const Seat = ({seatNo}) => {
    const classes = useStyles();
    const [isClicked, setIsClicked] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const handleMouseClick = () => {
        setIsClicked(!isClicked);
        setIsHover(false);
    }

    const handleMouseEnter = () => {
        setIsHover(true & !isClicked);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    return (
        
            <Container 
                className={classes.seat}
                onClick={handleMouseClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className={[
                    isClicked ? classes.clicked : isHover ? classes.hover : null
                ]}>
                {seatNo}
                </div>
            </Container>
        
    )
};

export default Seat;