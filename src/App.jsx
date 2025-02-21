import React, { useState } from 'react';
import { Card, CardContent,CardMedia, LinearProgress, Button, Radio, RadioGroup, FormControlLabel, FormControl, Typography, Box } from '@mui/material';
import randomQuizImageArray from './QuestionImages';
import ScoreCard from './Score';
import { QuizLayout } from './BgImage';
import bg from './assets/bg.jpg'
import { HuntTextCard, QuizCard, QuizNameCard } from './components/Cards';
import { Question } from './components/Question';
import shape from './assets/shape.png';
import CorrectOrNot from './components/correctOrNot';

let questions_10 = [];
questions_10 = randomQuizImageArray;

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score ,setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleNext = () => {
    if (selectedOption !== null) {
      // Show feedback first
      setShowFeedback(true);
      
      // Update score if correct
      if (selectedOption === questions_10[currentQuestionIndex].correctAnswer) {
        setScore(score + 1);
      }

      // Add to answers array
      setAnswers([{ 
        question: questions_10[currentQuestionIndex].question,
        correct: questions_10[currentQuestionIndex].correctAnswer, 
        answer: selectedOption 
      }]);

      // Move to next question after a short delay
      setTimeout(() => {
        setShowFeedback(false);
        setSelectedOption(null);
        if (currentQuestionIndex + 1 < questions_10.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
      }, 1500);  // 1.5 second delay
    }
  };

  const progressPercentage = ((currentQuestionIndex + 1) / questions_10.length) * 100;
  const currentImageUrl = questions_10[currentQuestionIndex].imageUrl;
  const currentImageDescription = questions_10[currentQuestionIndex].description;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4} sx={{ 
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover' ,
      backgroundPosition: 'bottom left',
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
    height: 10,
    borderRadius: 5,
    border: '1px solid #763004',
    '& .MuiLinearProgress-bar': {
      backgroundColor: '#763004' // Custom color
    },
    backgroundColor: '#FCC96E'
  }} 
/>
      {/* Layout container */}
      <Box sx={{ 
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: '4px',
        transform: 'scale(1.1)',
        transformOrigin: 'center top'
      }}>
        {/* Left side fixed elements */}
        <Box sx={{ 
          position: 'fixed', 
          left: '20px',  // Increased left spacing to prevent cutoff
          top: '20px',   // Added top spacing
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          zIndex: 1,
          transform: 'scale(1)',  // Removed scaling from this element since parent scaling affects it
          transformOrigin: 'left top'
        }}>
          <HuntTextCard />
        </Box>

        {/* Quiz name and score */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          zIndex: 2,
          transform: 'scale(1.1)',
          transformOrigin: 'right top'
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
          alignItems: 'flex-end',
          marginLeft: '220px',
          maxWidth: '660px'
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
              boxShadow: 'none',
              transform: 'scale(0.95)'  // Making content slightly smaller
            }}>
              <CardMedia
                component='img'
                height='280px'
                image={currentImageUrl}
                alt={currentImageDescription}
              />
              
              {/* Feedback box */}
              <Box sx={{ 
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CorrectOrNot 
                  selectedAnswer={selectedOption}
                  correctAnswer={questions_10[currentQuestionIndex].correctAnswer}
                  showFeedback={showFeedback}
                />
              </Box>
              
              <CardContent sx={{ 
                backgroundColor: 'transparent',
                py: 1,  // Reduced padding top and bottom (default is 2),
                paddingTop: 0,
              }}>
                <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>  {/* Reduced margin bottom */}
                  {questions_10[currentQuestionIndex].question}
                </Typography>
                <FormControl component="fieldset" sx={{ width: '100%' }}>
                  <RadioGroup 
                    value={selectedOption} 
                    onChange={(e) => setSelectedOption(e.target.value)}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: 1,  // Reduced gap between options from 2 to 1
                      width: '100%'
                    }}
                  >
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
                                fontSize: 20,
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
