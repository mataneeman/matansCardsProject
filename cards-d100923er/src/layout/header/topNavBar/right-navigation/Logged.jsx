import React from 'react'
import { Avatar, IconButton, Tooltip } from '@mui/material'
import { useMenu } from '../menu/MenuProvider'

export default function Logged() {
  const setOpen = useMenu()
  
  return (
    <Tooltip title='open settings'>
        <IconButton 
          sx={{p:0, display:'inline-flex',ml:2}} 
          onClick={()=>setOpen(true)}>
          <Avatar
          />
        </IconButton>
    </Tooltip>
  )
}
