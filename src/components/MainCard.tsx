import { useState } from 'react';

import {Card, CardContent, Typography } from "@mui/material"
import ConfettiExplosion from "react-confetti-explosion";

import { Question as QuestionType, glossary } from '../assets';
import Answers from "./Answers";
import GameOverButtons from "./GameOverButtons"
import Question from "./Question";

const MainCard = () => {

    const [isFinished, setIsFinished] = useState<boolean>(false);
    const [showAnswers, setShowAnswers] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [questions, setQuestions] = useState<QuestionType[] | []>([]);
    
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
                                    onFinished={setIsFinished}
                                    onScore={setScore}
                                    onViewAnswers={setShowAnswers}
                                />
                            </>) 
                            : (<Question 
                                glossary={glossary}
                                onFinished={setIsFinished}
                                onQuestions={setQuestions}
                                onScore={setScore}
                            />)
                }
                
            </CardContent>
        </Card>
    )
}

export default MainCard
