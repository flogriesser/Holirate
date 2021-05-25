import { Component } from "react";
import { QuizData } from '../Data/Fragen';


//Class is obsolete right now
/*
        } else if (type === "number") {
            return (
                    <Number state={this.state}  callbackPeople={this.callbackPeople} 
                                                callbackDuration={this.callbackDuration} 
                                                callbackBaggage={this.callbackBaggage}
                    />                
                )
*/

class Number extends Component{

    checkDuration = () =>{
        var days = document.getElementById(0).value;
        var weeks = document.getElementById(1).value;
        this.props.callbackDuration(days, weeks)
    }

    checkPeople = () =>{
        var Adults = document.getElementById(0).value;
        var Childs = document.getElementById(1).value;
        console.log(Adults);
        console.log(Childs);

        this.props.callbackPeople(Adults, Childs);
    }

    checkBaggage = () =>{
        var number = document.getElementById(0).value;
        var kilo = document.getElementById(1).value;

        this.props.callbackBaggage(number, kilo);
    }

    render(){
        const {score, question, options, currentIndex} = this.props.state;

        var fct; 
        

        if(QuizData[currentIndex].category === "duration"){
            fct = this.checkDuration;
        }else if(QuizData[currentIndex].category === "people"){
            fct = this.checkPeople;
        }else if(QuizData[currentIndex].category === "baggage"){
            fct = this.checkBaggage;
        }
        
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
                {
                    options.map((option, index) => (  //for each option, new paragrap
                        <div key={index} className={`options-container`}>
                            <p className="options-text">{option}</p>
                            <input className="OwnInput" type="number" id={index} name="quantity" min="1" placeholder="1" required></input>
                        </div>
                    ))
                }
                <br></br>
                <div className="OwnSubmit"
                    onClick={() => fct()}>
                    Submit</div>
            </div >)
    };
}

export default Number;

//Callback Functions for mother class
/*

    callbackPeople = (Adults, Childs) =>{

        this.setState({
            adults: Adults,
            children: Childs,
            currentIndex: this.state.currentIndex + 1,
        })
    }

    callbackDuration = (days, weeks) =>{

        this.setState({
            days: days,
            weeks: weeks,
            currentIndex: this.state.currentIndex + 1,
        })
    }


    callbackBaggage = (number, kilo) =>{

        this.setState({
            num_baggage:0,
            kilo_baggage: 0,
            currentIndex: this.state.currentIndex + 1,
        })

    }
*/