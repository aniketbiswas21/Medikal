import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "2%",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  blogMainContainer: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));
