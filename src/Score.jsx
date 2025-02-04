import React from 'react';
import { Card, CardContent, Typography, Box, Modal, Paper,Button } from '@mui/material';

const ScoreCard = ({ score, totalQuestions, currentQuestionIndex }) => {
  // Check if quiz is completed
  const isQuizCompleted = currentQuestionIndex >= totalQuestions-1;

  // Function to restart the quiz
  const handleRestartQuiz = () => {
    window.location.reload();
  };

  // If quiz is completed, render final screen
  if (isQuizCompleted) {
    return (
      <Modal 
        open={true} 
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Paper 
          elevation={3}
          sx={{ 
            width: '100%',
            height: '50%', 
            maxWidth: 800, 
            padding: 4, 
            textAlign: 'center',
            backgroundColor: 'rgba(255,255,255,0.9)'
          }}
        >
          <Typography variant="h4" color="primary" gutterBottom>
            Thank You!
          </Typography>
          <Typography variant="h5" color="secondary" sx={{ mb: 2 }}>
            Quiz Completed
          </Typography>
          <Typography variant="h6">
            Your Score
          </Typography>
          <Typography variant="h4" color="primary">
            {score} / {totalQuestions}
          </Typography>
          <br/><br/><br/>
          <Button 
          variant="contained" 
          color="primary" 
          onClick={handleRestartQuiz}
          sx={{ width: '80%' }}
        >
          Restart Quiz
        </Button>
        </Paper>
      </Modal>
    );
  }

  // If quiz is not completed, render regular score card
  return (
    <Card sx={{ 
      width: '100%', 
      maxWidth: 300, 
      margin: 'auto', 
      marginTop: 2 
    }}>
      <CardContent>
        <Typography 
          variant="h6" 
          color="primary" 
          align="center"
        >
          Current Score
        </Typography>
        <Box 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          mt={2}
        >
          <Typography 
            variant="h4" 
            color="secondary"
          >
            {score} / {totalQuestions}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ScoreCard;