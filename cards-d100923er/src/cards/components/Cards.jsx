import React, { useRef } from 'react';
import { Box, Container, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import CardComponent from './card/CardComponent';

export default function Cards({
  cards,
  handleCardDelete,
  handleCardLike,
}) {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '96%' }}>
      <IconButton 
        onClick={scrollLeft}
        sx={{ position: 'absolute', left: -23, zIndex: 1,top:"50%" }}
      >
        <ArrowBackIos />
      </IconButton>
      <Box 
        sx={{ 
          display: 'flex', 
          overflowX: 'auto', 
          scrollBehavior: 'smooth', 
          width: 'calc(100% - 10px)',
          '&::-webkit-scrollbar': { display: 'none' } 
        }}
        ref={scrollContainerRef}
      >
        {cards.map((card) => (
          <Box key={card._id} sx={{ flex: '0 0 auto', margin: '10px 10px' }}>
            <CardComponent
              card={card}
              handleCardDelete={handleCardDelete}
              handleCardLike={handleCardLike}
            />
          </Box>
        ))}
      </Box>
      <IconButton 
        onClick={scrollRight}
        sx={{ position: 'absolute', right: -30, zIndex: 1 ,top:"50%"}}
      >
        <ArrowForwardIos />
      </IconButton>
    </Container>
  );
}
