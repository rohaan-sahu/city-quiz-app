import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const questions_10 = [
  {
    question: "How do you usually handle unexpected income, like a bonus or gift?",
    options: ["Save it all.", "Spend part of it and save the rest.", "Use it for something I’ve been wanting or needing.", "Invest it in something risky or exciting."],
  },
  {
    question: "What motivates your financial decisions the most?",
    options: ["Security and peace of mind.", "Enjoying life to the fullest.", "Growing wealth and financial independence.", "Helping others and making an impact."],
  },
  {
    question: "How do you approach debt?",
    options: ["Avoid it at all costs.", "Use it strategically for investments or big goals.", "Use it as needed and manage it later.", "I don’t think about it much—it’s part of life."],
  },
];

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
    <div className="flex flex-col items-center p-6">
      <Progress value={progressPercentage} className="w-full max-w-md mb-6" />
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-4">{questions_10[currentQuestionIndex].question}</h3>
          <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
            {questions_10[currentQuestionIndex].options.map((option, index) => (
              <label key={index} className="flex items-center gap-2 mb-2">
                <RadioGroupItem value={option} />
                {option}
              </label>
            ))}
          </RadioGroup>
          <Button onClick={handleNext} className="mt-4 w-full" disabled={selectedOption === null}>
            Next
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;

