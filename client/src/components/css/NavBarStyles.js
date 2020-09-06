import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(7),
  },
  topnav: {
    backgroundColor: "#ffffff",
    overflow: "hidden",
    height: "10vh",
  },
  link: {
    float: "center",
    display: "block",
    color: "#000",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "17px",
    height: "10vh",
    padding: "4vh",
    "&:hover": {
      backgroundColor: "slateblue",
      color: "#ffffff",
      transform: "scale(1.2)",
    },
  },
  btn: {
    float: "right",
    marginTop: "2vh",
    backgroundColor: "slateblue",
    color: "#ffffff",
    border: "0",
    fontSize: "15px",
    borderRadius: "5px",
    margin: "auto",
    justify: "center",
  },
}));
