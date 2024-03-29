import { FC, Dispatch, SetStateAction, useMemo, useState } from 'react';

import { Button, Stack, Typography } from '@mui/material';

import { Question, getCorrectAnswer } from '../assets';

interface Props {
    questions: Question[],
    onViewAnswers: Dispatch<SetStateAction<boolean>>,
}

const Answers: FC<Props> = ({ questions, onViewAnswers }) => {

    const [current, setCurrent] = useState<number>(0);

    const correctAnswer = useMemo(
        () => getCorrectAnswer(questions[current].answers), 
        [current, questions]
    )

    const handleNext = () => {
        if(current + 1 === questions.length) return onViewAnswers(false);
        setCurrent(c => c + 1);
    }

  return (
    <Stack direction='column' spacing={2}>
        <Typography variant="subtitle1" component="span">
            What is the meaning of <b>{questions[current].question}</b> in spanish?
        </Typography>
        <Typography variant="subtitle2" component="span">
            {correctAnswer}
        </Typography>
        <Button 
          size="medium" 
          sx={{ borderRadius: '12px' }} 
          onClick={handleNext}
        >
          { current + 1 === questions.length ? 'Home' : 'Up next' }
        </Button>
    </Stack>
  )
}

export default Answers