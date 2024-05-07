import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

export default function BoxColor() {
    const [changeColor,setChangeColor]=useState("red")
    const change =()=>{
        setChangeColor(changeColor==="red"? "blue":"red")
    }

  return (
    <Box >
      <Button variant='contained' onClick={change}>change color</Button>
    <Box 
    mt={2}
    width={100}
    height={100}
    bgcolor={changeColor}
    >
    </Box>
</Box>
  )
}
