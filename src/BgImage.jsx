import React from 'react';
import { Box } from '@mui/material';
import bg from './assets/bg.jpg'
//import MuiTypo from './components/MuiTypo';
import {QuizCard, HuntTextCard, QuizNameCard} from './components/Cards';

const QuizLayout = () => {
  return (
    <Box
      display= 'flex'
      sx={{ backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 0 }}>
          <Box sx = {{ position: 'fixed' , zIndex: 1}}>
            <HuntTextCard/>
          </Box>
          <Box sx = {{ position: 'relative' , zIndex: 1}}>
            <QuizNameCard/>
          </Box>
          <Box sx={{position: 'relative', zIndex: 1}}>
            <QuizCard/>
          </Box>
    </Box>
  );
};


export {QuizLayout}