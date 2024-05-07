import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function FormPage() {
    const [user,setUser]=useState({email:"",password:""})

    const handleChange=(event)=>{
        setUser(prev=>({...prev,[event.target.name]:event.target.value}))
    }
  return (
    <Box sx={{width:300, height:200,ml:70, mt:10}}>

    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2,
      border: 2,
      borderRadius: 5,
      p: 3,
    }}
  >
    <Typography textAlign='center'>Form</Typography>
    <TextField
      placeholder="email"
      value={user.email}
      onChange={handleChange}
      name="email"
    />
    <TextField
      placeholder="password"
      type="password"
      value={user.password}
      onChange={handleChange}
      name="password"
    />
    <Button variant='contained'
      onClick={() => {
        console.log(user);
      }}
    >
      Save
    </Button>
  </Box>
    </Box>
  )
}
