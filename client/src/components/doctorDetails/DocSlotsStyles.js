import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  btn: {
    border: "2px solid #000",
    textAlign: "center",
    fontSize: "14px",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.1)",
    },
  },
  heading: {
    padding: "1rem",
    fontWeight: "600",
  },
  time: {
    padding: "0.6rem",
  },
}));
