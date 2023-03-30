import { Stack, Button } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';

const GameOverButtons = () => {
  return (
    <Stack direction="column" spacing={2}>
        <Button size="medium" sx={{ borderRadius: '12px' }} startIcon={<FavoriteIcon />}>
            Volver a jugar
        </Button>
        <Button size="medium" sx={{ borderRadius: '12px' }} startIcon={<VisibilityIcon />}>
            Ver respuestas
        </Button>
    </Stack>
  ) 
}

export default GameOverButtons