import { AppBar, Container, Toolbar} from '@mui/material'
import React from 'react'
import NavItem from '../routes/components/NavItem'
import { Outlet } from 'react-router-dom'

export default function SandBox() {
  return (
    <>
      <AppBar position='sticky' color='default'>
        <Toolbar sx={{display:'flex'}}>
            <NavItem to='counter' label='Counter page' sx={{color:'black'}}/>
            {/* <NavItem to='box color' label='Box color' sx={{color:'black'}}/>
            <NavItem to='box size' label='Box size' sx={{color:'black'}}/>
            <NavItem to='life cycle' label='life cycle' sx={{color:'black'}}/> */}
            <NavItem to='countries' label='countries' sx={{color:'black'}}/>
            {/* <NavItem to='form example' label='form example' sx={{color:'black'}}/> */}
            <NavItem to='map page' label='map page' sx={{color:'black'}}/>
            <NavItem to='window size' label='window size' sx={{color:'black'}}/>
            {/* <NavItem to='login' label='login' sx={{color:'black'}}/>
            <NavItem to='signup' label='signup' sx={{color:'black'}}/> */}
            <NavItem to='optimization' label='optimization' sx={{color:'black'}}/>
            <NavItem to='context' label='context' sx={{color:'black'}}/>

        </Toolbar>
      </AppBar>

      <Container sx={{m:2}}>
       <Outlet/>
      </Container>
   
    
    </>
  )
}
