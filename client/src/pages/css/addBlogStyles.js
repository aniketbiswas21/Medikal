import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "5%",
  },
  input: {
    display: "none",
  },
  btn: {
    backgroundColor: "#6A5ACD",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#330066",
    },
  },
  addFileGrid: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
  },
}));
