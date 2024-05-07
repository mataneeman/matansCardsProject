import React from 'react'
import PageHeader from '../components/PageHeader'
import { Avatar, Box, Container, Paper, Typography } from '@mui/material'
import Map from '../cards/pages/Map'

export default function AboutPage() {

  return (
  <Container>
    <PageHeader 
      title="About Page"
      subtitle="On this page you can find explanations about using the application"
    />
    <Box
      sx={{
        display: "flex",
        flexDirection:{xs:"column", md:"row"},
        alignItems:"center"
      }}>
      <Box 
        display='flex' 
        sx={{
          alignItems:'center',  
          flexDirection:{xs:'column', md:"row"},
          justifyContent:'space-evenly',
          width:"100%",
          borderRadius:5}}>
        <Avatar
          src="/assets/images/card.jpg" 
          alt="card"
          sx={{ width:"40%", height:"40%" ,borderRadius:1}}
        />
        <Paper 
          elevation={2} 
          sx={{m:6,p:2, width:"90%"}} 
          >
          <Typography>
            <strong>Welcome to Card Page!</strong> We are your go-to destination for a wide selection of beautifully crafted cards for every occasion. Our passion is to provide you with the perfect card that captures the essence of your heartfelt message. With our user-friendly interface and customizable options, we make it easy for you to create a unique and personal card that will leave a lasting impression. Join us in celebrating the art of connection and spread joy, love, and warmth through the power of our cards.
          </Typography>
        </Paper>
      </Box>
      <Box 
        sx={{ 
          width: {xs:"90%",md:"50%"},
          height: "400px",
          border:5,
          borderColor:"white",
          mt:2,
          mb:2
        }}>
        <Map
          center={[51.505, -0.09]}
          zoom={14}
          address={"Netanya hertzel 54"}
        />
      </Box>
    </Box>
  </Container>
  )
}
