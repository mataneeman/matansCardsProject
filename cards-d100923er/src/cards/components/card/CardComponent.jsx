import { Box, Card, CardActionArea } from "@mui/material";
import React from 'react'
import CardHeaderComponent from "./CardHeaderComponent";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

export default function CardComponent({
  card,
  handleCardLike,
  handleCardDelete
}) {
  const navigate = useNavigate()
  
  return (
    <Box sx={{
      perspective: '1000px',
      transition: 'transform 0.5s',
      '& > div, & > div > div': {
        transition: 'inherit',
      },
      '&:hover': {
        '& > div': {
          transform: "scale3d(1.05,1.05,1.05)"
        },
      },
    }}>
    <Card 
    variant="outLined"
    sx={{
      width:250, 
      m:1.5,
      borderRadius:3,
      boxShadow:10,
      height:420,
      }}>
        <CardActionArea onClick={()=>navigate(ROUTES.CARD_INFO+ "/" +card._id)}>
          <Box sx={{height:350}}>
          <CardHeaderComponent image={card.image}/>
           <CardBody
           title={card.title}
           subtitle={card.subtitle}
           phone={card.phone}
           address={card.address}
           cardNumber={card.bizNumber}
           />
          </Box>
        </CardActionArea>
        
        <CardActionBar 
        handleCardLike={handleCardLike} 
        handleCardDelete={handleCardDelete}
        cardId={card._id}
        userId={card.user_id}
        likes={card.likes}
        phone={card.phone}
       
         />
    </Card>
    </Box>
  )
}
