import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  field: {
    padding: "0.3rem",
  },
  btn: {
    backgroundColor: "#42B72A",
    height: "50px",
    color: "white",
    "&:hover": {
      backgroundColor: "#006400",
    },
  },
  chatBoxMain: {
    height: "50vh",
    overflowY: "auto",
  },
  chatHeader: {},
}));
