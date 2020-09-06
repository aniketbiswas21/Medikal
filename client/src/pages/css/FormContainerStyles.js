import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "5%",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  cardContainer: {
    [theme.breakpoints.down("md")]: {
      marginTop: "30%",
    },
  },
  formContainer: {
    marginTop: "5%",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
}));
