import {BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import React from 'react'
import StyleIcon from '@mui/icons-material/Style';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import ROUTES from '../../routes/routesModel';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useUser } from '../../users/providers/UserProvider';

export default function Footer() {
  const navigate= useNavigate()
  const {user} =useUser()

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
   
   </Paper>
  )
}
