import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    objectFit: "contain",
    borderRadius: "4px 4px 0px 0px",
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  avatarContainer: {
    padding: 10,
  },
  avatarDiv: {
    flexBasis: 0,
  },
  profileText: {
    paddingLeft: 8,
    color: "#4D5760",
    fontSize: "0.9rem",
    fontWeight: "bolder",
  },
  dateText: {
    fontSize: "0.7rem",
    paddingLeft: 8,
    color: "#64707D",
  },
  blogTitle: {
    color: "#08090A",
    fontWeight: "bolder",
    fontSize: "1.6rem",
    marginLeft: 15,
    "&:hover": {
      color: "rgb(59 73 223)",
      cursor: "pointer",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.2rem",
    },
  },
  blogActions: {
    marginLeft: 15,
    marginRight: 15,
  },
}));
