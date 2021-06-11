/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 10:29:35 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-05-29 10:32:03
 */

import { Component } from "react";
import {carValues} from "../Data/Data";
//import { QuizData } from '../Data/Fragen';



class QuizEnds extends Component{
    calculateCar = (distance, carPower, carType) => {
        //const {distance, carType, carPower} = this.props.state;

        var Factor = carValues[carPower][carType];



        return Factor*distance;
    }

    calculateTrain = () => {
        const {distance} = this.props.state;

        return 0.032*distance;
    }

    
    render(){
        const {score, distance, ChoosenTipps, TravelMode, carPower, carType} = this.props.state;
        var co2 = 0;

        if(TravelMode === 'Car'){
            co2 = this.calculateCar(distance, carPower, carType);
        }

    return (
        <div>
            <h1>Dein Holirate Rating ist fertig!</h1>
            <div className="circle-wrap">
                <div className="circle">

                    <div className="mask full">
                        <div className="fill" ></div>
                    </div>

                    <div className="mask half">
                        <div className="fill" style={{ transform: `rotate(${360 * score / 100}deg)` }}></div>
                    </div>

                    <div className="inside-circle">
                        {score}%
                    </div>
                </div>
            </div>
            <h2>Kilometer: {distance}</h2>
            <br></br>
            <h2>C02: {co2}</h2>
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


/*
            <h1>{this.props.state.co2} co2</h1>
            <h1>{this.props.state.adults} adults</h1>
            <h1>{this.props.state.children} children</h1>
            <h1>{this.props.state.num_backpags} num_backpags</h1>
            <h1>{this.props.state.kilo_backpags} kilo_backpags</h1>
            <h1>{this.props.state.days} days</h1>
            <h1>{this.props.state.weeks} weeks</h1>
            <h1>{this.props.state.carType} carType</h1>
            <h1>{this.props.state.carPower} carPower</h1>

*/