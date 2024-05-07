import { CardMedia } from '@mui/material'
import React from 'react'

export default function CardHeaderComponent({image}) {
  return (
    <CardMedia sx={{backgroundImage:'cover'}}
    component="img" 
    height="140"
    title={image.alt} 
    image={image.url}
    />
  )
}
