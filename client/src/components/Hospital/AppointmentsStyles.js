import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    height: "80vh",
    [theme.breakpoints.down("md")]: {
      marginTop: "5%",
    },
  },
  heading: {
    fontWeight: "600",
  },
  time: {
    fontSize: "13px",
    color: "grey",
  },
  list: {
    width: "100%",
    maxWidth: "360",
    padding: "-0.8rem",
    margin: "-1.2rem",
  },
}));
