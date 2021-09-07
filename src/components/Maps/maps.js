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
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from "@material-ui/core";
import { ScoreHeader, theme } from "../stylesUI";
import Button from '@material-ui/core/Button';



class Map extends React.Component {
  state = {
    directions: null,
    bounds: null
  };

  getNumber = () => {
    var distance = document.getElementById(0).value;
    console.log(distance);
    if (distance !== "") {
      this.props.callbackMaps(distance);
    } else {
      this.render();
    }
  }


  render() {
    const { currentIndex, score } = this.props.state;
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
              <FormLabel component="legend" aligncontent="center">{this.props.state.question}</FormLabel>
              <br></br>
              <TextField
                id="0"
                label="Kilometer"
                type="number"
                color="primary"
                min="1" placeholder="1"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                required
              />
              <br></br>
              <ThemeProvider theme={theme}>
                <Button variant='contained' color='primary' onClick={this.getNumber}>
                  Next
                </Button>
              </ThemeProvider>
            </FormControl>
          </Grid>
        </Grid>

      </div>
    );
  }
}

export default Map;