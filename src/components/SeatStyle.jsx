import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    seat: {
        width: "35px",
        height: "50px",
        marginBottom: "10px",
        marginTop: "-32px",
        background: "linear-gradient(to top, #761818, #761818, #761818, #761818, #761818, #B54041,  #F3686A)",
        alignItems: "top",
        justifyContent: "end",
        borderRadius: "7px",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
        fontSize: "1rem",
        padding: "0rem",
        cursor: "pointer",
    },

    clicked: {
        background: "rgba(255, 255, 255, 0.6)",
        position: "absolute",
        borderRadius: "7px",
        top: "0",
        width: "100%",
        height: "100%",
        content: '',
    },

    hover: {
        content: '',
        position: "absolute",
        top: "0",
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "7px",
    }
}));

export default useStyles;