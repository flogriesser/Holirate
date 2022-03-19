import React from 'react';
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import Grid from '@material-ui/core/Grid';


const cardStyles = makeStyles({
    root: {
        display: 'flex',
        width: '90%',
        paddingBottom: "2%",
        paddingTop: "2%",
        marginLeft: "5%",
        marginRight: "5%",
        minHeight: "168px",
        flexGrow: 1,
        textAlign: 'center',
        maxWidth: "400px",
        borderRadius: "16px",
        alignItems: "center"
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


export default function DayCard(props) {
    const classes = cardStyles();

    //var value = props.Value;

    var factor = (props.Value / props.Ref).toFixed(0) + props.unit;

    return (
        <ThemeProvider theme={theme}>
            <Card className={classes.root} variant="outlined">
                <Grid container maxwidth="false" align="center" justifyContent="center" alignItems="center">
                    <CardContent className={classes.content}>
                        <Grid container alignItems="center" justifyContent="center" spacing={2} >
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Typography component="h5" variant="h5">
                                    {factor}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Typography variant="subtitle2" color="textSecondary">
                                    {props.Explanation}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
            </Card>
        </ThemeProvider>
    );
}


/*
    return (
        <ThemeProvider theme={theme}>
            <Card className={classes.root} variant="outlined">
                <Grid container maxwidth="false" align="center" justifyContent="center" alignItems="center">
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
                </Grid>
            </Card>
        </ThemeProvider>
    );

*/