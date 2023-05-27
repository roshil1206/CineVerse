import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    tabs: {
      width: "80%",
      height: "75vh",
      minHeight: "350px",
      background: "#F3F3F3",
      margin: "0.5rem auto 1.5rem",
      color: "#E8F0F2",
      boxShadow: "0px 5px 5px 0px black",
    },
      
    tabList: {
      display: "flex",
      alignItems: "center",
      background: "#FFFFFF",
      justifyContent: "space-between",
      paddingLeft: "0px",
      color: "#000000",
      fontSize: "1.25rem",
    },
      
    tab: {
      width: "50%",
      padding: "0.75rem",
      listStyle: "none",
      textAlign: "center",
      cursor: "pointer",
      color: "gray",
    },
      
    tabSelected: {
      boxShadow: "0px 5px 5px 0px black",
      color: "black"
    },
      
    tabHover: {
      background: "rgba(50, 224, 196, 0.15)",
      color: "black"
    },
      
    tabPanel: {
      display: "none",
    },
      
    tabPanelSelected: {
      display: "block",
      fontSize: "2rem",
      textAlign: "center",
      color: "black"
    },

    paymentButton: {
      "& .MuiButtonBase-root": {
        background: "#052F58",
        color: "white",
        width: "30%",
        marginLeft: "35%"
      }
      
    },

    paymentButtonHover: {
      background: "white",
      color: "#052F58",
      border: "1px solid #052F58",
    }
}));

export default useStyles;

// reference: https://blog.logrocket.com/how-to-build-tab-component-react/