import React from 'react';
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Style/Theme';



const cardStyles = makeStyles({
    root: {
        display: 'flex',
        width: '90%',
        paddingBottom: "2%",
        paddingTop: "2%",
        marginLeft: "5%",
        marginRight: "5%",
        flexGrow: 1,
        textAlign: 'center',
        maxWidth: "400px",
        borderRadius: "16px"
    },
    content: {
        display: 'center',
        paddingTop: "4%",
        paddingBottom: "4%",
    },
    paper: {
        textAlign: 'center',
        color: "primary",
    },
});


export default function DataCard(props) {
    const classes = cardStyles();
    return (
        <ThemeProvider theme={theme}>
            <Card className={classes.root} variant="outlined">
                <Grid container maxwidth="false" align="center" justifyContent="center" alignItems="center">
                    <CardContent className={classes.content}>
                        <Grid container alignItems="center" justifyContent="center" spacing={2} >
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Typography component="h5" variant="h5">
                                    {props.Value}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {props.Type}
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
