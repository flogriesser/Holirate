import { Component } from "react";
import { QuizData } from '../Data/Fragen';


class QuizEnds extends Component{

    calculateC02 = () => {
        const {distance, carType, carPower} = this.props.state;
        

    }

    
    render(){
        const {score, distance, ChoosenTipps} = this.props.state;
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