import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    justify: "center",
  },
  name: {
    textAlign: "center",
  },
  text: {
    fontSize: "13px",
    color: "grey",
    textAlign: "center",
  },
  number: {
    textAlign: "center",
    fontSize: "17px",
  },
}));
