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
import { ScoreHeader } from "../stylesUI";

import { QuizData } from '../Data/Fragen';


var test = "1";

class Singlequestion extends React.Component {

    radioHandler = (event) => {
        console.log(event.target.value);
        test = parseInt(event.target.value);
        console.log(test);
    }


    //Check the answer
    handleSubmit = () => {
        if (test != null) {
            const { currentIndex } = this.props.state;
            var Travelmode = null;
            var points = 0;
            var index = test;
            console.log(index);


            if (QuizData[currentIndex].options[index] === "Flugzeug") {
                Travelmode = "Fligth";
            } else if (QuizData[currentIndex].options[index] === "Auto") {
                Travelmode = "Car";
            } else if (QuizData[currentIndex].options[index] === "Zug") {
                Travelmode = "Train";
            } else {
                points = QuizData[currentIndex].values[index];
            }


            this.props.callbackSingleQuestion(index, points, Travelmode);
        }
    }/*checkAnswer*/



    render() {
        const { question, options, currentIndex, score } = this.props.state;

        return (
            <div>
                <ScoreHeader score={score} currentIndex={currentIndex} />

                <FormControl component="fieldset">
                    <FormLabel component="legend">{question}</FormLabel>
                    <br></br>
                    <RadioGroup aria-label="quiz" name="quiz" value={test} onChange={this.radioHandler}>
                        {
                            options.map((option, index) => (  //for each option, new paragrap
                                <FormControlLabel value={index + 1}
                                    control={<Radio />}
                                    label={option} />
                            ))
                        }
                    </RadioGroup>
                    <Button type="submit" variant="outlined" color="primary" onClick={this.handleSubmit}>
                        Next
                    </Button>
                </FormControl>
            </div >
        )
    }
}

export default Singlequestion;