import {Card, CardContent, Typography } from "@mui/material"
import { useState } from "react";
import GameOverButtons from "./GameOverButtons"
import Question from "./Question";

const MainCard = () => {

    const [isFinished, setIsFinished] = useState<boolean>(false);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    
    return (
        <Card sx={{ minWidth: 350, borderRadius: '12px' }} elevation={4}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Quiz App
                </Typography>
                {
                    isFinished 
                        ? (<GameOverButtons />) 
                        : (<Question 
                                current={currentQuestion} 
                                onNext={setCurrentQuestion}
                            />)
                }
                
            </CardContent>
        </Card>
    )
}

export default MainCard
