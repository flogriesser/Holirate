import React, { Component } from 'react'
//import {QuizData} from './QuizData';
import { QuizData } from './Fragen';
/*import '../App.css'*/
import './circle.css';
//import {initialize, notFound, foundYou, calcRoute} from './Maps/maps';
import { LoadScript } from "@react-google-maps/api";
import Map from "./Maps/maps";


const lib = ["places"];
const key = "AIzaSyAF6K0mCOn8PxRcsTPBapCtXyr_zZ6OWGk"; // PUT GMAP API KEY HERE
var distance = 0;


class Quiz extends Component {

    state = {
        userAnswer: null,    //current users answer
        type: "single",         //question Type
        currentIndex: 0,     //current questions index
        options: [],        //the options
        values: null,         //Values of Single or Multiple choice
        tipps: null,
        ChoosenTipps: [],
        quizEnd: false,
        score: 0,
        disabled: true,
        /*distance: 0,*/
        TravelMode: 'DRIVING',
        co2: 0,

        directions: null,
        bounds: null
    }


    //Component that holds the current quiz
    loadQuiz = () => {
        const { currentIndex } = this.state //get the current index
        this.setState(() => {
            return {
                question: QuizData[currentIndex].question,
                type: QuizData[currentIndex].type,
                options: QuizData[currentIndex].options,
                values: QuizData[currentIndex].values,
                tipps: QuizData[currentIndex].tipps,
                 /*distance: 0,*/
            }
        }
        )
    }
    
    static setDistance = (distanceKM) => {
        distance = distanceKM;
    }

    //Handles Click event for the next button
    nextQuestionHander = () => {
        const { userAnswer, score } = this.state
        this.setState({
            score: score + userAnswer,
            currentIndex: this.state.currentIndex + 1
        })
    }

    afterMap = () => {
        //var distanceKM = document.getElementById("Distance").value;
        //console.log(distanceKM)
        console.log(distance);
        this.setState({
            currentIndex: this.state.currentIndex + 1,
            //distance: distanceKM
        })
    }

    //Load the quiz once the component mounts
    componentDidMount() {
        this.loadQuiz();
    }

    //Update the component
    componentDidUpdate(prevProps, prevState) {
        const { currentIndex } = this.state;
        if (this.state.currentIndex !== prevState.currentIndex) {
            this.setState(() => {
                return {
                    disabled: true,
                    type: QuizData[currentIndex].type,
                    question: QuizData[currentIndex].question,
                    options: QuizData[currentIndex].options,
                    values: QuizData[currentIndex].values

                }
            });

        }
    }

    //Check the answer
    checkAnswer = (answer, index) => {
        const { currentIndex, score } = this.state;
        var nextQuestion = 1;
        if (QuizData[currentIndex].options[index] === "Flugzeug") {
            console.log("1. Flugzeug");
            nextQuestion = 2;
        } else if (QuizData[currentIndex].options[index] === "Auto" ||
            QuizData[currentIndex].options[index] === "Fahrad" ||
            QuizData[currentIndex].options[index] === "Zug") {
            console.log(QuizData[currentIndex].options[index]);
            nextQuestion = 1;
        } else {
            this.setState({
                disabled: false,
                score: score + QuizData[currentIndex].values[index]
            })
        }
        this.state.ChoosenTipps.push(QuizData[currentIndex].tipps[index]);

        if (currentIndex === QuizData.length - 1) {
            this.setState({
                quizEnd: true
            })
        } else {
            this.setState({
                currentIndex: this.state.currentIndex + nextQuestion
            })
        }
    }

    checkNumber = (index) => {
        const { currentIndex } = this.state;
        console.log(currentIndex);

        this.setState({
            disabled: false,
            currentIndex: this.state.currentIndex + 1
        })
    }

    //Responds to the click of the finish button
    finishHandler = () => {
        if (this.state.currentIndex === QuizData.length - 1) {
            this.setState({
                quizEnd: true
            })
        }

    }


/******************************************************************** */
/*                 RENDER                                             */
/******************************************************************** */

    render() {
        const { question, options, currentIndex, quizEnd, ChoosenTipps, type } = this.state //get the current state       
        if (quizEnd) {

            return (
                <div>
                    <h1>Dein Holirate Rating ist fertig!</h1>
                    <div className="circle-wrap">
                        <div className="circle">

                            <div className="mask full">
                                <div className="fill" ></div>
                            </div>

                            <div className="mask half">
                                <div className="fill" style={{ transform: `rotate(${360 * this.state.score / 100}deg)` }}></div>
                            </div>

                            <div className="inside-circle">
                                {this.state.score}%
                            </div>
                        </div>
                    </div>
                    <h2>Kilometer: {distance}</h2>
                    <h1>{this.state.score} points</h1>
                    <br></br>
                    <h4>Hier noch ein paar Tipps für deine Reise</h4>
                    <br></br>
                    <ul>

                        {ChoosenTipps.map((tipp, index) => (
                            <li className='options-container'
                                key={index}>
                                <p className="options-text"> {tipp}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
        if (type === "single") {
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
                                {this.state.score}
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
        } else if (type === "number") {
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
                                {this.state.score}
                            </h1>
                        </div>
                    </div>
                    <br></br>
                    <h2>{question}</h2>
                    {
                        options.map((option, index) => (  //for each option, new paragrap
                            <div key={index} className={`options-container`}>
                                <p className="options-text">{option}</p>
                                <input className="OwnInput" type="number" id={index} name="quantity" min="1" ></input>
                            </div>
                        ))
                    }
                    <br></br>
                    <div className="OwnSubmit"
                        onClick={() => this.checkNumber()}>
                        Submit</div>
                </div >)
        } else if (type === "transport") {
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
                                {this.state.score}
                            </h1>
                        </div>
                    </div>
                    <br></br>
                    <h2>{question}</h2>
                    <br></br>
                    <LoadScript googleMapsApiKey={key} libraries={lib}>
        <Map />
      </LoadScript>
      <br></br>
      <div className="OwnSubmit"
                            onClick={() => this.afterMap()}>
                        Submit</div>
                </div > )
        }
    }

/******************************************************************** */
/*                 RENDER                                             */
/******************************************************************** */
}


export default Quiz;