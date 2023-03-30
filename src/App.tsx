import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainCard from './components/MainCard';
import {Grid} from '@mui/material';


const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

function App() {
    return (
        <ThemeProvider theme={ darkTheme }>
            <CssBaseline/>
            <Grid 
                sx={{ height: '100vh' }} 
                container 
                display="flex" 
                justifyContent="center" 
                alignItems="center"
            >
                <MainCard/>
            </Grid>
        </ThemeProvider>
    )
}

export default App
