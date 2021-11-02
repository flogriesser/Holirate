import React from 'react';
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Style/Theme';
import Grid from '@material-ui/core/Grid';


const cardStyles = makeStyles({
    root: {
        display: 'center',
        maxWidth: "400px",
        Width: "70%",
        paddingBottom: "0%",
        paddingTop: "0%",
        marginLeft: "5%",
        marginRight: "5%",
        flexGrow: 1,
    },
    content: {
        display: 'center',
        paddingTop: "4%",
        paddingBottom: "4%",
    },
    paper: {
        textAlign: 'left',
        color: "primary",
    },
});


export default function CircularCard(props) {
    const classes = cardStyles();

    var value = props.Value;

    var factor = value / props.Ref;
    var CircArray = [];
    var color = "primary";

    while (factor > 1) {
        CircArray.push(100);
        factor = factor - 1;
        color = "error";
    }

    CircArray.push(factor * 100);
    factor = ((value / props.Ref).toFixed(4) * 100).toFixed(2);

    return (
        <ThemeProvider theme={theme}>
            <Card className={classes.root} varian="outlined">
                <CardContent className={classes.content}>
                    <Grid container alignItems="center" justifyContent="center" spacing={2} >
                        {
                            CircArray.map((number, index) => (  //for each option, new paragrap
                                <Grid item>
                                    <CircularProgress variant="determinate" color={color} key={index} value={number} thickness={22} />
                                </Grid>
                            ))
                        }

                    </Grid>
                    <Typography variant="subtitle1" color="textSecondary">
                        {factor} %
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        {props.Explanation}
                    </Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}
