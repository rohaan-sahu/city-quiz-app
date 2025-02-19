import React from 'react';
import { Box, Card, CardContent } from '@mui/material';
import heading from '../assets/heading.png'
import shape from '../assets/shape.png'
import hunt from '../assets/hunt.png'

const HuntTextCard = () =>{
    return(
    <Card sx={{ 
        width: '100px',  // or any size you prefer
        height: '400px',
        backgroundImage: `url(${hunt})`,
        backgroundSize: '89%' ,
        backgroundPosition: 'center' ,
        backgroundColor: 'transparent'
      }}></Card>
    )
}

const QuizNameCard= () => {
    return(
      <Card sx={{ 
        width: '200px',  // or any size you prefer
        height: '200px',
        backgroundImage: `url(${heading})`,
        backgroundSize: '89%' ,
        backgroundPosition: 'left' ,
        backgroundColor: 'transparent'
      }}></Card>
    )
}
const QuizCard = () => {
  return (
    // Outer Box for centering the card
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'flex-end', 
      alignItems: 'center', 
      minHeight: '100vh' ,
      paddingRight: '4px'
    }}>
      <Card sx={{ 
        width: '500px',  // or any size you prefer
        height: '380px',
        backgroundImage: `url(${shape})`,
        backgroundSize: '100%' ,
        backgroundPosition: 'center' ,
        backgroundColor: 'transparent'
      }}>
        <CardContent sx={{paddingLeft: '28px'}}>
          <h3>Your Question Goes Here</h3>
          <p>Option A</p>
          <p>Option B</p>
          <p>Option C</p>
          <p>Option D</p>
        </CardContent>
      </Card>
    </Box>
  );
};

export {QuizCard, HuntTextCard, QuizNameCard}