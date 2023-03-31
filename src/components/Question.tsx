import { Button, Stack, Typography } from '@mui/material';
import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { fakeQuestions, Question as QuestionType } from '../assets/questions';


interface Props {
  current: number,
  onNext: React.Dispatch<React.SetStateAction<number>>,
  onScore: React.Dispatch<React.SetStateAction<number>>,
  onFinished: React.Dispatch<React.SetStateAction<boolean>>,
  onQuestions: React.Dispatch<React.SetStateAction<QuestionType[] | []>>,
}

const getQuestions= () => {
  console.log('call questions method');
  return fakeQuestions;
};

const Question: FC<Props> = ({ current, onNext, onScore, onFinished, onQuestions }) => {

  const [isTheLast, setIsTheLast] = useState<boolean>(false);
  const [textClicked, setTextClicked] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    onQuestions(getQuestions());
  }, []);

  useEffect(() => {
    setIsTheLast((current + 1) === fakeQuestions.length);
  }, [current, fakeQuestions]);

  
  const getColor = ( isCorrect: boolean, text: string, answerText: string ) => {

    if(text === '') return;

    if(isCorrect) return 'success';

    if(text === answerText ) return 'error';

    return;

  }

  const handleClick = (isCorrect: boolean, text: string) => {
    setIsDisabled(true);

    if(isDisabled) return;
     
    setTextClicked(text);
    
    if(isCorrect) onScore(score => score + 1);
  }

  const handleNext = () => {

    setTextClicked('');
    setIsDisabled(false);

    if(!isTheLast) return onNext(c => c + 1);

    onFinished(true);
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
            onClick={() => handleClick(isCorrect, text)}
            color={getColor(isCorrect, textClicked, text)}
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