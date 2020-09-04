import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../../firebase/util";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    marginBottom: "10px",
  },
  media: {
    height: 140,
  },
});

export default function SingleReportPost({ post }) {
  const classes = useStyles();
  const [singlePost, setSinglePost] = useState(null);
  useEffect(() => {
    if (post) {
      db.doc(`/answers/${post?.answerRef}`)
        .get()
        .then((doc) => {
          setSinglePost(doc.data());
        });
    }
    // eslint-disable-next-line
  }, []);
  console.log(singlePost);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <video width="100%" controls>
          <source src={singlePost?.url} type="video/mp4" />
        </video>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {singlePost?.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
