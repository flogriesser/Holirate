/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 10:29:35 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-06-11 23:38:42
 */

import { Component } from "react";
import {carValues} from "../Data/Data";
//import { QuizData } from '../Data/Fragen';
import './circle.css';




class QuizEnds extends Component{
    calculateCar = (distance, carPower, carType) => {
        //const {distance, carType, carPower} = this.props.state;

        var Factor = carValues[carPower][carType];



        return (Factor*distance).toFixed(0);
    }

    calculateTrain = () => {
        const {distance} = this.props.state;

        return (0.032*distance).toFixed(0);
    }
    calculateFlight = (distance) =>{

        return (0.369*distance).toFixed(0);
        }

    calcScore = (co2) => {
        var score = 0;
        
        score = 75 - co2*75/2500;
        
        if(co2 > 2500){
            score = 0;
        }

        return score;
    }

    
    render(){
        const {score, distance, ChoosenTipps, TravelMode, carPower, carType} = this.props.state;
        var co2 = 0;
        var EndScore = score;
        if(TravelMode === 'Car'){
            co2 = this.calculateCar(distance, carPower, carType);
        }
        else if(TravelMode === 'Train'){
            co2 = this.calculateTrain(distance);
        }
        else if(TravelMode === 'Fligth'){
            co2 =this.calculateFlight(distance);
        }

        EndScore = (EndScore + this.calcScore(co2)).toFixed(0);
        var circle = "c100 p"+ EndScore+ " big green";

    return (
        <div>
            <h1>Dein Holirate Rating ist fertig!</h1>
            <br></br>
            <div id="circle-space">
                    <div class={circle}>
                    <span>{EndScore}%</span>
                    <div class="slice">
                        <div class="bar"></div>
                        <div class="fill"></div>
                    </div>
                </div>
                </div>
            <br></br>
            <h2>Kilometer: {distance}</h2>
            <br></br>
            <h2>C02: {co2} kg</h2>
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
                };
}

export default QuizEnds;