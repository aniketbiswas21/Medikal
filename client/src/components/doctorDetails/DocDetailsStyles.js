import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    height: "30vh",
    padding: "1rem",
  },
  info: {
    fontSize: "18px",
    fontWeight: "600",
    letterSpacing: "2px",
    textDecoration: "underline",
    padding: "0.2rem",
  },
  address: {
    fontSize: "13px",
  },
  line: {
    width: "100%",
    borderWidth: "1px",
    color: "darkgrey",
  },
  heading: {
    fontSize: "14px",
    fontWeight: "600",
  },
  btn: {
    margin: "1.3rem",
    backgroundColor: "#2C5728",
    color: "#ffffff",
  },
}));
