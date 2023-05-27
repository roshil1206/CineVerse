import React from 'react';

const Scroll = ({children}) => {
    return (
        <div style={{ position: "fixed", width: "100%", marginTop: "5%", background: "#F3F3F3"}}>
          <div style={{ overflowY: "scroll", position: "relative", maxHeight: "80vh" }}>
            {children}
          </div>
        </div>
    );
};

export default Scroll;