import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    padding: 25,
    borderLeft: "8px solid #f50057",
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
    [theme.breakpoints.only("xs")]: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
    [theme.breakpoints.only("sm")]: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  },
  doctorName: {
    fontSize: "1.2rem",
    fontWeight: "700",
  },
  speciality: {
    fontWeight: "500",
  },
  bookButton: {
    backgroundColor: "#01A400",
    color: "white",
    "&:hover": {
      backgroundColor: "#2C5F2D",
    },
  },
  availableText: {
    color: "#000",
  },
}));
