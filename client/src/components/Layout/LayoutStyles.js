import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexbox: 1,
    overflow: "hidden",
  },
  paper: {
    height: "100vh",
    backgroundColor: "#ffffff",
    // width: "0vw",
    position: "fixed",
    left: 0,
    top: 0,
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  pic: {
    alignContent: "center",
  },
  user: {
    textAlign: "center",
    fontStyle: "bold",
  },
  navlinks: {
    justify: "center",
    textAlign: "center",
    paddingTop: "5rem",
  },
  activeLinks: {
    backgroundColor: "slateblue",
    color: "#ffffff",
    boxShadow: "1px 1px 2px grey",
  },
  links: {
    padding: "1rem 0",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "lightgrey",
      fontStyle: "bold",
      boxShadow: "1px 1px 2px grey",
    },
    "&:active": {
      backgroundColor: "slateblue !important",
      color: "#ffffff",
    },
  },
  dashboard: {
    borderRadius: "0",
    backgroundColor: "#ffffff",
    height: "60px",
    boxShadow: "0 4px 5px -6px black",
  },
  dash: {
    padding: "1rem",
  },
  icons: {
    display: "inline-block",
    float: "right",
    letterSpacing: "1.2rem",
  },
  container: {
    marginLeft: "250px",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginTop: 30,
    },
  },
}));
