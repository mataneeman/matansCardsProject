import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import useCounter from './hooks/useCounter'

export default function Counter() {
  const{counter,increment,decrement,reset}=useCounter(50,3)
  return (
    <Box>
      <Box mb={2} >
        <Button sx={{mr:1}} variant='contained' onClick={increment}>
          +
        </Button>
        <Button variant='contained' onClick={decrement}>
          -
        </Button>
      </Box>

      <Typography sx={{ml:5}} variant='h3' >{counter}</Typography>
        <Button onClick={reset}>reset</Button>
    </Box>
  )
}
