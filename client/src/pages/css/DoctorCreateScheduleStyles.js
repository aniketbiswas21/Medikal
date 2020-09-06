import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  container: {
    paddingTop: 40,
  },
  btn: {
    backgroundColor: "#6A5ACD",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#330066",
    },
  },
  mainContainer: {
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
    },
  },
}));
