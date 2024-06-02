import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '../providers/CustomThemeProvider'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function PageHeader({title,subtitle}) {
  const {isDark}=useTheme()
  return (
  <Box sx={{pt:3,textAlign:"center",color: isDark ? 'white' : 'black'}}>
    <Typography 
      variant='h2'
      component='h1' 
      fontFamily='inherit'
      fontSize={{xs:"36px",md:"72px"}}
      fontWeight={600} 
      >{title}
    </Typography>

    <Typography 
      variant='h6' 
      component='h2' 
      fontFamily='inherit'
      fontSize={{xs:"16px",md:"22px"}}
      >{subtitle}
    </Typography>

    <Divider sx={{my:2}}/>
  </Box>
  )
}
