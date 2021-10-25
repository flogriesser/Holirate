/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 10:29:35 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-06-12 08:35:57
 */

import { Component } from "react";
import { carValues } from "../Data/Data";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import ScoreBoard from "../Style/ScoreBoard";
import TippsCard from "../Style/TippsCard";
import DataCard from "../Style/DataCard";

import Sum from "../Helper/sum";


class QuizEnds extends Component {
    calculateCar = (distance, carPower, carType) => {
        //const {distance, carType, carPower} = this.props.state;
        var Factor = carValues[carPower][carType];
        return (Factor * distance).toFixed(0);
    }

    calculateTrain = () => {
        const { distance } = this.props.state;
        return (0.032 * distance).toFixed(0);
    }
    calculateFlight = (distance) => {
        //return (0.369 * distance).toFixed(0);
        return (0.469 * distance).toFixed(0);
    }

    calcScore = (co2) => {
        var score = 0;
        score = 75 - co2 * 75 / 1000;
        //score = 75 - co2 * 75 / 2500;

        if (co2 > 1000) {
        //if (co2 > 2500) {
            score = 0;
        }
        return score;
    }
    compareCo2 = (TravelMode, co2) => {
    }

    render() {
        const { score, distance, ChoosenTipps, ChoosenHeadlines, TravelMode, carPower, carType } = this.props.state;
        var co2 = 0;
        var EndScore = Sum(score);
        var bonus = 0;

        if (TravelMode === 'Car') {
            co2 = this.calculateCar(distance, carPower, carType);
            bonus = -10;
        }
        else if (TravelMode === 'Train') {
            co2 = this.calculateTrain(distance);
            bonus = -5;
        }
        else if (TravelMode === 'Flight') {
            co2 = this.calculateFlight(distance);
            bonus = -20;
        }
        EndScore = (EndScore + bonus + this.calcScore(co2)).toFixed(0);

        return (
            <div>
                <Grid container maxwidth="false" align="center" justifyContent="center" alignItems="center" >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography xs={5} sm={4} md={12} lg={12} component="h4" variant="h4" maxwidth="80%">
                            Dein Holirate Rating ist fertig!
                        </Typography>
                        <Typography xs={5} sm={4} md={12} lg={12} component="h4" variant="h4" maxwidth="80%">
                            Du erreichst:
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div  style={{maxWidth: "500px"}}>
                            <ScoreBoard EndScore={EndScore}></ScoreBoard>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={4}>
                        <DataCard Value={distance} Type="Kilometer"></DataCard>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={4}>
                        <DataCard Value={co2 + " kg"} Type="CO²"></DataCard>
                    </Grid>

                    <div style={{ padding: "5% 5%"}}>
                        <Typography  component="h4" variant="h4" maxwidth="80%">
                            Hier noch ein paar Tipps für deine Reise:
                        </Typography>
                    </div>

                    <Grid container >
                        {
                            ChoosenTipps.map((tipp, index) => (  //for each option, new paragrap
                                <Grid item xs={12}>
                                    <br></br>
                                    <TippsCard Value={ChoosenHeadlines[index]} id={index} Type={tipp} />
                                    <br></br>
                                </Grid>
                            ))
                        }
                    </Grid>

                </Grid>
            </div>
        )
    };
}

export default QuizEnds;