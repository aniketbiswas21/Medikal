import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    "&:hover": {
      transition: "all 0.2s ease-out",
      boxShadow: "0px 6px 8px rgba(38, 38, 38, 0.2)",
      top: "-6px",
      border: "1px solid #cccccc",
    },
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    justify: "center",
  },
  name: {
    fontSize: "17px",
    fontWeight: "600",
  },
  field: {
    color: "grey",
    fontSize: "15px",
  },
  rating: {
    display: "flex",
    flexDirection: "row",
  },
  line: {
    width: "90%",
    padding: "1px",
    backgroundColor: "lightgrey",
    borderWidth: "0",
    margin: "0.7rem",
  },
  time: {
    color: "darkgrey",
    fontSize: "13px",
  },
}));
