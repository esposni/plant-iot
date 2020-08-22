import React from 'react';
// import {Button} from "reactstrap";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
   
      <img
      alt="..."
      className="rounded-circle img-fluid img-raised"
      style={{width:"7em",height:"7em", marginTop:"30px"}}
      src={require("assets/img/logo1.png")}
      onClick={handleClickOpen}
      ></img>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <img
            alt="..."
            // className="rounded-circle img-fluid img-raised"
            style={{width:"20em",height:"10em"}}
            src={require("assets/img/bar.png")}
            onClick={handleClickOpen}
            ></img>
          </DialogContentText>
        </DialogContent>
       
      </Dialog>
    </div>
  );
}