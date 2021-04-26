import React from 'react'
import ReactDOM from 'react-dom'
import Quiz from './components/Quiz'

import './styles.css';
//import { QuizData } from './components/QuizData';

function App() {
    return (
        <div className="App">
            <Quiz />
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App></App>, rootElement) 
