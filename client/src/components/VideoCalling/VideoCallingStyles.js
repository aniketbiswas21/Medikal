import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#020001",
    height: "100vh",
    overflow: "hidden",
  },
  videoContainer: {
    display: "grid",
    placeItems: "center",
    height: "88vh",
    overflowY: "auto",
    overflowX: "hidden",
  },
  actionCenter: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: "12vh",
    backgroundColor: "#ffffff",
    [theme.breakpoints.only("xs")]: {
      height: "15vh",
    },
  },
  videoOffButton: {
    borderRadius: "50%",
    width: "65px",
    height: "65px",
    backgroundColor: "#ffffff",
  },
  videoOffButtonContained: {
    borderRadius: "50%",
    width: "65px",
    height: "65px",
    backgroundColor: "red",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "darkred",
    },
  },
}));
