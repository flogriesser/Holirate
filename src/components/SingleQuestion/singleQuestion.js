import React from "react";
import { QuizData } from '../Data/Fragen';

class Singlequestion extends React.Component{

    //Check the answer
    checkAnswer = (answer, index) => {
        const { currentIndex } = this.props.state;
        var Travelmode = null;
        var points = 0;
        console.log(index);
        
        if (QuizData[currentIndex].options[index] === "Flugzeug"){
            Travelmode = "Fligth";
        } else if (QuizData[currentIndex].options[index] === "Auto"){
            Travelmode = "Car";
        } else if (QuizData[currentIndex].options[index] === "Zug"){
            Travelmode = "Train";
        } else {
            points = QuizData[currentIndex].values[index];
        }

        this.props.callbackSingleQuestion(index, points, Travelmode);
    }/*checkAnswer*/




    render() {
        const {question, options, currentIndex, score} = this.props.state;
        return (
            <div>
                <div id="hud">
                    <div id="hud-item">
                        <p className="hud-prefix">
                            Question {currentIndex + 1} / {QuizData.length}
                        </p>
                        <div id="progressBar">
                            <div id="progressBarFull" style={{ width: `${(currentIndex / QuizData.length) * 100}%` }}></div>
                        </div>
                    </div>
                    <div id="hud-item">
                        <p className="hud-prefix">
                            Score
                        </p>
                        <h1 className="hud-main-text" id="score">
                            {score}
                        </h1>
                    </div>
                </div>
                <br></br>
                <h2>{question}</h2>
                <br></br>
                {
                    options.map((option, index) => (  //for each option, new paragrap
                        <div key={index}
                            className={`options-container`}
                            onClick={() => this.checkAnswer(option, index)}>
                            <p className="options-prefix">{index + 1}</p>
                            <p className="options-text"> {option}</p>
                        </div>
                    ))
                }
            </div >
        )
    }
}

export default Singlequestion;