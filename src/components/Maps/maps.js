/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 10:29:11 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-06-12 08:35:09
 */
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import MapsAutocomplete from "./MapsAutocomplete";
import Button from '@material-ui/core/Button';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import ScoreHeader from "../Style/ScoreHeader";

import { TrainQuestion } from '../Data/Fragen';

import Sum from "../Helper/sum";

//import { LoadScript, DirectionsService } from "@react-google-maps/api";

var RouteDistance = 0;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


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
    errorMessage: false
  };

  callback = (distance) => {
    if (distance != null) {
      this.props.callbackDistance(distance);
    } else {
      this.setState({
        errorMessage: true
      })
      this.render();
    }
  }


  handleSubmit = () => {
    const { origin, destination } = this.state;
    if (origin !== "" && destination !== "" && origin !== destination && origin !== null && destination !== null) {
      console.log(origin, destination);
      var distance = calculateDistance(origin, destination, this.callback);
      console.log("After function " + distance);
    }
    //this.render();
  }

  callbackStart = (Start) => {
    if (Start != null) {
      this.setState({
        origin: Start.description
      })
    }
  }

  callbackZiel = (Ziel) => {
    if (Ziel != null) {
      this.setState({
        destination: Ziel.description
      })
    }
  }

  submitDistance = (distance) => {
    this.props.callbackDistance(distance);
  }

  handleMessageClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      errorMessage: false
    })
  };


  render() {
    const { currentIndex } = this.props.state;
    const score = Sum(this.props.state.score);
    const question = TrainQuestion[0].question;
    return (
      <div>
        <Snackbar open={this.state.errorMessage} autoHideDuration={6000} onClose={this.state.handleMessageClose}>
          <Alert onClose={this.handleMessageClose} severity="error" sx={{ width: '80%' }}>
            Wir konnten leider kein Route finden! Probiere es mit größeren Städten in der Nähe.
          </Alert>
        </Snackbar>
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
              <Typography variant="h6" aligncontent="center" gutterBottom component="div">
                {question}
              </Typography>
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