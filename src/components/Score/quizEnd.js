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
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';

import DataCard from "../Style/DataCard";
import CircularCard from "../Style/CircularCard";
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

    reloadQuiz = () => {
        window.location.reload();
    }


    render() {
        const { score, distance, ChoosenTipps, ChoosenHeadlines, ChoosenAnswers, TravelMode, carPower, carType } = this.props.state;
        var co2 = 0;
        var EndScore = Sum(score);
        var bonus = 0;
        var DoubleDistance = distance.toFixed(0) * 2;

        if (TravelMode === 'Car') {
            co2 = this.calculateCar(DoubleDistance, carPower, carType);
            bonus = 0;
        }
        else if (TravelMode === 'Train') {
            co2 = this.calculateTrain(DoubleDistance);
            bonus = 0;
        }
        else if (TravelMode === 'Flight') {
            co2 = this.calculateFlight(DoubleDistance);
            bonus = 0;
        }
        EndScore = (EndScore + bonus + this.calcScore(co2)).toFixed(0);
        if (EndScore < 0) {
            EndScore = 0; /*FIXME only that no negative number is possible*/
        } else if (EndScore > 100) {
            EndScore = 100; /*FIXME only that not more than 100% is possible*/
        }

        return (
            <div>
                <Grid container maxwidth="false" align="center" justifyContent="center" alignItems="center" >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography xs={5} sm={4} md={12} lg={12} component="h5" variant="h5" maxwidth="80%">
                            Dein HoliRating ist fertig!
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div style={{ maxWidth: "500px" }}>
                            <ScoreBoard EndScore={EndScore}></ScoreBoard>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <Typography item xs={12} sm={12} md={12} lg={12} variant="body1" maxwidth="80%" align="center" maxWidth="500px">
                            Du erreichst {EndScore} von 100 Punkten. Der Großteil deines Scores wird über den CO² Ausstoß bestimmt.
                            Hier kannst du dich am leichtesten verbessern, wenn du zum Beispiel die Transportmittel auf deiner Reise überdenkst.
                            Konkrete Tipps, wie du deine Reise umweltfreundlicher gestalten kannst, findest du weiter unten.
                        </Typography>
                        <Box sx={{ p: 2 }} />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <Typography xs={12} sm={12} md={12} lg={12} component="h5" variant="h5" maxwidth="80%">
                            Deine Daten:
                        </Typography>
                        <Box sx={{ p: 1 }} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <DataCard Value={DoubleDistance} Type="Kilometer" Explanation="An- und Abreise"></DataCard>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <DataCard Value={co2 + " kg"} Type="CO²" Explanation="Gesamter Verbrauch"></DataCard>
                    </Grid>

                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Box sx={{ p: 3 }} />
                        <CircularCard Value={co2} Ref={8100} Type="CO²" Explanation="Der jährlichen CO² Emissionen pro Kopf in der EU"></CircularCard>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Box sx={{ p: 3 }} />
                        <CircularCard Value={co2} Ref={412} Type="CO²" Explanation="Wenn du so viele Tage/Jahre vegetarisch leben würdest, hättest du den gleichen CO2-Fußabdruck wie mit dieser Reise. "></CircularCard>
                    </Grid>
                    <div style={{ padding: "5% 5%" }}>
                        <Box sx={{ p: 3 }} />
                        <Typography variant="h6" maxwidth="80%">
                            Hier noch ein paar Tipps für deine Reise:
                        </Typography>
                    </div>

                    <Grid container spacing={2} justifyContent="center">
                        {
                            ChoosenTipps.map((tipp, index) => (  //for each option, new paragrap
                                <Grid item xs={12}>
                                    <TippsCard Headline={ChoosenHeadlines[index]} Answer={ChoosenAnswers[index]} id={index} tipp={tipp} />
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid container maxwidth="false" align="center" justifyContent="center" alignItems="center" >
                        <div style={{ padding: 20 }}>
                            <Button variant='contained' color='primary' onClick={this.reloadQuiz}>
                                Rating wiederholen
                            </Button>
                        </div>
                        <div style={{ padding: 20 }}>
                            <Button variant='contained' color='primary' margin={1} href="https://holirate.com/feedback/" target="_blank">
                                Feedback geben 
                            </Button>
                        </div>
                    </Grid>
                </Grid >
            </div>
        )
    };
}

export default QuizEnds;