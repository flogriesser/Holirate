import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { QuizData } from '../Data/Fragen';

import {BorderLinearProgress} from './BorderLinearProgress';



export default function ScoreHeader(props) {
    return (
        <div>
            <br></br>
            <Grid container maxwidth="false" align="center" justifyContent="center" alignItems="center" >
                <Grid item xs={6} sm={4} md={3} lg={2} xl={1} >
                    <BorderLinearProgress variant="determinate" value={(props.currentIndex / (QuizData.length + 1)) * 100} />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
                    <Typography variant="h5" color="primary" gutterBottom>
                        Score
                    </Typography>
                    <Typography variant="h3" color="primary" gutterBottom>
                        {props.score}
                    </Typography>
                </Grid>
            </Grid>
            <br></br>
        </div>

    );
}