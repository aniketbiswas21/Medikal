import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    height: "40vh",
  },
  list: {
    width: "100%",
    maxWidth: "360",
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  text: {
    paddingLeft: "0.5rem",
  },
  field: {
    fontSize: "15px",
  },
  info: {
    marginTop: "-1rem",
    paddingLeft: "6.4rem",
    fontSize: "15px",
  },
  detail: {
    fontSize: "15px",
    paddingLeft: "6.4rem",
  },
}));
