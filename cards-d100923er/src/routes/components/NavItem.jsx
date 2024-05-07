import React from 'react'
import NavBarLink from './NavBarLink'
import { Button, Typography } from '@mui/material'

export default function NavItem({to,sx,label}) {
  return (
    <NavBarLink to={to} sx={sx}>
        <Button color='inherit'>
            <Typography fontWeight={500} fontSize={{xs:14,md:16}}>{label}</Typography>
        </Button>
    </NavBarLink>
  
  )
}
