import React from 'react'
import Logged from './Logged'
import { Box, IconButton } from '@mui/material'
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotLogged from './NotLogged';
import { useUser } from '../../../../users/providers/UserProvider';
import MoreButton from './MoreButton';
import { useTheme } from '../../../../providers/CustumThemeProvider';
import SearchBar from './SearchBar';


export default function RightNavBar() {
  const {user}=useUser()
  const {isDark,toggleDarkMode} =useTheme()
  
  return (
    <>
    <Box
    sx={{
      display: { xs: "none", md: "inline-flex" },
      justifyContent:'center',
      alignItems:'center'
    }}>
      <SearchBar/>
      <IconButton 
        sx={{ ml: 1 }} 
        onClick={toggleDarkMode}>
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      {user && <Logged/>}
      {!user && <NotLogged/>}
       
    </Box>
    <MoreButton/>
    </>
  )
}
