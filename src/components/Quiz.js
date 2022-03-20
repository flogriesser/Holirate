/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 10:28:56 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-06-11 21:43:08
 */
import React, { Component } from 'react'
import { QuizData, CarQuestion } from './Data/Fragen';

import Train from "./Maps/maps";
import Singlequestion from './SingleQuestion/singleQuestion';
import QuizEnds from './Score/quizEnd';
import Car from './Maps/car';
import Flight from './Flight/flight';


class Quiz extends Component {
    state = {
        userAnswer: null,    //current users answer
        type: "single",         //question Type
        currentIndex: 0,     //current questions index
        options: [],        //the options
        values: null,         //Values of Single or Multiple choice
        tipps: null,
        ChoosenTipps: [],
        ChoosenHeadlines: [],
        ChoosenAnswers: [],
        quizEnd: false,
        score: [0],

        distance: 0,
        TravelMode: null,
        co2: 0,
        carType: 0,
        carPower: 0,
    }

    forceUpdateHandler = () => {
        this.forceUpdate();
    };

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
                distance: 0,
            }
        }
        )
    }

    setDistance = (distanceKM) => {
        this.setState({
            distance: distanceKM
        })
    }

    //Load the quiz once the component mounts
    componentDidMount() {
        this.loadQuiz();
    }

    //Update the component
    componentDidUpdate(prevProps, prevState) {
        const { currentIndex } = this.state;
        if (this.state.currentIndex !== prevState.currentIndex && this.state.currentIndex !== QuizData.length) {
            this.setState(() => {
                return {
                    type: QuizData[currentIndex].type,
                    question: QuizData[currentIndex].question,
                    options: QuizData[currentIndex].options,
                    values: QuizData[currentIndex].values
                }
            });

        }
    }/*componentDidUpdate*/

    callbackCar = (distance, power, type) => {
        let quizEnd = (this.state.currentIndex === QuizData.length - 1);
        this.setState({
            distance: distance,
            carPower: power,
            carType: type,
            quizEnd: quizEnd,
            currentIndex: this.state.currentIndex + 1
        })
        this.state.ChoosenTipps.push(CarQuestion[0].tipps[power]);
        this.state.ChoosenHeadlines.push(CarQuestion[0].headline);
        this.state.ChoosenTipps.push(CarQuestion[1].tipps[type]);
        this.state.ChoosenHeadlines.push(CarQuestion[1].headline);
        this.state.ChoosenAnswers.push(CarQuestion[0].options[power]);
        this.state.ChoosenAnswers.push(CarQuestion[1].options[type]);
        /*this.nextQuestionHander();*/
    }


    callbackSingleQuestion = (index, points, Travelmode) => {
        const { currentIndex } = this.state;
        let quizEnd = (this.state.currentIndex === QuizData.length - 1);
        if (Travelmode === null) {
            if (this.state.score == null) {
                this.setState({
                    score: [0],
                    quizEnd: quizEnd,
                    currentIndex: this.state.currentIndex + 1
                });
            } else {
                this.setState({
                    score: this.state.score.concat([points]),
                    quizEnd: quizEnd,
                    currentIndex: this.state.currentIndex + 1
                });
            }
        } else {
            this.setState({
                TravelMode: Travelmode,
                quizEnd: quizEnd,
            })
        }

        this.state.ChoosenHeadlines.push(QuizData[currentIndex].headline);
        this.state.ChoosenTipps.push(QuizData[currentIndex].tipps[index]);
        this.state.ChoosenAnswers.push(QuizData[currentIndex].options[index]);

        /*this.nextQuestionHander();*/
    }

    callbackDistance = (distance) => {
        this.setState({
            distance: distance,
            currentIndex: this.state.currentIndex + 1
            /*quizEnd: true*/ /* GRF putting direction on front*/
        });
    }

    callbackBack = () => {
        let ChoosenHeadlines = this.state.ChoosenHeadlines;
        let ChoosenTipps = this.state.ChoosenTipps;
        let ChoosenAnswers = this.state.ChoosenAnswers;
        ChoosenHeadlines.pop();
        ChoosenTipps.pop();
        ChoosenAnswers.pop();
        let score = this.state.score;
        score.pop();


        if (this.state.currentIndex === 2) {
            this.setState({
                currentIndex: this.state.currentIndex - 1,
                ChoosenHeadlines: ChoosenHeadlines,
                ChoosenTipps: ChoosenTipps,
                ChoosenAnswers: ChoosenAnswers,
                TravelMode: null
            });
        }
        else {
            this.setState({
                currentIndex: this.state.currentIndex - 1,
                ChoosenHeadlines: ChoosenHeadlines,
                ChoosenTipps: ChoosenTipps,
                ChoosenAnswers: ChoosenAnswers,
                score: score,
            });
        }
    }

    callbackBackSingleQuestion = () => {
        let score = this.state.score;
        score.pop();
        /*
                this.setState({
                    score: score,
                });
                */
        this.callbackBack();
    }


    render() {
        const { quizEnd } = this.state //get the current state     
        if (quizEnd) {
            return (
                <div> <QuizEnds state={this.state} /></div>
            )
        }

        if (this.state.TravelMode === "Car" && this.state.currentIndex === 0) {
            return (
                <Car state={this.state}
                    callbackCar={this.callbackCar}
                    callbackBack={this.callbackBack} />
            )
        } else if (this.state.TravelMode === "Flight" && this.state.currentIndex === 0) {
            return (
                <Flight
                    state={this.state}
                    callbackDistance={this.callbackDistance}
                    callbackBack={this.callbackBack} />
            )
        } else if (this.state.TravelMode === "Train" && this.state.currentIndex === 0) {
            return (
                <div>
                    <Train state={this.state}
                        callbackDistance={this.callbackDistance}
                        callbackBack={this.callbackBack} />
                    <br></br>
                </div >)
        } else {
            return (
                <Singlequestion state={this.state}
                    callbackSingleQuestion={this.callbackSingleQuestion}
                    callbackBackSingleQuestion={this.callbackBackSingleQuestion} />
            )
        }
    }/*render*/

}/*Quiz*/


export default Quiz;