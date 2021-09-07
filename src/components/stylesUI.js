import React from 'react';
import { withStyles, createTheme, makeStyles } from "@material-ui/core/styles";
//import { makeStyles } from "@material-ui/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';

import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./Style/AnimatedProgressProvider";


import { QuizData } from './Data/Fragen';



export const theme = createTheme({
    root: {
        flexGrow: 1,
    },
    palette: {
        primary: {
            main: '#66bb6a',
            contrastText: '#fff',
        },
        secondary: { main: "#F1B929" }, // This is just green.A700 as hex.
    },
    overrides: {
        MuiButton: {
            root: {
                backgroundColor: 'primary',
                text: {
                    borderRadius: 3,
                    border: 0,
                    color: 'white',
                },
            }
        },
    }
});

export const BorderLinearProgress = withStyles((theme) => ({
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

export function ScoreHeader(props) {
    return (
        <div>
            <br></br>
            <Grid container maxwidth="false" align="center" justifyContent="center" alignItems="center" >
                <Grid item xs={6} sm={4} md={3} lg={2} xl={1} >
                    <BorderLinearProgress variant="determinate" value={(props.currentIndex / QuizData.length) * 100} />
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

export function ScoreBoard(props) {
    return (
        <div style={{ padding: '5% 20%' }}>
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={props.EndScore}
                duration={2}
                easingFunction={easeQuadInOut}
            >
                {(value) => {
                    const roundedValue = Math.round(value);
                    if (value < 33) {
                        return (
                            <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}
                                circleRatio={0.75}
                                styles={buildStyles({
                                    pathTransition: "none",
                                    rotation: 1 / 2 + 1 / 8,
                                    strokeLinecap: "butt",
                                    trailColor: "#eee",
                                    textColor: "#f44336",
                                    pathColor: "#f44336"
                                })}
                            />
                        );
                    } else if (value >= 33 && value < 66) {
                        return (
                            <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}
                                circleRatio={0.75}
                                styles={buildStyles({
                                    pathTransition: "none",
                                    rotation: 1 / 2 + 1 / 8,
                                    strokeLinecap: "butt",
                                    trailColor: "#eee",
                                    textColor: "#ff9800",
                                    pathColor: "#ff9800"
                                })}
                            />
                        );
                    } else {
                        return (
                            <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}
                                circleRatio={0.75}
                                styles={buildStyles({
                                    pathTransition: "none",
                                    rotation: 1 / 2 + 1 / 8,
                                    strokeLinecap: "butt",
                                    trailColor: "#eee",
                                    textColor: "#66bb6a",
                                    pathColor: "#66bb6a"
                                })}
                            />
                        );
                    }
                }}
            </AnimatedProgressProvider>
        </div>
    );
}
const cardStyles = makeStyles({
    root: {
        maxWidth: "80%",
        Height: "80%",
        paddingBottom: "5%",
        paddingTop: "5%",
        flexGrow: 1,
    },
    paper: {
        textAlign: 'left',
        color: "primary",
    },
});


export function DataCard(props) {
    const classes = cardStyles();
    return (
        <Card className={classes.root} varian="outlined" >
            <CardContent >
                <Typography component="h5" variant="h5">
                    {props.Value}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {props.Type}
                </Typography>
            </CardContent>
        </Card>
    );
}

const TippsStyles = makeStyles({
    root: {
        maxWidth: "80%",
        paddingBottom: "5%",
        paddingTop: "5%",
        flexGrow: 1,
    },
    paper: {
        padding: 200,
        textAlign: 'left',
        color: "primary",
    },
});

export function TippsCard(props) {
    const classes = TippsStyles();
    return (
        <Card className={classes.root} >
            <CardContent >
                <Typography component="h5" variant="h5">
                    {props.Value}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {props.Type}
                </Typography>
            </CardContent>

        </Card>
    );
}


/*
const classes = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: "blue"
    }
}));
*/