import React, { useState } from 'react';
import { Card, CardContent, LinearProgress, Button, Radio, RadioGroup, FormControlLabel, FormControl, Typography, Box } from '@mui/material';
import randomQuizImageArray from './QuestionImages';

let questions_10 = [];
questions_10 = randomQuizImageArray;

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);

  const handleNext = () => {
    if (selectedOption !== null) {
      setAnswers([...answers, { question: questions_10[currentQuestionIndex].question, answer: selectedOption }]);
      setSelectedOption(null);
      if (currentQuestionIndex + 1 < questions_10.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        console.log("Survey completed!", answers);
      }
    }
  };

  const progressPercentage = ((currentQuestionIndex + 1) / questions_10.length) * 100;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4}>
      <LinearProgress variant="determinate" value={progressPercentage} sx={{ width: '100%', maxWidth: 600, mb: 4 }} />
      <Card sx={{ width: '100%', maxWidth: 600 }}>
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
