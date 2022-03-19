/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 10:29:52 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-05-29 17:36:31
 */

import React from "react";
import { FlightQuestion } from '../Data/Fragen';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { airports } from "./airports";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import ScoreHeader from "../Style/ScoreHeader";
import Sum from "../Helper/sum";

class Flight extends React.Component {
  //Check the answer
  handleSubmit = () => {
    var origin = document.getElementById("origin").value.split(/,/)[0];
    var destination = document.getElementById("destination").value.split(/,/)[0];

    if (origin !== "" && destination !== "" && origin !== destination) {
      console.log(origin);
      console.log(destination);

      var distance = 1000;
      this.props.callbackFlight(distance);
    }
  }/*checkAnswer*/


  render() {
    const { currentIndex } = this.props.state;
    var question = FlightQuestion[0].question;
    const Score = Sum(this.props.state.score)
    return (
      <div>
        <ScoreHeader score={Score} currentIndex={currentIndex} />
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
                renderInput={(params) => <TextField {...params} label="Herkunft" variant="outlined" />}
              />
              <br></br>
              <Autocomplete
                id="destination"
                options={airports}
                getOptionLabel={(option) => option.iata_code + ", " + option.name}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Ziel" variant="outlined" />}
              />
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


/*
class Flight extends Component{

    render() {
        const currentIndex = this.props.currentIndex;
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
*/
export default Flight;