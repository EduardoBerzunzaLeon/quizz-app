import {Card, CardContent, Typography } from "@mui/material"
import { useState, useEffect } from 'react';
import GameOverButtons from "./GameOverButtons"
import Question from "./Question";
import { Question as QuestionType } from '../assets/questions';

const MainCard = () => {

    const [isFinished, setIsFinished] = useState<boolean>(false);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState<QuestionType[] | []>([])
    
    return (
        <Card sx={{ minWidth: 350, borderRadius: '12px' }} elevation={4}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Quiz App
                </Typography>
                {
                    isFinished 
                        ? (<GameOverButtons 
                                score={score}
                                questions={questions}
                                onCurrent={setCurrentQuestion}
                                onFinished={setIsFinished}
                                onScore={setScore}
                          />) 
                        : (<Question 
                                current={currentQuestion} 
                                onFinished={setIsFinished}
                                onNext={setCurrentQuestion}
                                onQuestions={setQuestions}
                                onScore={setScore}
                            />)
                }
                
            </CardContent>
        </Card>
    )
}

export default MainCard
