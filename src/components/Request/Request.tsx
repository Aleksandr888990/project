import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";

type Props = {
  isValid: boolean
};

const Request = ({isValid}: Props) => {
  const [open, setOpen] = React.useState(false);

  

  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <div>
      <Button
        className="request-btn"
        variant="contained"
        color="success"
        onClick={() => isValid ? setOpen(true) : setOpen(false)}
        type="submit"
      >
        SEND REQUEST
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"You just sent us a request"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ fontWeight: "700", color: "black" }}
          >
            we will contact you shortly
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Request;
