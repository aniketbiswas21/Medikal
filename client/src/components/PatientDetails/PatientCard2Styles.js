import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  field: {
    textAlign: "center",
    fontSize: "17px",
  },
  value: {
    fontSize: "13px",
    color: "grey",
    textAlign: "center",
  },
  line: {
    width: "90%",
    padding: "1px",
    backgroundColor: "lightgrey",
    borderWidth: "0",
    margin: "1.1rem",
  },
}));
