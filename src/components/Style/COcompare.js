import React from 'react';
import { BorderLinearProgress } from './BorderLinearProgress';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from './Theme';

//FIXME removed Mallorca Flight in Comparison

export default function COcompare(props) {
    const co2Malle = 925;
    var maxNumber = Math.max(props.co2Car, props.co2Train, props.co2Flight, co2Malle);

    console.log(maxNumber);
    console.log("Test");
    
    if (props.choosen === "Train") {
        return (
            <ThemeProvider theme={theme}>
                <Box sx={{ width: '95%', maxWidth: '700px' }}>
                    <Typography>Dein Transportmittel Zug: {props.co2} Kg</Typography>
                    <BorderLinearProgress variant="determinate" value={100*props.co2/maxNumber} />
                    <br></br>
                    <Typography>Mit einem Mittelklasse Auto: {props.co2Car} Kg</Typography>
                    <BorderLinearProgress variant="determinate" value={100*props.co2Car/maxNumber} />
                    <br></br>
                    <Typography>Mit dem Flugzeug: {props.co2Flight} Kg</Typography>
                    <BorderLinearProgress variant="determinate" value={100*props.co2Flight/maxNumber} />
                </Box>
            </ThemeProvider>
        );
    }
    if (props.choosen === "Flight") {
        return (
            <ThemeProvider theme={theme}>
                <Box sx={{ width: '95%', maxWidth: '700px' }}>
                    <Typography>Dein Transportmittel Flugzeug:  {props.co2} Kg</Typography>
                    <BorderLinearProgress variant="determinate" value={100*props.co2/maxNumber} />
                    <br></br>
                    <Typography>Mit einem Mittelklasse Auto: {props.co2Car} Kg</Typography>
                    <BorderLinearProgress variant="determinate" value={100*props.co2Car/maxNumber} />
                    <br></br>
                    <Typography>Mit dem Zug: {props.co2Train} Kg</Typography>
                    <BorderLinearProgress variant="determinate" value={100*props.co2Train/maxNumber} />
                </Box>
            </ThemeProvider>
        );
    }
    if (props.choosen === "Car") {
        return (
            <ThemeProvider theme={theme}>
                <Box sx={{ width: '95%', maxWidth: '700px' }}>
                    <Typography>Dein Transportmittel Auto:  {props.co2} Kg</Typography>
                    <BorderLinearProgress variant="determinate" value={props.co2/maxNumber} />
                    <br></br>
                    <Typography>Mit dem Zug: {props.co2Train} Kg</Typography>
                    <BorderLinearProgress variant="determinate" value={props.co2Train/maxNumber} />
                    <br></br>
                    <Typography>Mit dem Flugzeug: {props.co2Flight} Kg</Typography>
                    <BorderLinearProgress variant="determinate" value={props.co2Flight/maxNumber} />
                </Box>
            </ThemeProvider>
        );
    } else {
        return (<div></div>);
    }

}