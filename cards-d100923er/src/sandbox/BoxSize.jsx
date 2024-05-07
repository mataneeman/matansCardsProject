import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

export default function BoxSize() {
    const [size,setSize]=useState(20)
    const plus=()=>{
        setSize((prev)=>(prev<400? prev+10:400))
    }
    const minus=()=>{
        setSize((prev)=>(prev>20? prev-10:20))
    }


  return (
    <Box >
        <Box sx={{mb:2}}>
        <Button sx={{mr:2}} variant='contained' onClick={plus}>+</Button>
        <Button  variant='contained' onClick={minus}>-</Button>
        </Box>
        <Box
          width={size}
          height={size}
          bgcolor={"red"}
          mb={2}>
        </Box>
    </Box>
  )
}
