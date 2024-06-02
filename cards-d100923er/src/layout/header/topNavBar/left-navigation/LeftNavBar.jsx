import { Box } from '@mui/material'
import React from 'react'
import LogoIcon from '../logo/LogoIcon'
import Logo from '../logo/Logo'
import NavItem from '../../../../routes/components/NavItem'
import ROUTES from '../../../../routes/routesModel'
import { useTheme } from '../../../../providers/CustomThemeProvider'
import { useUser } from '../../../../users/providers/UserProvider'

export default function LeftNavBar() {
  const {isDark}=useTheme()
  const {user}= useUser()
  return (
   <Box sx={{display:"flex", alignItems:"center"}}>
     <LogoIcon/>
     <Logo/>
     <Box sx={{display:{xs:"none",sm:"inline-flex"}}}>
     <NavItem 
       to={ROUTES.CARDS} 
       label='Cards'
       sx={{color: isDark ? "white" : "black"}}/>

     
        <Box sx={{display:{xs:"none", sm:"flex"}}}>
          <NavItem 
            to={ROUTES.ABOUT} 
            label='About' 
            sx={{color: isDark ? "white" : "black"}}/>
        </Box>

     {user && user.isBusiness && 
       <NavItem 
         to={ROUTES.MY_CARDS} 
         label="My cards" 
         sx={{color: isDark ? "white" : "black"}}/>}

     {user &&  
       <NavItem
         to={ROUTES.FAV_CARDS} 
         label="Favorites" 
         sx={{color: isDark ? "white" : "black"}}/>}

     {user && user.isAdmin && 
       <NavItem
         to={ROUTES.CRM_PANEL} 
         label="CRM Panel" 
         sx={{color: isDark ? "white" : "black"}}/>}
     </Box>
    </Box>
  )
}
