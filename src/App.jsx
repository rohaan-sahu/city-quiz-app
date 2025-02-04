import React, { useState } from 'react';
import { Card, CardContent,CardMedia, LinearProgress, Button, Radio, RadioGroup, FormControlLabel, FormControl, Typography, Box } from '@mui/material';
import randomQuizImageArray from './QuestionImages';
import ScoreCard from './Score';

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
    <Box display="flex" flexDirection="column" alignItems="center" p={4}>
            <LinearProgress variant="determinate" value={progressPercentage} sx={{ width: '100%', maxWidth: 600, mb: 4 }} />
      <ScoreCard score={score} 
        totalQuestions={questions_10.length}
        currentQuestionIndex={currentQuestionIndex} />
      <Card sx={{ width: '100%', maxWidth: 600 }}>
        <CardMedia
          component = 'img'
          height = '300px'
          image = {currentImageUrl}
          alt = {currentImageDescription}
          >
        </CardMedia>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {questions_10[currentQuestionIndex].question}
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
              {questions_10[currentQuestionIndex].options.map((option, index) => (
                <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          </FormControl>
          <Button variant="contained" onClick={handleNext} sx={{ mt: 2, width: '100%' }} disabled={selectedOption === null}>
            Next
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;
