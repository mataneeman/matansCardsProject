import { Avatar, Box, Collapse, Container,IconButton,Paper,Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import useCards from '../hooks/useCards'
import { useParams } from "react-router-dom";
import Map from './Map';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useTheme } from '../../providers/CustomThemeProvider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardDetailsPage() {
  const{getCardById,card,isLoading,error}=useCards()
  const{id}=useParams()
  const {isDark} =useTheme()
  const [expanded, setExpanded] =useState(false);
  const [imgSrc, setImgSrc] = useState(null);

  const handleError = () => {
    setImgSrc('/assets/images/business-card-top-image.jpg'); // Path to your fallback image
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 useEffect(()=>{
   if(card){
    setImgSrc(card.image.url)
   }
 },[card])
  useEffect(()=>{
    getCardById(id)
  },[getCardById,id])

  if (isLoading) return <Spinner/>
  if(error) return <Error errorMessage={error}/>

  return (
    <Container>
        <PageHeader
        title='Card Details'
        subtitle='Here you can find all the details about specific card '
        />
        <Box 
         sx={{
          ml:4,
          display: "flex",
          flexDirection:{xs:"column",md:"initial"},
          justifyContent: "space-between",
          color: isDark ? "white" : "black"
          
          }}>
           <Box 
             display='flex'
             sx={{
             alignItems:'start',  
             flexDirection:'column',
             width:{xs:"100%",md:'50%'}}}>
              <Typography fontSize={20}><strong>Card Details:</strong></Typography>
              <Avatar 
                sx={{borderRadius:1 ,width:'90%',height:300,mt:2 }}
                src={imgSrc}
                alt={card.image?.alt}
                onError={handleError}
              />  
              <Paper elevation={5} sx={{mt:2,p:2,mb:2,width:"85%"}}>       
                <Typography mt={1}><strong>Title:</strong> {card.title} </Typography>
                <Typography mt={1}><strong>Subtitle:</strong> {card.subtitle} </Typography>
                <Typography mt={1}><strong>Email:</strong> {card.email}</Typography>
                <Typography mt={1}><strong>Phone: </strong> {card.phone} </Typography>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <Typography mt={1}><strong>BizNumber:</strong> {card.bizNumber} </Typography>
                  <Typography mt={1}><strong>Description:</strong> {card.description} </Typography>
                  <Typography mt={1}><strong>User Id:</strong> {card.user_id} </Typography>
                  <Typography mt={1}><strong>CreateAT:</strong> {card.createdAt} </Typography>
                  <Typography 
                    sx={{
                      mt:1,
                      border:1,
                      borderRadius:2,
                      p:1,
                      width:100,
                      display:'flex',
                      alignItems:"center",
                      justifyContent:'space-around'}}>
                      <FavoriteIcon color='error'/>{card.likes.length} Likes</Typography>
                </Collapse>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  title="more info"
                  >
                 <ExpandMoreIcon />
                </ExpandMore>
              </Paper>  
          </Box>


          <Box 
            sx={{ 
            width: {xs:"100%",md:"50%"},
            height:{xs:"100%",md:"350px"},
            }}>
              <Typography mb={2} textAlign='start' fontSize={20}><strong>Address Card:</strong></Typography>
              <Box  
              sx={{ 
                width: {xs:"90%",md:"90%"},
                height:{xs:"200px",md:"90%"},
              }}>
             <Map 
               center={[51.505, -0.09]}
               zoom={13}
               address={card.address?.city +" "+ card.address?.street +" "+ card.address?.houseNumber}
              />
              </Box>
              <Paper elevation={5} sx={{mt:2,p:2,mb:2,textAlign:'start',width:"85%"}}>
              <Typography mt={1}><strong>Country:</strong> {card.address?.country} </Typography>
              <Typography mt={1}><strong>City:</strong> {card.address?.city} </Typography>
              <Typography mt={1}><strong>Street:</strong> {card.address?.street} </Typography>
              <Typography mt={1}><strong>House Number:</strong> {card.address?.houseNumber} </Typography>
              </Paper>
          </Box>
        </Box>
    </Container>
  )
}

