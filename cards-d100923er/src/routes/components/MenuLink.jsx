import React from "react";
import MenuItem from "@mui/material/MenuItem";
import NavBarLink from "./NavBarLink";
import { makeFirstLetterCapital } from "../../layout/header/topNavBar/menu/utils/algoMethods";
import { useTheme } from "../../providers/CustomThemeProvider";

const MenuLink = ({ text, navigateTo, onClick, styles,title }) => {
  const {isDark} = useTheme()
  return (
    <NavBarLink to={navigateTo}>
      <MenuItem sx={{ ...styles, color:isDark ? "white" : "black" }} onClick={onClick} title={title}>
        {makeFirstLetterCapital(text)}
      </MenuItem>
    </NavBarLink>
  );
};



export default MenuLink;