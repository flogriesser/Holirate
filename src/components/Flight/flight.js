/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 10:29:52 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-05-29 17:36:31
 */

import React from "react";
import { FlightQuestion } from '../Data/Fragen';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MapsAutocomplete from "../Maps/MapsAutocomplete";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import ScoreHeader from "../Style/ScoreHeader";
import Sum from "../Helper/sum";


import getDistance from 'geolib/es/getDistance';


function geocodePlaceId(place_id, callback) {
  const geocoder = new window.google.maps.Geocoder();
  geocoder.geocode({ placeId: place_id }, function (results, status) {
    if (status === window.google.maps.GeocoderStatus.OK) {
      //console.log(results[0].geometry.location.lat(), results[0].geometry.location.lng());
      callback(results[0].geometry.location.lat(), results[0].geometry.location.lng());
    } else {
      window.alert("No results found");
    }
  }
  );
}


/*
Class Flight:
Handles Autocomplete of Origin and Destination
Calculates Distance and sends to Quiz
*/
class Flight extends React.Component {
  state = {
    distance: null,
    originLat: "",
    originLng: "",
    destinationLat: "",
    destinationLng: "",
  };


  handleSubmit = () => {
    const { originLat, originLng, destinationLat, destinationLng } = this.state;
    if (originLat !== "" && originLat !== destinationLat &&
      originLng !== "" && originLng !== destinationLng &&
      destinationLat !== "" &&
      destinationLng !== "") {
      var distance = getDistance(
        { latitude: originLat, longitude: originLng },
        { latitude: destinationLat, longitude: destinationLng }
      ) / 1000;
      console.log("After function " + distance);
      this.props.callbackDistance(distance);
    }
    //this.render();
  }

  callbackStart = (Start) => {
    if (Start !== null) {
      geocodePlaceId(Start.place_id, this.callbackGeoCodeStart);
    }
  }

  callbackGeoCodeStart = (lat, lng) => {
    this.setState({
      originLat: lat,
      originLng: lng
    })
  }

  callbackZiel = (Ziel) => {
    if (Ziel !== null) {
      geocodePlaceId(Ziel.place_id, this.callbackGeoCodeZiel);
    }
  }

  callbackGeoCodeZiel = (lat, lng) => {
    this.setState({
      destinationLat: lat,
      destinationLng: lng
    })
  }

  render() {
    const { currentIndex } = this.props.state;
    const score = Sum(this.props.state.score);
    const question = FlightQuestion[0].question;
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
export default Flight;