import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    objectFit: "contain",
    borderRadius: "4px 4px 0px 0px",
  },
  contentContainer: {
    padding: 50,
    [theme.breakpoints.down("md")]: {
      padding: 10,
    },
  },
  contentHeading: {
    color: "#08090A",
    fontWeight: "800",
    fontSize: "3rem",
    [theme.breakpoints.only("xs")]: {
      fontSize: "2rem",
      fontWeight: "700",
    },
  },
  textContainer: {
    marginTop: "3%",
  },
  contentText: {
    fontSize: "1.2rem",
  },
}));
