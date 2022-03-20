/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 17:23:53 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-05-29 17:35:49
 */

import React from "react";
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Typography from '@material-ui/core/Typography';
import '@fontsource/roboto';
import ScoreHeader from "../Style/ScoreHeader";
import Grid from '@material-ui/core/Grid';
import { QuizData } from '../Data/Fragen';
import Sum from "../Helper/sum";


class Singlequestion extends React.Component {
    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.indexValue = null;
    };

    forceUpdateHandler = () => {
        this.forceUpdate();
    };

    radioHandler = (event) => {
        //console.log(event.target.value);
        var test = parseInt(event.target.value);
        this.indexValue = test;
        //console.log(test);
        this.forceUpdateHandler();
    }

    //Check the answer
    handleSubmit = () => {
        if (this.indexValue != null) {
            const { currentIndex } = this.props.state;
            var Travelmode = null;
            var points = 0;
            var index = this.indexValue - 1;


            /*if (currentIndex === QuizData.length - 1) {*/
            if (currentIndex === 0) {
                Travelmode = QuizData[currentIndex].values[index];
            } else {
                points = QuizData[currentIndex].values[index];
            }

            this.indexValue = null; /*Needed to reset defaul locked answer*/
            this.props.callbackSingleQuestion(index, points, Travelmode);
        }
    }/*checkAnswer*/



    render() {
        const { question, options, currentIndex } = this.props.state;
        const Score = Sum(this.props.state.score)

        if (currentIndex === 0) {
            return (
                <div>
                    <ScoreHeader score={Score} currentIndex={currentIndex} />
                    <Grid container width="90%" align="center" justifyContent="center" alignItems="center" >
                        <Grid item xs={12} sm={6} md={6} lg={3}
                        >
                            <FormControl component="fieldset"
                                style={{
                                    textAlign: 'center',
                                    align: 'left',
                                    justifyContent: 'left',
                                    alignItems: 'left',
                                    width: '90%',
                                    marginLeft: '5%'
                                }}
                            >
                                <Typography variant="h5" aligncontent="center" gutterBottom component="div">
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
                            <Button variant='contained' color='primary' margin={1} endIcon={<ArrowRightIcon></ArrowRightIcon>} onClick={this.handleSubmit}>
                                Weiter
                            </Button>
                        </div>
                    </Grid>
                </div >
            );
        }
        else {
            return (
                <div>
                    <ScoreHeader score={Score} currentIndex={currentIndex} />
                    <Grid container width="90%" maxWidth="90%" align="center" justifyContent="center" alignItems="center" >
                        <Grid item xs={12} sm={6} md={6} lg={3}
                        >
                            <FormControl component="fieldset"
                                style={{
                                    textAlign: 'center',
                                    align: 'left',
                                    justifyContent: 'left',
                                    alignItems: 'left',
                                    width: '90%',
                                    marginLeft: '5%'
                                }}
                            >
                                <Typography variant="h5" aligncontent="center" gutterBottom component="div">
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
                            <Button variant='contained' color='primary' startIcon={<ArrowLeftIcon></ArrowLeftIcon>} onClick={this.props.callbackBackSingleQuestion}>
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
}

export default Singlequestion;


/*
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
                    <CircularProgressWithLabel  value={50} />
                </Grid>
*/