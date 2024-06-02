import React, { createContext, useCallback, useContext, useState } from "react";
import { Alert, IconButton, Snackbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const SnackbarContext = createContext();

export default function SnackbarProvider({ children }) {
  const [isSnackOpen, setOpenSnack] = useState(false);
  const [snackColor, setSnackColor] = useState("success");
  const [snackVariant, setSnackVariant] = useState("filled");
  const [snackMessage, setSnackMessage] = useState("in snackbar");

  const setSnack = useCallback((color, message, variant = "filled") => {
    setOpenSnack(true);
    setSnackColor(color);
    setSnackVariant(variant);
    setSnackMessage(message);
  }, []);

  return (
    <>
      <SnackbarContext.Provider value={setSnack}>
        {children}
      </SnackbarContext.Provider>

      <Snackbar
      sx={{mb:6}}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={isSnackOpen}
        onClose={() => {
          setOpenSnack(false);
        }}
        autoHideDuration={5000}
       >
        <Alert severity={snackColor} variant={snackVariant}>
          {snackMessage}
          <IconButton 
            size="small" 
            aria-label="close" 
            color="inherit" 
            onClick={()=>{setOpenSnack(false)}}>
            <CloseIcon fontSize="small"/>
          </IconButton>
        </Alert>
      </Snackbar>
    </>
  );
}

export const useSnack = () => {
  const context = useContext(SnackbarContext);
  if (!context) throw Error("useSnackbar must be used within a NameProvider");
  return context;
};