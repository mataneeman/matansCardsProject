import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react'

const CardDeleteDialog=({
    isDialogOpen,
    onDelete,
    onChangeDialog
})=> {
  return (
    <Dialog
    open={isDialogOpen}
    onClose={onChangeDialog}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    maxWidth="xs"
  >
    <DialogTitle id="alert-dialog-title">
      {"Are you sure you want to delete this card?"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        This operation will completely delete the business card and all its
        data from the database and it will not be possible to retrieve the
        card afterwards
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onChangeDialog} color="info">
        cancel
      </Button>
      <Button onClick={onDelete} autoFocus color="error">
        Delete card
      </Button>
    </DialogActions>
  </Dialog>
);

}
export default CardDeleteDialog