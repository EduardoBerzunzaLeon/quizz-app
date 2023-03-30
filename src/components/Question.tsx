import { Button, Stack, Typography } from '@mui/material';
import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { fakeQuestions } from '../assets/questions';


interface Props {
  current: number,
  onNext: React.Dispatch<React.SetStateAction<number>>
}

const Question: FC<Props> = ({ current, onNext }) => {

  const [isTheLast, setIsTheLast] = useState((current + 1) === fakeQuestions.length);

  useEffect(() => {
    setIsTheLast((current + 1) === fakeQuestions.length);
  }, [current, fakeQuestions])
  
  const handleClick = (e: MouseEvent<HTMLButtonElement>, isCorrect: boolean) => {
    e.currentTarget.setAttribute('color', 'error')

    console.log(e);

    // e.target.setAttribute('color', 'error');

  }

  const handleNext = () => {
    if(isTheLast) return;
    return onNext(c => c + 1);
  }

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="subtitle1" component="span">
        What is the meaning of <b>{fakeQuestions[current].question}</b> in spanish?
      </Typography>
      {
        fakeQuestions[current].answers.map(({ text, isCorrect }) => (
          <Button 
            key={text} 
            size="medium" 
            variant="outlined" 
            sx={{ borderRadius: '12px' }} 
            onClick={(e) => handleClick(e, isCorrect)}
          >{ text }</Button>
        ))
      }

    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
        <Typography variant="subtitle2" component="span">
          question { current + 1 } of { fakeQuestions.length }
        </Typography>
        <Button 
          size="medium" 
          sx={{ borderRadius: '12px' }} 
          onClick={handleNext}
        >
          { isTheLast ? 'Finish Quiz' : 'Up next' }
        </Button>
    </Stack>
      
    </Stack>
  )
}

export default Question