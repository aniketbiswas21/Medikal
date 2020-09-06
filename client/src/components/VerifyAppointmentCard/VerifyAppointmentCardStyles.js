import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    padding: 25,
    borderLeft: "8px solid #006400",
    "&:hover": {
      transition: "all 0.2s ease-out",
      boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.2)",
      top: "-6px",
      border: "1px solid #cccccc",
    },
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  doctorName: {
    fontSize: "1.2rem",
    fontWeight: "700",
  },
  speciality: {
    fontWeight: "500",
  },
  bookButton: {
    backgroundColor: "#42B72A",
    color: "white",
    "&:hover": {
      backgroundColor: "#006400",
    },
  },
  rejectButton: {
    backgroundColor: "#BD2031",
    color: "white",
    "&:hover": {
      backgroundColor: "#B4151C",
    },
  },
  availableText: {
    color: "#01A400",
  },
}));
