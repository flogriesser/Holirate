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
import FormLabel from '@material-ui/core/FormLabel'
import '@fontsource/roboto';
import { ScoreHeader, theme } from "../stylesUI";
import Grid from '@material-ui/core/Grid';
import { QuizData } from '../Data/Fragen';
import { ThemeProvider } from "@material-ui/core";

/*
const carPower = [
    "Gasoline",
    "Diesel",
    "Electric",
    "Hyprid",
    "Gas"
]


const carType ={
    small,
    middle: 1,
    SUV: 2
}
*/

class Car extends React.Component {
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
    handleSubmit = (answer, index) => {
        const { currentIndex } = this.props.state;
        var index = this.indexValue - 1;

        if (QuizData[currentIndex].category === "type") {
            this.props.callbackCarType(index);
        }
        else {
            this.props.callbackCarPower(index);
        }

    }/*checkAnswer*/




    render() {
        const { question, options, currentIndex, score } = this.props.state;
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

export default Car;