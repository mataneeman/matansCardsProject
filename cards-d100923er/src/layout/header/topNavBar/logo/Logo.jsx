import {  Typography } from '@mui/material'
import React from 'react'
import NavBarLink from '../../../../routes/components/NavBarLink'
import ROUTES from '../../../../routes/routesModel'
import { useTheme } from '../../../../providers/CustumThemeProvider'

export default function Logo() {
  const {isDark}=useTheme()
  

  return (
    <NavBarLink to={ROUTES.ROOT}>
      <Typography variant='h4' title="cards"
        sx={{
        display:{xs:'inline-flex',sm:"none",md:'inline-flex'},
        color: isDark ? "white" : "black",
        fontFamily:'fantasy',
        fontWeight:600,
        fontSize:{xs:"20px",md:"36px"},
        mt:1.5,
        ml:1,
        mr:2,
        }}
        >
        BCard
      </Typography>
    </NavBarLink>
  )
}
