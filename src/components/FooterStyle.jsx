import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    footer: {
        background: "#052F58",
        color: "white",
        height: "10vh",
        maxWidth: "100%",
        margin: "0",
        display: "flex",
        alignItems: "center",
    },


    cp: {
        fontSize: "0.7rem",
        marginLeft: "5%",
        width: "30%",
    },
}));

export default useStyles;