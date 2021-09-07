import React from 'react'
import ReactDOM from 'react-dom'
import Quiz from './components/Quiz'
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import './styles.css';
import {theme} from './components/stylesUI';

function App() {
    return (
        <div className="App">
            <Quiz />
        </div>
    )
}
/*
const theme = createTheme({
    palette: {
        primary: {
            light: '#47824a',
            main: '#66bb6a',
            dark: '#84c887',
            contrastText: '#fff',
          },
      secondary: { main: "#F1B929" }, // This is just green.A700 as hex.
    },
    overrides: {
        MuiButton: {
          raisedPrimary: {
            color: 'white',
          },
        },
      }
  });
  */

const rootElement = document.getElementById('root');
ReactDOM.render(
    <MuiThemeProvider theme={theme}>
    <React.Fragment >
      <CssBaseline />
      <App />
    </React.Fragment>
  </MuiThemeProvider>,
rootElement) 
