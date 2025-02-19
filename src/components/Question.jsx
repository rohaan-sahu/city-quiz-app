import React from 'react';
import { Card, CardContent,CardMedia, LinearProgress, Button, Radio, RadioGroup, FormControlLabel, FormControl, Typography, Box } from '@mui/material';

const Question = (imageUrl, imageDescription) => {
  return (
    <div>
        <Card sx={{ width: '100%', maxWidth: 600, zIndex: 2 }}>
            <CardMedia
            component = 'img'
            height = '300px'
            image = {imageUrl}
            alt = {imageDescription}
            >
            </CardMedia>
      </Card>
    </div>
  )
}

const QuestionTwo = () => {
  return (
    <div>
        <Card sx={{ width: '100%', maxWidth: 600, zIndex: 2 }}>
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
    </div>
  )
}

export {QuestionTwo, Question}