import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  loginContainer: {
    padding: 20,
  },
  loginButton: {
    backgroundColor: "#6A5ACD",
    color: "white",
    height: "50px",
    "&:hover": {
      backgroundColor: "#330066",
    },
  },
  registerButton: {
    backgroundColor: "#42B72A",
    height: "50px",
    color: "white",
    "&:hover": {
      backgroundColor: "#006400",
    },
  },
  forgottenText: {
    color: "#6A5ACD",
    cursor: "pointer",
  },
  forgottenTextContainer: {
    margin: "auto",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  sendMailBtn: {
    height: "55px",
    backgroundColor: "#42B72A",
    color: "white",
    "&:hover": {
      backgroundColor: "#006400",
    },
  },
}));
