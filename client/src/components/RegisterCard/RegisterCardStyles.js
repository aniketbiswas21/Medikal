import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  registerContainer: {
    padding: 20,
  },
  loginButton: {
    backgroundColor: "#42B72A",
    height: "50px",
    color: "white",
    "&:hover": {
      backgroundColor: "#006400",
    },
  },
  registerButton: {
    backgroundColor: "#6A5ACD",
    color: "white",
    height: "50px",
    "&:hover": {
      backgroundColor: "#330066",
    },
  },
  forgottenText: {
    color: "#6A5ACD",
  },
  forgottenTextContainer: {
    margin: "auto",
  },
}));
