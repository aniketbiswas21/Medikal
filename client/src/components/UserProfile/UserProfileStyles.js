import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(40),
    height: theme.spacing(52),
    justify: "center",
    paddingBottom: "0.8rem",
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
}));
