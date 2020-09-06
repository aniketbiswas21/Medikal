import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  registerContainer: {
    padding: 20,
  },

  registerButton: {
    backgroundColor: "#6A5ACD",
    color: "white",
    height: "50px",
    "&:hover": {
      backgroundColor: "#330066",
    },
  },
}));
