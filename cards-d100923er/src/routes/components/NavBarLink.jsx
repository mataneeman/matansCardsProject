import {Link} from 'react-router-dom'
import React from 'react'

export default function NavBarLink({sx={color:'#000'},children,to}) {
  return (
    <Link to={to} style={{textDecoration:'none',...sx}}>  
      {children}
    </Link>
  )
}
