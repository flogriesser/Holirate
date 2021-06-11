/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 10:29:11 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-06-11 20:55:39
 */

//import ReactDOM from "react-dom";
import React from "react";
//import Quiz from "../Quiz"
import { QuizData } from '../Data/Fragen';


var openrouteservice = require("openrouteservice-js");


var Directions = new openrouteservice.Directions({
  api_key: "5b3ce3597851110001cf62480409f2e1bda9489b88ce73ddc2096464"
});

var Geocode = new openrouteservice.Geocode({
  api_key: "5b3ce3597851110001cf62480409f2e1bda9489b88ce73ddc2096464"
});

let orsDirections = new openrouteservice.Directions({
  api_key: "5b3ce3597851110001cf62480409f2e1bda9489b88ce73ddc2096464"
});




class Map extends React.Component {
  state = {
    directions: null,
    bounds: null
  };


  // [[11.581981,48.135125],[11.4257541,48.7665351]]
  // 5b3ce3597851110001cf62480409f2e1bda9489b88ce73ddc2096464

  testMap = () =>{
     
    var distance = 0;

    orsDirections.calculate({
      coordinates: [[11.581981,48.135125],[11.4257541,48.7665351]],
      profile: "driving-car",
      extra_info: ["waytype", "steepness"],
      format: "json",
      api_version: 'v2',
    })
      .then(function(json) {
          let response = JSON.stringify(json, null, "\t")
          //console.log(json);
          console.log(json.routes[0].segments[0].distance);
          distance = json.routes[0].segments[0].distance;
      })
      .catch(function(err) {
          let response = JSON.stringify(err, null, "\t")
          console.error(response);
      });

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
        <br></br>o

        <div className={`options-container`}>
          <p className="options-text">Startpunkt</p>
          <input className="OwnInput" type="text" id="Start" ></input>
        </div>
        <div className={`options-container`}>
          <p className="options-text">Reiseziel</p>
          <input className="OwnInput" type="text" id="Stop" ></input>
        </div>
        <br></br>
        <br></br>
        <div className="OwnSubmit"
                            onClick={() => this.testMap()}>
                        Berechne deine Kilometer</div>
        <br></br>
        <h2 id="Distance">Kilometer: </h2>
        <br></br>

      </div>
    );
  }
}

export default Map;