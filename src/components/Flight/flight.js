/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 10:29:52 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-05-29 17:36:31
 */

import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { airports } from "./airports";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from "@material-ui/core";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import { ScoreHeader, theme } from "../stylesUI";


/*
function distance(lat1, lon1, lat2, lon2, unit) {
  if ((lat1 === lat2) && (lon1 === lon2)) {
      return 0;
  }
  else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
          dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit==="K") { dist = dist * 1.609344 }
      if (unit==="N") { dist = dist * 0.8684 }
      return dist;
  }
}

*/


class Flight extends React.Component {
  //Check the answer
  handleSubmit = () => {
    var origin = document.getElementById("origin").value.split(/,/)[0];
    var destination = document.getElementById("destination").value.split(/,/)[0];

    if (origin !== "" && destination !== "") {
      console.log(origin);
      console.log(destination);

      var distance = 1000;
      this.props.callbackMaps(distance);
    }
  }/*checkAnswer*/


  render() {

    const { question, currentIndex, score } = this.props.state;
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
              <Autocomplete
                id="origin"
                options={airports}
                getOptionLabel={(option) => option.iata_code + ", " + option.name}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Origin" variant="outlined" />}
              />
              <br></br>
              <Autocomplete
                id="destination"
                options={airports}
                getOptionLabel={(option) => option.iata_code + ", " + option.name}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Destination" variant="outlined" />}
              />
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

export default Flight;