import { FC } from "react";

import { Stack, Button, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Question } from "../assets/questions";

interface Props {
  score: number,
  questions: Question[],
  onScore: React.Dispatch<React.SetStateAction<number>>,
  onFinished: React.Dispatch<React.SetStateAction<boolean>>,
  onCurrent: React.Dispatch<React.SetStateAction<number>>,
}

const GameOverButtons: FC<Props> = ({ score, questions, onCurrent, onFinished, onScore }) => {


  const onReset = () => {
    onCurrent(0);
    onFinished(false);
    onScore(0);
  }

  const onView = () => {
    // TODO: Implement view method
  }

  return (
    <Stack direction="column" spacing={2}>
        <Typography variant="subtitle1" component="span">
          your score is { score } of 20
        </Typography>
        <Button 
          size="medium" 
          sx={{ borderRadius: '12px' }} 
          startIcon={<FavoriteIcon />}
          onClick={onReset}
        >
            Volver a jugar
        </Button>
        <Button 
          size="medium" 
          sx={{ borderRadius: '12px' }} 
          startIcon={<VisibilityIcon />}
          onClick={onView}
        >
            Ver respuestas
        </Button>
    </Stack>
  ) 
}

export default GameOverButtons