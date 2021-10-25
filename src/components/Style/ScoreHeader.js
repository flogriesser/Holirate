import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { withStyles, } from "@material-ui/core/styles";
//import { makeStyles } from "@material-ui/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

import { QuizData } from '../Data/Fragen';


const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 20,
        width: '80%',
        borderRadius: 10,
        justifyContent: 'center'
    },
    colorPrimary: {
        backgroundColor:
            theme.palette.grey[theme.palette.type === "light" ? 200 : 700]
    },
    bar: {
        borderRadius: 5,
        backgroundColor: "primary"
    }
}))(LinearProgress);



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