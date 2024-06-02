import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useTheme } from "../../providers/CustomThemeProvider";
import { useUser } from "../../users/providers/UserProvider";

export default function AddNewCardButton() {
  const navigate = useNavigate();
  const {isDark} = useTheme()
  const {user} = useUser()
  return (
    <>
   {user && (user.isBusiness || user.isAdmin) && 
   <Fab
      color={isDark ? "white" : "primary"}
      aria-label="add"
      title="Add new card"
      sx={{
        position: "fixed",
        bottom: 80,
        right: 16,
      }}
      onClick={() => {
        navigate(ROUTES.CREATE_CARD);
      }}
    >
      <AddIcon />
    </Fab>}
    </>
  );
}