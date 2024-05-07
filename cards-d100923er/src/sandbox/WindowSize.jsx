import React from 'react'
import {Box, Typography} from '@mui/material'
import useWindowSize from './hooks/useWindowSize'

export default function WindowSize() {
  const windowSize=useWindowSize()
  console.log(windowSize);
  
  return (
    <Box>
      <Typography variant='h3' component='h1'>Window Size</Typography>
      <Typography> width size: {windowSize.width}</Typography>
      <Typography>heigth size: {windowSize.height}</Typography>

    </Box>
  )
}
