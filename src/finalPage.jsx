import { Card,Typography, Box } from '@mui/material';


const ScorePage = ({ score, totalQuestions }) => {
    return (
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        height="100%" 
        p={4}
      >
        <Typography variant="h4" gutterBottom>
          Thank you for playing!
        </Typography>
        <Card sx={{ width: '100%', maxWidth: 400, textAlign: 'center', p: 3 }}>
          <Typography variant="h5" color="primary">
            Your Score
          </Typography>
          <Typography variant="h3" color="secondary" sx={{ my: 2 }}>
            {score} / {totalQuestions}
          </Typography>
        </Card>
      </Box>
    );
  };

  export default ScorePage