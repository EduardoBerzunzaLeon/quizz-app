import {Card, CardContent, Typography } from "@mui/material"
import { useState } from 'react';
import GameOverButtons from "./GameOverButtons"
import Question from "./Question";
import { Question as QuestionType } from '../assets/questions';
import Answers from "./Answers";
import ConfettiExplosion from "react-confetti-explosion";

const MainCard = () => {

    const [isFinished, setIsFinished] = useState<boolean>(false);
    const [showAnswers, setShowAnswers] = useState<boolean>(false);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState<QuestionType[] | []>([])
    
    return (
        <Card sx={{ minWidth: 200, borderRadius: '12px', marginLeft: '3px', marginRight: '3px' }} elevation={4}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Quiz App
                </Typography>
                {
                    isFinished 
                        ? showAnswers 
                            ? (<Answers 
                                    questions={questions}
                                    onViewAnswers={setShowAnswers}
                                 />)
                            : (<>
                                <ConfettiExplosion 
                                    force={.8}
                                    duration={3000}
                                    particleCount={250}
                                    width={1600}
                                />
                                <GameOverButtons 
                                    score={score}
                                    onCurrent={setCurrentQuestion}
                                    onFinished={setIsFinished}
                                    onScore={setScore}
                                    onViewAnswers={setShowAnswers}
                                />
                            </>) 
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
