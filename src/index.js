import React from 'react'
import ReactDOM from 'react-dom'
import Quiz from './components/Quiz'
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./components/Style/Theme";

function App() {
    return (
        <div className="App">
            <Quiz />
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(
    <MuiThemeProvider theme={theme}>
    <React.Fragment >
      <CssBaseline />
      <App />
    </React.Fragment>
  </MuiThemeProvider>,
rootElement) 
