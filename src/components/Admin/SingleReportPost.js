import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { db } from "../../firebase/util";
import { useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
// import { CardHeader, Avatar } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    marginBottom: "10px",
  },
  media: {
    height: 140,
  },
});

function SingleReportPost({ post, user }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [owner, setsetOwner] = useState(null);

  const handleBan = (ref) => {
    setsetOwner(user.users.filter((user) => user.ref === post?.userRef)[0]);
    db.doc(`/answers/${ref}`)
      .update({
        isBan: true,
      })
      .then(() => {
        db.collection("reported")
          .where("answerRef", "==", ref)
          .get()
          .then((querySnapshot) => {
            console.log(querySnapshot.docs[0].data());
            db.doc(`/reported/${querySnapshot.docs[0].id}`)
              .delete()
              .then(() => console.log("deleted"));
          });
      })
      .then(() => handleClose());
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(owner);

  return (
    <>
      <Card className={classes.root}>
        {/* <CardHeader
          avatar={
            <Avatar
              src={owner?.userImage}
              aria-label="recipe"
              className={classes.avatar}
            ></Avatar>
          }
          title={owner?.userName}
        /> */}
        <CardActionArea>
          <video width="100%" controls>
            <source src={post?.url} type="video/mp4" />
          </video>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {post?.body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handleClickOpen} size="small" color="primary">
            Ban
          </Button>
        </CardActions>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>Are you sure to ban this task?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleBan(post?.answerRef)} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(SingleReportPost);
