import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    position: "sticky",
    top: 10,
  },
  filterTextGrid: {
    fontSize: "1.2rem",
    paddingLeft: 10,
  },
  filterItemsActive: {
    backgroundColor: "black",
    color: "white",
    padding: 10,
    borderRadius: 0,
  },
  filterItems: {
    backgroundColor: "white",
    color: "black",
    padding: 10,
    borderRadius: 0,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#D3D3D3",
    },
  },
}));
