import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paperNormal: {
    padding: "1rem",
    height: "300px",
    borderTop: "8px solid #3f51b5",
    "&:hover": {
      transition: "all 0.2s ease-out",
      boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.2)",
      top: "-4px",
      border: "1px solid #cccccc",
    },
  },
  paperCritical: {
    padding: "1rem",
    height: "300px",
    borderTop: "8px solid red",
    "&:hover": {
      transition: "all 0.2s ease-out",
      boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.2)",
      top: "-4px",
      border: "1px solid #cccccc",
    },
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    justify: "center",
  },
  name: {
    textAlign: "center",
  },
  condition: {
    textAlign: "center",
  },
  btnCol: {
    textAlign: "right",
  },
  btn: {
    padding: "0.3rem",
    borderRadius: "1rem",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "grey",
      color: "white",
    },
    "&:focus": {
      outline: "none",
    },
  },
  actionGrid: {
    marginTop: "28%",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
}));
