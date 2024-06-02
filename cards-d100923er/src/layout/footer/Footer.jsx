import {BottomNavigation, BottomNavigationAction, Box, Paper, Typography } from '@mui/material'
import React from 'react'
import StyleIcon from '@mui/icons-material/Style';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import ROUTES from '../../routes/routesModel';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useUser } from '../../users/providers/UserProvider';
import { useTheme } from '../../providers/CustomThemeProvider';

export default function Footer() {
  const navigate= useNavigate()
  const {user} =useUser()
  const {isDark} = useTheme()

  return (
   <Paper sx={{position:'sticky',bottom:0,left:0,right:0,zIndex:1}}>
    <BottomNavigation showLabels>
      <BottomNavigationAction
        label="About"
        icon={<InfoIcon/>}
        onClick={()=>navigate(ROUTES.ABOUT)}
      />
      <BottomNavigationAction
        label="Cards"
        icon={<StyleIcon/>}
        onClick={()=>navigate(ROUTES.CARDS)}
      />
      {user && user.isBusiness && <BottomNavigationAction
        label="My Cards"
        icon={<RecentActorsIcon/>}
        onClick={()=>navigate(ROUTES.MY_CARDS)}
      />}
      {user && user._id && <BottomNavigationAction
        label="Favorites"
        icon={<FavoriteBorderIcon/>}
        onClick={()=>navigate(ROUTES.FAV_CARDS)}
      />}
    </BottomNavigation>
    <Box justifyContent="space-between" sx={{boxSizing:"5px",display:{xs:"none",md:"inline-flex"}}}>
    <Typography variant="body2"
        sx={{
          position: "absolute",
          left: "16px",
          bottom: "8px",
          fontSize:"12px",
          color: isDark ? 'white' : "gray",
          
        }}>© 2024 Matan Ne'eman's Cards Company. All rights reserved.</Typography>
    <Typography variant="body2"
        sx={{
          position: "absolute",
          right: "16px",
          bottom: "8px",
          fontSize:"12px",
          color: isDark ? 'white' : "gray",
         
        }}>Contact: matan.neeman20@gmail.com</Typography>

    </Box>
   </Paper>
  )
}
