import React, { Component } from 'react'
import { QuizData } from './Data/Fragen';
import './circle.css';
import { LoadScript } from "@react-google-maps/api";

import Map from "./Maps/maps";

import Singlequestion from './SingleQuestion/singleQuestion';
import QuizEnds from './Score/quizEnd';
import Car from './Maps/car';
import Flight from './Flight/flight';

const lib = ["places"];
const key = "AIzaSyAF6K0mCOn8PxRcsTPBapCtXyr_zZ6OWGk"; // PUT GMAP API KEY HERE

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
        distance: 0,
        TravelMode: 'Car',
        co2: 0,

        num_backpags:0,
        kilo_backpags: 0,


        carType: 0,
        carPower: 0,


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
                distance: 0,
                TravelMode: "Car"
            }
        }
        )
    }
    
    setDistance = (distanceKM) => {
        this.setState({
            distance: distanceKM
        })
    }

    //Handles Click event for the next button
    nextQuestionHander = () => {
        const {currentIndex} = this.state;
        if (currentIndex === QuizData.length - 1) {
            this.setState({
                quizEnd: true
            })
        } else {
            this.setState({
                currentIndex: this.state.currentIndex + 1
            })
        }
    }

    afterMap = () => {
        //var distanceKM = document.getElementById("Distance").value;
        //console.log(distanceKM)
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
                    type: QuizData[currentIndex].type,
                    question: QuizData[currentIndex].question,
                    options: QuizData[currentIndex].options,
                    values: QuizData[currentIndex].values
                }
            });

        }
    }/*componentDidUpdate*/

    callbackCarType = (index) =>{
        this.setState({
            carType: index
        })

        this.state.ChoosenTipps.push(QuizData[this.state.currentIndex].tipps[index]);
        this.nextQuestionHander();
    }

    callbackCarPower = (index) =>{
        this.setState({
            carPower: index
        })

        this.state.ChoosenTipps.push(QuizData[this.state.currentIndex].tipps[index]);
        this.nextQuestionHander();
    }

    callbackSingleQuestion = (index, points, Travelmode) => {
        const {score, currentIndex} = this.state;
        if(Travelmode === null){
            this.setState({
                score: score + points
            });
        }else{
            this.setState({
                TravelMode: Travelmode
            })
        }

        this.state.ChoosenTipps.push(QuizData[currentIndex].tipps[index]);

        this.nextQuestionHander();
    }

    callbackFlight = (distance) =>{
        
    }

    //Responds to the click of the finish button
    finishHandler = () => {
        if (this.state.currentIndex === QuizData.length - 1) {
            this.setState({
                quizEnd: true
            })
        }

    }


    render() {
        const {quizEnd, currentIndex} = this.state //get the current state     
        console.log(this.state.TravelMode);
        var type = QuizData[currentIndex].type;

        if (quizEnd) {
            return (
                <div>
                    <QuizEnds state={this.state}/>
                </div>
            )
        }
        

        if (type === "car" && this.state.TravelMode === "Car"){
            return(
                    <Car    state={this.state}
                            callbackCarType={this.callbackCarType} 
                            callbackCarPower={this.callbackCarPower}/>
            )
        }else if (type === "flight" && this.state.TravelMode === "Flight"){
            return(
                <Flight score={this.state.score} 
                currentIndex={this.state.currentIndex} 
                question={this.state.question} 
                callbackFlight={this.props.callbackFlight}/>
                )
        } else if (type === "transport") {
            return (
                <div>
                    <LoadScript googleMapsApiKey={key} libraries={lib}>
                        <Map    score={this.state.score} 
                                currentIndex={this.state.currentIndex} 
                                question={this.state.question} 
                                TravelMode={this.state.TravelMode}
                                setDistance={this.setDistance}/>
                    </LoadScript>
                    <br></br>
                    <div className="OwnSubmit"
                            onClick={() => this.afterMap()}>
                        Submit</div>
            </div > )
        }else if(type === "single") {
            return(
                <Singlequestion state={this.state} callbackSingleQuestion={this.callbackSingleQuestion}/>
            )
        }else{
            /*If none of the above take next question*/
            /*FIXME Better solution than return null!*/
            this.setState({
                currentIndex: this.state.currentIndex +1
            })
            return null;
        }
    }/*render*/

}/*Quiz*/


export default Quiz;