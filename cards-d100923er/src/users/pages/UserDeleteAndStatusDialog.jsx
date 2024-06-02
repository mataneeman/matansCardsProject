import React from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";

const UserDeleteAndStatusDialog = ({ 
  openDeleteDialog, 
  setOpenDeleteDialog, 
  handleConfirmDelete, 
  openEditDialog, 
  setOpenEditDialog, 
  handleConfirmEdit 
}) => {
  return (
    <>
      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
      >
        <DialogTitle>Delete User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this user? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openEditDialog}
        onClose={() => setOpenEditDialog(false)}
      >
        <DialogTitle>Edit User Status</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to change the status of this user?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)}>Cancel</Button>
          <Button onClick={handleConfirmEdit} color="error">
            Change Status
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserDeleteAndStatusDialog;