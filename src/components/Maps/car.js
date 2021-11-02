/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 10:28:59 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-05-29 17:36:52
 */

import React from "react";
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import '@fontsource/roboto';

import MapsAutocomplete from "./MapsAutocomplete";
import Grid from '@material-ui/core/Grid';
import { CarQuestion } from '../Data/Fragen';
import ScoreHeader from "../Style/ScoreHeader";
import Sum from "../Helper/sum";

//import { LoadScript, DirectionsService } from "@react-google-maps/api";

//const google = window.google;
var RouteDistance = 0;

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


function calculateDistance(origin, destination, callback) {
    let directionsService = new window.google.maps.DirectionsService();
    var mode = window.google.maps.TravelMode.DRIVING;

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



class Car extends React.Component {
    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.indexValue = null;
    };

    state = {
        currentIndexCar: 0,
        Power: null,
        Type: null,
        origin: "",
        destination: "",
        errorMessage: false
    }

    forceUpdateHandler = () => {
        this.forceUpdate();
    };


    callback = (distance) => {
        if (distance != null) {
            this.props.callbackCar(distance, this.state.Power, this.state.Type);
        } else {
            this.setState({
                errorMessage: true
            });
            this.render();
        }
    }

    callbackBackCar = () => {
        if (this.state.currentIndexCar !== 0) {
            this.setState({
                currentIndexCar: this.state.currentIndexCar - 1,
            });
        } else {
            this.props.callbackBack();
        }
    }

    radioHandler = (event) => {
        //console.log(event.target.value);
        var test = parseInt(event.target.value);
        this.indexValue = test;
        //console.log(test);
        this.forceUpdateHandler();
    }


    //Check the answer
    handleSubmit = (answer) => {
        if (this.indexValue != null) {
            const { currentIndexCar } = this.state;
            var index = this.indexValue - 1;
            if (currentIndexCar === 0) {
                this.setState({
                    currentIndexCar: currentIndexCar + 1,
                    Power: index
                });
            } else if (currentIndexCar === 1) {
                this.setState({
                    currentIndexCar: currentIndexCar + 1,
                    Type: index
                });
            }
            this.indexValue = null; /*Needed to reset defaul locked answer*/
        }
    }/*checkAnswer*/

    handleDistance = () => {
        const { origin, destination } = this.state;
        if (origin !== "" && destination !== "" && origin !== destination && origin !== null && destination !== null) {
            calculateDistance(origin, destination, this.callback);
            //console.log("After function " + distance);
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

    handleMessageClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            errorMessage: false
        })
    };


    render() {
        const { currentIndexCar } = this.state;
        const { score, currentIndex } = this.props.state;
        const Score = Sum(score);

        //console.log(this.state.Power);
        //console.log(this.state.Type);

        const question = CarQuestion[currentIndexCar].question;
        const options = CarQuestion[currentIndexCar].options;

        if (currentIndexCar < CarQuestion.length - 1) {
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
                                <Typography variant="h6" aligncontent="center" gutterBottom component="div">
                                    {question}
                                </Typography>
                                <RadioGroup name="quiz" value={this.indexValue} onChange={this.radioHandler}>
                                    {
                                        options.map((option, index) => (  //for each option, new paragrap
                                            <FormControlLabel value={index + 1}
                                                key={index + 1}//for dumb unique key
                                                control={<Radio
                                                    color="primary"
                                                    checked={this.indexValue === (index + 1)} />}
                                                label={option} />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container maxwidth="false" align="center" justifyContent="center" alignItems="center" >
                        <div style={{ padding: 20 }}>
                            <Button variant='contained' color='primary' startIcon={<ArrowLeftIcon></ArrowLeftIcon>} onClick={this.callbackBackCar}>
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
            )
        } else {
            return (
                <div>
                    <Snackbar open={this.state.errorMessage} autoHideDuration={6000} onClose={this.state.handleMessageClose}>
                        <Alert onClose={this.handleMessageClose} severity="error" sx={{ width: '80%' }}>
                            Wir konnten leider kein Route finden! Probiere es mit größeren Städten in der Nähe.
                        </Alert>
                    </Snackbar>
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
                            <Button variant='contained' color='primary' startIcon={<ArrowLeftIcon></ArrowLeftIcon>} onClick={this.callbackBackCar}>
                                Zurück
                            </Button>
                        </div>
                        <div style={{ padding: 20 }}>
                            <Button variant='contained' color='primary' margin={1} endIcon={<ArrowRightIcon></ArrowRightIcon>} onClick={this.handleDistance}>
                                Weiter
                            </Button>
                        </div>
                    </Grid>
                </div >
            );
        }
    }
}

export default Car;