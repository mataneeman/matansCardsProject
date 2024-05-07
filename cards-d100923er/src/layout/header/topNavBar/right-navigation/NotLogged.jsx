import { Box } from '@mui/material'
import React from 'react'
import NavItem from '../../../../routes/components/NavItem'
import ROUTES from '../../../../routes/routesModel'
import { useTheme } from '../../../../providers/CustumThemeProvider'

export default function NotLogged() {
  const {isDark} = useTheme()
  return (
   <Box>
    <NavItem 
      to={ROUTES.LOGIN} 
      label='login'
      sx={{color: isDark ? "white" : "black"}} 
      />
    <NavItem 
      to={ROUTES.SIGNUP} 
      label='sign up'
      sx={{color: isDark ? "white" : "black"}} 
    />
   </Box>
  )
}
