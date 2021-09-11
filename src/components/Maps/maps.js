/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 10:29:11 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-06-12 08:35:09
 */

//import ReactDOM from "react-dom";
import React from "react";
//import { QuizData } from '../Data/Fragen';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from "@material-ui/core";
import { ScoreHeader, theme } from "../stylesUI";
import { MapsAutocomplete } from "./MapsAutocomplete";
import Button from '@material-ui/core/Button';


import {
  DirectionsService
} from "@react-google-maps/api";
const google = window.google;


var RouteDistance = 0;
var directionsService

class Map extends React.Component {
  state = {
    directions: null,
    distance: null,
    bounds: null
  };

  handleSubmit = () => {
    var origin = document.getElementById(0).value;
    var destination = document.getElementById().value;
    if (origin !== "" && destination !== "") {
      directionsService = new google.maps.DirectionsService();

      var distance = this.changeDirection(origin, destination);
      if(distance !== null){
      this.props.callbackMaps(distance);
      }else{
        this.render();
      }
    } else {
      this.render();
    }
  } 
  
  //function that is calling the directions service
  changeDirection = (origin, destination) => {
    var mode = google.maps.TravelMode.DRIVING;
    directionsService = new google.maps.DirectionsService();
    
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
          return RouteDistance;
        } else {
          alert("Wir konnten leider keine Route für dich finden. Versuche es mit größen Städten in der Nähe");
          console.error(`error fetching directions ${result}`);
          return null;
        }
      }
    );
  };


  render() {
    const { currentIndex, score, question } = this.props.state;
    return (
      <div>
        <ScoreHeader score={score} currentIndex={currentIndex} />
        <Grid container maxwidth="false" align="center" justifyContent="center" alignItems="center" >
          <Grid item xs={12} sm={12} md={6} lg={4}
            style={{
              textAlign: 'center',
              align: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              width: '80%',
              margin: 'center'
            }}
          >
            <FormControl component="fieldset" >
              <FormLabel component="legend" aligncontent="center">{question}</FormLabel>
              <br></br>
              <MapsAutocomplete> id={0}</MapsAutocomplete>
              <br></br>
              <MapsAutocomplete> id={1}</MapsAutocomplete>
              <br></br>
              <ThemeProvider theme={theme}>
                <Button variant='contained' color='primary' onClick={this.handleSubmit}>
                  Next
                </Button>
              </ThemeProvider>
            </FormControl>
          </Grid>
        </Grid>
      </div >
    );
  }
}

export default Map;