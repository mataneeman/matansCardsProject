import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '../../providers/CustumThemeProvider'

export default function Main({children}) {
  const {isDark}=useTheme()
  return (
   <Box 
      sx={{
        minHeight:'85vh',
        bgcolor:isDark ? '#424242' :'secondary.main'
        }}>
     {children}
   </Box>
  )
}
