import { 
  Dispatch, 
  FC, 
  SetStateAction,
  useEffect, 
  useState, 
} from 'react';

import { Button, Stack, Typography } from '@mui/material';

import { 
  generateQuestions, 
  getColor, 
  Glossary,
  Question as QuestionType,
} from '../assets/';

interface Props {
  glossary: Glossary[],
  onScore: Dispatch<SetStateAction<number>>,
  onFinished: Dispatch<SetStateAction<boolean>>,
  onQuestions: Dispatch<SetStateAction<QuestionType[] | []>>,
}

const Question: FC<Props> = ({  glossary, onScore, onFinished, onQuestions }) => {

  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isTheLast, setIsTheLast] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [textClicked, setTextClicked] = useState<string>('');
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  useEffect(() => {
    setQuestions(generateQuestions(glossary, 240, 20, []));
  }, []);
  
  const handleClick = (isCorrect: boolean, text: string): void => {
    
    if(!isDisabled) return;

    setIsDisabled(false);
    setTextClicked(text);
    
    if(isCorrect) onScore(score => score + 1);
  }

  const handleNext = () => {

    setTextClicked('');
    setIsDisabled(true);

    if((currentQuestion + 2) === questions.length) setIsTheLast(true);

    if(isTheLast) {
      onFinished(true);
      setCurrentQuestion(0);
      onQuestions(questions);
    }
    
    setCurrentQuestion(c => c + 1);
  }

  if(questions.length <= 0) return <></>

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="subtitle1" component="span">
        What is the meaning of <b>{questions[currentQuestion].question}</b> in spanish?
      </Typography>
      {
        questions[currentQuestion].answers.map(({ text, isCorrect }) => (
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
          question { currentQuestion + 1 } of { questions.length }
        </Typography>
        <Button 
          size="medium" 
          sx={{ borderRadius: '12px' }} 
          onClick={handleNext}
          disabled={isDisabled}
        >
          { isTheLast ? 'Finish Quiz' : 'Up next' }
        </Button>
    </Stack>
      
    </Stack>
  )
}

export default Question