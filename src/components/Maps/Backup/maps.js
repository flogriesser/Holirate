/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 10:29:11 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-05-29 12:03:27
 */

/*global google*/
//import ReactDOM from "react-dom";
import React from "react";
//import Quiz from "../Quiz"
import { QuizData } from '../Data/Fragen';


import {
  GoogleMap,
  /*StandaloneSearchBox,*/
  DirectionsRenderer,
} from "@react-google-maps/api";

const defaultLocation = { lat: 48.1374300, lng: 11.5754900 };
let destination = { };
let origin = {  };
var RouteDistance = 0;


let directionsService;

class Map extends React.Component {
  state = {
    directions: null,
    bounds: null
  };

  onMapLoad = map => {
    directionsService = new google.maps.DirectionsService();

    //load default origin and destination
    //this.changeDirection(origin, destination);
  };

  //function that is called when SearchBox has loaded and assigned ref to this.searchbox  to get the searchbox object
  onSBLoad = ref => {
    this.searchBox = ref;
  };

  onPlacesChanged = () => {
    //pass the new place location as the origin
    origin = document.getElementById("Start").value;
    console.log(origin);
    destination = document.getElementById("Stop").value;
    this.changeDirection(
      origin,
      destination
    );
  };

  //function that is calling the directions service
  changeDirection = (origin, destination) => {
    var mode = google.maps.TravelMode.DRIVING;
    
    if (this.props.TravelMode === "Train"){
      mode = google.maps.TravelMode.TRANSIT;
    }


    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: mode
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          //changing the state of directions to the result of direction service
          RouteDistance = result.routes[0].legs[0].distance.value / 1000;
          console.log(RouteDistance);
          //Quiz.distance = RouteDistance;
          this.props.setDistance(result.routes[0].legs[0].distance.value/1000);
          document.getElementById('Distance').innerHTML = RouteDistance + " km";
          this.setState({
            directions: result
          });
        } else {
          alert("Wir konnten leider keine Route für dich finden. Versuche es mit größen Städten in der Nähe");
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };
/*
   sendDistance= () => {
    if(RouteDistance !== 0)
    {
      //Quiz.setDistance(RouteDistance);
      Quiz.afterMap();
    }  

  }
*/
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
        <br></br>
        <h2 id="Distance">C</h2>
        <br></br>

        <GoogleMap
          center={defaultLocation}
          zoom={10}
          onLoad={map => this.onMapLoad(map)}
          mapContainerStyle={{ height: "40vh", width: "60vw" }}
        >
          {this.state.directions !== null && (
            <DirectionsRenderer directions={this.state.directions} />
          )}
        </GoogleMap>
      </div>
    );
  }
}

export default Map;