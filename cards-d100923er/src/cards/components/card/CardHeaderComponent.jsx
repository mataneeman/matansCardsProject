import { CardMedia } from '@mui/material';
import React, { useState } from 'react';

export default function CardHeaderComponent({ image }) {
  const [imgSrc, setImgSrc] = useState(image.url);

  const handleError = () => {
    setImgSrc('/assets/images/business-card-top-image.jpg'); // Path to your fallback image
  };

  return (
    <CardMedia
      sx={{ backgroundImage: 'cover' }}
      component="img"
      height="140"
      title={image.alt}
      image={imgSrc}
      onError={handleError}
    />
  );
}