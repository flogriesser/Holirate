import React, { Component } from "react";
import { QuizData } from '../Data/Fragen';


class Flight extends Component{

    render() {
        const currentIndex = this.props.currentIndex;
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
                  {this.props.score}
                </h1>
              </div>
            </div>
            <br></br>
            <h2>{this.props.question}</h2>
            <br></br>
    
            <div className={`options-container`}>
              <p className="options-text">Startpunkt</p>
              <input className="OwnInput" type="text" id="Start" ></input>
            </div>
            <div className={`options-container`}>
              <p className="options-text">Reiseziel</p>
              <input className="OwnInput" type="text" id="Stop" ></input>
            </div>
            <div className="OwnSubmit"
              onClick={() => this.onPlacesChanged()}>
              Calculate
            </div>
        </div>
            )
    }
}

export default Flight;