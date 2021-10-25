/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 10:29:11 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-06-12 08:35:09
 */
import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import MapsAutocomplete from "./MapsAutocomplete";
import Button from '@material-ui/core/Button';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import ScoreHeader from "../Style/ScoreHeader";

import { TrainQuestion } from '../Data/Fragen';

import Sum from "../Helper/sum";

//import { LoadScript, DirectionsService } from "@react-google-maps/api";

var RouteDistance = 0;



function calculateDistance(origin, destination, callback) {
  let directionsService = new window.google.maps.DirectionsService();
  var mode = window.google.maps.TravelMode.TRANSIT;

  var request = {
    origin: origin,
    destination: destination,
    travelMode: mode
  };
  directionsService.route(request, function (result, status) {
    if (status === window.google.maps.DirectionsStatus.OK) {
      RouteDistance = result.routes[0].legs[0].distance.value / 1000;
      console.log("Inside changeDirection " + RouteDistance);
      callback(RouteDistance);
    } else {
      alert("Wir konnten leider keine Route für dich finden. Versuche es mit größen Städten in der Nähe");
      console.error(`error fetching directions ${result}`);
      RouteDistance = null;
      callback(RouteDistance);
    }
  }
  );
};




class Train extends React.Component {
  state = {
    distance: null,
    origin: "",
    destination: "",
  };

  callback = (distance) => {
    if (distance != null) {
      this.props.callbackDistance(distance);
    } else {
      this.render();
    }
  }


  handleSubmit = () => {
    const { origin, destination } = this.state;
    if (origin !== "" && destination !== "" && origin !== destination) {
      var distance = calculateDistance(origin, destination, this.callback);
      console.log("After function " + distance);
    }
    this.render();
  }

  callbackStart = (Start) => {
    this.setState({
      origin: Start.description
    })
  }

  callbackZiel = (Ziel) => {
    this.setState({
      destination: Ziel.description
    })
  }

  /*
    changeDirection = (origin, destination) => {
      let directionsService = new window.google.maps.DirectionsService();
      var mode = window.google.maps.TravelMode.TRANSIT;
  
      var request = {
        origin: origin,
        destination: destination,
        travelMode: mode
      };
      directionsService.route(request, function (result, status) {
        if (status === window.google.maps.DirectionsStatus.OK) {
          RouteDistance = result.routes[0].legs[0].distance.value / 1000;
          console.log("Inside changeDirection");
          console.log(RouteDistance);
          this.submitDistance(RouteDistance);
        } else {
          alert("Wir konnten leider keine Route für dich finden. Versuche es mit größen Städten in der Nähe");
          console.error(`error fetching directions ${result}`);
          RouteDistance = null;
        }
      }
      );
    };
  */
  submitDistance = (distance) => {
    this.props.callbackDistance(distance);
  }


  render() {
    const { currentIndex } = this.props.state;
    const score = Sum(this.props.state.score);
    const question = TrainQuestion[0].question;
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
              <MapsAutocomplete label="Herkunft" callbackPlace={this.callbackStart}></MapsAutocomplete>
              <br></br>
              <MapsAutocomplete label="Ziel" callbackPlace={this.callbackZiel}></MapsAutocomplete>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container maxwidth="false" align="center" justifyContent="center" alignItems="center" >
          <div style={{ padding: 20 }}>
            <Button variant='contained' color='primary' startIcon={<ArrowLeftIcon></ArrowLeftIcon>} onClick={this.props.callbackBack}>
              Zurück
            </Button>
          </div>
          <div style={{ padding: 20 }}>
            <Button variant='contained' color='primary' margin={1} endIcon={<ArrowRightIcon></ArrowRightIcon>} onClick={this.handleSubmit}>
              Weiter
            </Button>
          </div>
        </Grid>
      </div >
    );
  }
}

export default Train;