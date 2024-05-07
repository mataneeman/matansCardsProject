import { Box, IconButton } from '@mui/material'
import React from 'react'
import { useMenu } from '../menu/MenuProvider';
import MenuIcon from '@mui/icons-material/Menu';

export default function MoreButton() {
  const setOpen  = useMenu()
  return (
    <Box sx={{display:{xs:'inline-flex',md:'none'}}}>
        <IconButton 
        onClick={()=>setOpen(true)}
        size='small'
        title='open setting'
        aria-label='menu'
        sx={{ display: { xs: "inline-flex", md: "none" } }}
        >
          <MenuIcon/>
        </IconButton>

    </Box>
  )
}
