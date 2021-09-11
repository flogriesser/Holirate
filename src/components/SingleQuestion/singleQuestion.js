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
import FormLabel from '@material-ui/core/FormLabel'
import '@fontsource/roboto';
import { ScoreHeader, theme } from "../stylesUI";
import Grid from '@material-ui/core/Grid';
import { QuizData } from '../Data/Fragen';
import { ThemeProvider } from "@material-ui/core";



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


            if (QuizData[currentIndex].options[index] === "Flugzeug") {
                Travelmode = "Flight";
            } else if (QuizData[currentIndex].options[index] === "Auto") {
                Travelmode = "Car";
            } else if (QuizData[currentIndex].options[index] === "Zug") {
                Travelmode = "Train";
            } else {
                points = QuizData[currentIndex].values[index];
            }

            this.indexValue = null;
            this.props.callbackSingleQuestion(index, points, Travelmode);
        }
    }/*checkAnswer*/



    render() {
        const { question, options, currentIndex, score } = this.props.state;
        //console.log("indexValue");
        //console.log(this.indexValue);
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
        )
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