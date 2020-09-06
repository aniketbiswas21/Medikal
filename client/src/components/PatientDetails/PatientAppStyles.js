import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#ffffff",
  },
  paper: {
    margin: "0.6rem 0",
  },
  date: {
    fontSize: "15px",
    fontStyle: "bold",
  },
  time: {
    color: "grey",
    fontSize: "12px",
  },
  vcBtn: {
    backgroundColor: "#4ca456",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#2C5F2D",
    },
  },
}));
