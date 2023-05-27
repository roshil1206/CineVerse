import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    tabs: {
        width: "80%",
        height: "47.5vh",
        minHeight: "200px",
        background: "#F3F3F3",
        margin: "2rem auto 1.5rem",
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
      },
       
      tab: {
        width: "50%",
        padding: "0.75rem",
        listStyle: "none",
        textAlign: "center",
        cursor: "pointer",
        color: "gray",
        fontSize: "1.2rem",
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
}));

export default useStyles;

// reference: https://blog.logrocket.com/how-to-build-tab-component-react/