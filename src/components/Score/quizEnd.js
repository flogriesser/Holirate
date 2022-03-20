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
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import COcompare from "../Style/COcompare";
import DataCard from "../Style/DataCard";
import DayCard from "../Style/DayCard";
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
        var co2Car = 0;
        var co2Train = 0;
        var co2Flight = 0;
        var EndScore = Sum(score);
        var bonus = 0;
        var DoubleDistance = distance.toFixed(0) * 2;

        if (TravelMode === 'Car') {
            co2 = this.calculateCar(DoubleDistance, carPower, carType);
            co2Car = co2;
            co2Train = this.calculateTrain(DoubleDistance);
            co2Flight = this.calculateFlight(DoubleDistance);
            bonus = 0;
        }
        else if (TravelMode === 'Train') {
            co2 = this.calculateTrain(DoubleDistance);
            co2Car = this.calculateCar(DoubleDistance, carPower, carType);
            co2Train = co2;
            co2Flight = this.calculateFlight(DoubleDistance);
            bonus = 0;
        }
        else if (TravelMode === 'Flight') {
            co2 = this.calculateFlight(DoubleDistance);
            co2Car = this.calculateCar(DoubleDistance, 0, 1); /*Benziner Mittelklasse*/
            co2Train = this.calculateTrain(DoubleDistance);
            co2Flight = co2;
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
                        <div style={{ maxWidth: "350px" }}>
                            <ScoreBoard EndScore={EndScore}></ScoreBoard>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <Box sx={{ width: '95%', maxWidth: '700px' }}>
                            <Typography item xs={12} sm={12} md={12} lg={12} variant="body1" maxwidth="80%" align="justify" maxWidth="500px">
                                Du erreichst {EndScore} von 100 Punkten. Der Großteil deines Scores wird über den CO² Ausstoß bestimmt.
                                Hier kannst du dich am leichtesten verbessern, wenn du zum Beispiel die Transportmittel auf deiner Reise überdenkst.
                                Konkrete Tipps, wie du deine Reise umweltfreundlicher gestalten kannst, findest du weiter unten.
                            </Typography>
                        </Box>
                        <Box sx={{ p: 2 }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <Typography xs={12} sm={12} md={12} lg={12} component="h5" variant="h5" maxwidth="80%">
                            Deine Daten:
                        </Typography>
                        <Box sx={{ p: 1 }} />
                    </Grid>
                    <Grid container spacing={2} justifyContent="center">
                        <Box sx={{ width: '95%', maxWidth: '700px' }}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <DataCard Value={DoubleDistance} Type="Kilometer" Explanation="An- und Abreise"></DataCard>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <DataCard Value={co2 + " Kg"} Type="CO²" Explanation="Gesamter Verbrauch"></DataCard>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <DayCard Value={co2} unit=" %" Ref={21} Explanation="Deines Jahresverbrauchs. 2,1 Tonnen CO² sollten wir maximal im Jahr verbrauchen."></DayCard>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <DayCard Value={co2} unit=" Tage" Ref={412 / 365} Explanation="Musst du vegetarisch leben um die gleiche Menge CO² einzusparen, wie du mit dieser Reise verbrauchst."></DayCard>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <DayCard Value={co2} unit=" Buchen" Ref={12.5} Explanation="So viele Bäume (Buche) werden benötigt um den CO² Ausstoß zu kompensieren"></DayCard>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <DayCard Value={co2} unit=" Jeans" Ref={15.6} Explanation="Hätten mit diesem CO² Verbrauch hergestellt werden"></DayCard>
                                </Grid>
                                <Box sx={{ p: 2 }} />
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid container spacing={2} justifyContent="center">
                        <div style={{ padding: "5% 5%" }}>
                            <Box sx={{ p: 2 }} />
                            <Typography variant="h6" maxwidth="80%">
                                Hier noch ein paar Tipps für deine Reise:
                            </Typography>
                        </div>
                    </Grid>
                    <Grid container spacing={2} justifyContent="center">
                        {
                            ChoosenTipps.slice(0, 4).map((tipp, index) => (  //for each option, new paragrap
                                <Grid item xs={12}>
                                    <TippsCard Headline={ChoosenHeadlines[index]} Answer={ChoosenAnswers[index]} id={index} tipp={tipp} />
                                </Grid>
                            ))
                        }
                    </Grid>

                    
                    <Box sx={{ width: '95%', maxWidth: '700px' }}>
                        
                    <Box sx={{ p: 2 }} justifyContent="center" />

                        <Accordion  justifyContent="center"> 
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Hier findest du noch mehr Tipps</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2} justifyContent="center">
                                    {
                                        ChoosenTipps.slice(0, 4).map((tipp, index) => (  //for each option, new paragrap
                                            <Grid item xs={12}>
                                                <TippsCard Headline={ChoosenHeadlines[index]} Answer={ChoosenAnswers[index]} id={index} tipp={tipp} />
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Box>


                    <Box sx={{ p: 3 }} />
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

/* Vergleich:
<COcompare choosen={TravelMode} co2={co2} co2Car={co2Car} co2Train={co2Train} co2Flight={co2Flight}></COcompare>
*/

export default QuizEnds;