import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 210,
    borderTop: "8px solid slateblue",
    "&:hover": {
      transition: "all 0.2s ease-out",
      boxShadow: "0px 4px 8px #000",
      top: "-6px",
      border: "1px solid #cccccc",
    },
  },
  media: {
    height: 30,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Heading
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Lorem
        </Button>
        <Button size="small" color="primary">
          Ipsum
        </Button>
      </CardActions>
    </Card>
  );
}
