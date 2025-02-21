import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

function CorrectOrNot({ selectedAnswer, correctAnswer, showFeedback }) {
  if (!showFeedback) return null;

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 0.5,
      marginTop: 0.5,
      padding: 0.5,
      borderRadius: 1,
      backgroundColor: isCorrect ? 'rgba(76, 175, 80, 0.1)' : 'rgba(211, 47, 47, 0.1)'
    }}>
      {isCorrect ? (
        <CheckCircleIcon sx={{ color: '#C88430' }} />
      ) : (
        <CancelIcon sx={{ color: '#956103' }} />
      )}
      <Typography>
        {isCorrect 
          ? "Correct!" 
          : `Incorrect. The correct answer is: ${correctAnswer}`}
      </Typography>
    </Box>
  );
}

export default CorrectOrNot;