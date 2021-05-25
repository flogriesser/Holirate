import { Component } from "react";
//import { QuizData } from '../Data/Fragen';

/*Factor = C02 per liter * Average consumption  */

/*Fixme Durchscnittsverbrauch pro Klasse  https://www.quarks.de/umwelt/klimawandel/co2-rechner-fuer-auto-flugzeug-und-co/*/
var carValues = {
    0: { /* pro Liter Benzin 2,32 kg CO2   */
        0: [
            2.32*5.7*0.01

        ],
        'Mittelklasse': [
            2.32*6.8*0.01
        ],
        'SUV / Van': [
            2.32*18.6*0.01
        ]
    },
    1: { /*  pro Liter Diesel 2,63 kg CO2 */
        'Kleinwagen': [
            2.63*4.4*0.01
        ],
        'Mittelklasse': [
            2.63*5.1*0.01
        ],
        'SUV / Van': [
            2.63*6.7*0.01
        ]
    },
    2: { /*0.99 kg per KM  (circa in Deutschland)*/
        'Kleinwagen': [
            0.99
        ],
        'Mittelklasse': [
            0.99
        ],
        'SUV / Van': [
            0.99
        ]
    },
    3: { /*pro kg Erdgas 2,23 kg CO2.  101 Gramm pro Kilometer*/
        'Kleinwagen': [
            0.101
        ],
        'Mittelklasse': [
            0.101
        ],
        'SUV / Van': [
            0.101
        ]
    }

};

var Test = {
    'Benzin': { /* pro Liter Benzin 2,32 kg CO2   */
        'Kleinwagen': [
            2.32*5.7*0.01

        ],
        'Mittelklasse': [
            2.32*6.8*0.01
        ],
        'SUV / Van': [
            2.32*18.6*0.01
        ]
    },
    'Diesel': { /*  pro Liter Diesel 2,63 kg CO2 */
        'Kleinwagen': [
            2.63*4.4*0.01
        ],
        'Mittelklasse': [
            2.63*5.1*0.01
        ],
        'SUV / Van': [
            2.63*6.7*0.01
        ]
    },
    'Elektro': { /*0.99 kg per KM  (circa in Deutschland)*/
        'Kleinwagen': [
            0.99
        ],
        'Mittelklasse': [
            0.99
        ],
        'SUV / Van': [
            0.99
        ]
    },
    'Gas': { /*pro kg Erdgas 2,23 kg CO2.  101 Gramm pro Kilometer*/
        'Kleinwagen': [
            0.101
        ],
        'Mittelklasse': [
            0.101
        ],
        'SUV / Van': [
            0.101
        ]
    }

};

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