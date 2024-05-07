import React from "react";
import MenuItem from "@mui/material/MenuItem";
import NavBarLink from "./NavBarLink";
import { makeFirstLetterCapital } from "../../layout/header/topNavBar/menu/utils/algoMethods";
import { useTheme } from "../../providers/CustumThemeProvider";

const MenuLink = ({ text, navigateTo, onClick, styles }) => {
  const {isDark} = useTheme()
  return (
    <NavBarLink to={navigateTo}>
      <MenuItem sx={{ ...styles, color:isDark ? "white" : "black" }} onClick={onClick}>
        {makeFirstLetterCapital(text)}
      </MenuItem>
    </NavBarLink>
  );
};



export default MenuLink;