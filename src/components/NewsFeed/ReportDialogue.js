import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import "./SinglePost.css";
import { connect } from "react-redux";
import { report } from "../../redux/actions/dataAction";

function ReportDialogue({ answerRef, userRef, report }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleReport = () => {
    report(answerRef, userRef);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        style={{ marginTop: "10px" }}
        variant="outlined"
        className="response response__btn"
        color="primary"
        onClick={handleClickOpen}
      >
        <span className="response__name">
          <i className="fas fa-flag-checkered"></i>
        </span>
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            Are you sure to report this task?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleReport} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapActionsToProps = {
  report,
};
export default connect(null, mapActionsToProps)(ReportDialogue);
