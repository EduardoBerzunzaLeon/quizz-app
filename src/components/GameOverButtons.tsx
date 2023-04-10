import { FC, Dispatch, SetStateAction } from "react";

import { Stack, Button, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface Props {
  score: number,
  onScore: Dispatch<SetStateAction<number>>,
  onFinished: Dispatch<SetStateAction<boolean>>,
  onViewAnswers: Dispatch<SetStateAction<boolean>>,
}

const GameOverButtons: FC<Props> = ({ score, onFinished, onScore, onViewAnswers }) => {

  const onReset = () => {
    onFinished(false);
    onScore(0);
  }

  const onView = () => {
    onViewAnswers(true);
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
            Play
        </Button>
        <Button 
          size="medium" 
          sx={{ borderRadius: '12px' }} 
          startIcon={<VisibilityIcon />}
          onClick={onView}
        >
            Answers
        </Button>
    </Stack>
  ) 
}

export default GameOverButtons