import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    headerStyle: {
        background: "#052F58",
        color: "white",
        height: "10vh",
        maxWidth: "100%",
        margin: "0",
        display: "flex",
        alignItems: "center",
    },

    appName: {
        marginLeft: "50%",
    },

    profileName: {
        width: "100%",
        display: "flex",
        justifyContent:'flex-end',
        fontSize: "20px",
        paddingRight: "7%"
    },

    noDecoration: {
        textDecoration: 'none',
        color: 'inherit',
    }
}));

export default useStyles;