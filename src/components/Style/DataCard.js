import React from 'react';
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';




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


export default function DataCard(props) {
    const classes = cardStyles();
    return (
        <Card className={classes.root} varian="outlined">
            <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    {props.Value}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {props.Type}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                    {props.Explanation}
                </Typography>
            </CardContent>
        </Card>
    );
}
