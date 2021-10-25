import React from 'react';
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';




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


export default function DataCard(props) {
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
