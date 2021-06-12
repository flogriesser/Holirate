/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 10:29:11 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-06-12 08:35:09
 */

//import ReactDOM from "react-dom";
import React from "react";
//import Quiz from "../Quiz"
import { QuizData } from '../Data/Fragen';


class Map extends React.Component {
  state = {
    directions: null,
    bounds: null
  };

getNumber = () =>{
  var distance = document.getElementById(0).value;
  console.log(distance);
  if(distance != ""){
  this.props.callbackMaps(distance);
  }else{
    this.render();
  }
}

  
  render() {
    const currentIndex = this.props.state.currentIndex;
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
              {this.props.state.score}
            </h1>
          </div>
        </div>
        <br></br>
        <h2>{this.props.state.question}</h2>
        <br></br>
        <div key="0" className={`options-container`}>
                            <p className="options-text">Kilometer</p>
                            <input className="OwnInput" type="number" id="0" name="quantity" min="1" placeholder="1" required></input>
        </div>
        <br></br>
        <div className="OwnSubmit"
                    onClick={() => this.getNumber()}>
                    Submit</div>
      </div>
    );
  }
}

export default Map;