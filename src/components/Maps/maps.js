/*global google*/
//import ReactDOM from "react-dom";
import React from "react";
import Quiz from "../Quiz"

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
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          //changing the state of directions to the result of direction service
          RouteDistance = result.routes[0].legs[0].distance.value / 1000;
          console.log(RouteDistance);
          Quiz.distance = RouteDistance;
          Quiz.setDistance(result.routes[0].legs[0].distance.value/1000);
          document.getElementById('Distance').innerHTML = RouteDistance + " km";
          this.setState({
            directions: result
          });
        } else {
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
    return (
        <div>

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
                              
                        Calculate</div>
                        <br></br>
                        <h2 id="Distance"></h2>
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