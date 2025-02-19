import React, { useState } from 'react';
import { Card, CardContent,CardMedia, LinearProgress, Button, Radio, RadioGroup, FormControlLabel, FormControl, Typography, Box } from '@mui/material';
import randomQuizImageArray from './QuestionImages';
import ScoreCard from './Score';
import { QuizLayout } from './BgImage';
import bg from './assets/bg.jpg'
import { HuntTextCard, QuizCard, QuizNameCard } from './components/Cards';
import { Question } from './components/Question';
import shape from './assets/shape.png';

let questions_10 = [];
questions_10 = randomQuizImageArray;

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score ,setScore] = useState(0);


  const handleNext = () => {
    if (selectedOption !== null) {
      console.log(selectedOption,questions_10[currentQuestionIndex].correctAnswer)
      if (selectedOption ===  questions_10[currentQuestionIndex].correctAnswer){
        setScore(score + 1)
      }
      console.log(score)
      setAnswers([{ question: questions_10[currentQuestionIndex].question,correct: questions_10[currentQuestionIndex].correctAnswer , answer: selectedOption }]);
      setSelectedOption(null);
      if (currentQuestionIndex + 1 < questions_10.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } 
      else if (currentQuestionIndex + 1 >= questions_10.length) {
        console.log("Survey completed!");
        console.log(answers);
      }

    }
  };

  const progressPercentage = ((currentQuestionIndex + 1) / questions_10.length) * 100;
  const currentImageUrl = questions_10[currentQuestionIndex].imageUrl;
  const currentImageDescription = questions_10[currentQuestionIndex].description;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4} sx={{ 
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      position: 'relative',
      zIndex: 0 
    }}>
      {/* Progress Bar */}
<LinearProgress 
  variant="determinate" 
  value={progressPercentage} 
  sx={{ 
    width: '100%', 
    maxWidth: 600, 
    mb: 4,
    '& .MuiLinearProgress-bar': {
      backgroundColor: '#381506' // Custom color
    }
  }} 
/>
      {/* Layout container */}
      <Box sx={{ 
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end', // Changed from space-between
        alignItems: 'flex-start',
        padding: '6px'
      }}>
        {/* Left side fixed elements */}
        <Box sx={{ 
          position: 'fixed', 
          left: '6px', 
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          zIndex: 1 
        }}>
          <HuntTextCard />
        </Box>

        {/* Quiz name and score */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          zIndex: 2 
        }}>
          <QuizNameCard/>
          <ScoreCard 
            score={score} 
            totalQuestions={questions_10.length}
            currentQuestionIndex={currentQuestionIndex}
            primaryColor="#9F6226"
            secondaryColor="#543C21"
          />
        </Box>

        {/* Center content container */}
        <Box sx={{ 
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end', // Changed from center
          marginLeft: '200px', // Keep margin from HuntTextCard
          maxWidth: '600px' // Added to control width
        }}>
          

          {/* Question card with shape background */}
          <Box sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 600,
            zIndex: 3,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-10%',
              left: '-10%',
              width: '120%',
              height: '120%',
              backgroundImage: `url(${shape})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              zIndex: -1
            }
          }}>
            <Card sx={{ 
              width: '100%',
              backgroundColor: 'transparent',
              boxShadow: 'none'
            }}>
              <CardMedia
                component='img'
                height='250px' // Reduced height to fit within shape
                image={currentImageUrl}
                alt={currentImageDescription}
              />
              <CardContent sx={{ backgroundColor: 'transparent' }}>
                <Typography variant="h6" gutterBottom>
                  {questions_10[currentQuestionIndex].question}
                </Typography>
                <FormControl component="fieldset">
                  <RadioGroup value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                    {questions_10[currentQuestionIndex].options.map((option, index) => (
                      <FormControlLabel 
                        key={index} 
                        value={option} 
                        control={
                          <Radio 
                            sx={{
                              color: '#b26618',
                              '&.Mui-checked': {
                                color: '#b26618',
                              },
                              '& .MuiSvgIcon-root': {
                                fontSize: 20, // Optional: adjust size if needed
                              }
                            }}
                          />
                        } 
                        label={option}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
                {/* Next Button */}
<Button 
  variant="contained" 
  onClick={handleNext} 
  sx={{ 
    mt: 2, 
    width: '100%',
    backgroundColor: '#543C21', // Custom green
    '&:hover': {
      backgroundColor: '#9F6226' // Darker shade for hover
    }
  }} 
  disabled={selectedOption === null}
>
  Next
</Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
// <Question imageUrl = {currentImageUrl} imageDescription = {currentImageDescription}/>
