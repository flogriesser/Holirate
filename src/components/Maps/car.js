/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 10:28:59 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-05-29 17:36:52
 */

import React from "react";
import { QuizData } from '../Data/Fragen';

/*
const carPower = [
    "Gasoline",
    "Diesel",
    "Electric",
    "Hyprid",
    "Gas"
]


const carType ={
    small,
    middle: 1,
    SUV: 2
}
*/

class Car extends React.Component{

    //Check the answer
    checkAnswer = (answer, index) => {
        const { currentIndex } = this.props.state;

        if(QuizData[currentIndex].category === "type"){
            this.props.callbackCarType(index);
        }
        else{
            this.props.callbackCarPower(index);
        }

    }/*checkAnswer*/




    render() {
        const {question, options, currentIndex, score} = this.props.state;
        return (
            <div>
                <div id="hud">
                    <div id="hud-item">
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

export default Car;