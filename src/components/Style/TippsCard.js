import React from 'react';
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@material-ui/core/Grid';

import { Icons } from '../Data/icons';


const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        width: '90%',
        paddingBottom: "2%",
        paddingTop: "2%",
        flexGrow: 1,
        textAlign: 'left',
        maxWidth: "700px",
        borderRadius: "16px"
    },
    header: {
        display: 'flex',
        width: 'auto',
        maxWidth: "80%",
        flexGrow: 1,
        textAlign: 'left',
    },
    details: {
        display: 'flex',
        width: "90%",
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        margin: "0",
        textAlign: "left",
        paddingTop: "4%",
        paddingBottom: "4%",
    },
    cover: {
        width: "30%",
        textAlign: "center"
    },
    accordion: {
        disableGutters: "true",
        paddingLeft: "5%",
        paddingRight: "5%"
    },
    accordiongrid: {
        paddingLeft: "5%",
        paddingRight: "5%"
    },

}));


export default function TippsCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Grid container maxwidth="false" align="center" justifyContent="center" alignItems="center" >
                <Grid item className={classes.header} xs={12} sm={12} md={12} lg={12}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography variant="h5" gutterBottom component="div">
                                {props.Headline}
                            </Typography>
                            <Typography variant="body1" gutterBottom component="div">
                                Anwort: {props.Answer}
                            </Typography>
                        </CardContent>
                    </div>
                    <CardMedia>
                        <div className={classes.cover}>
                            <svg fill="#66bb6a" xmlns="http://www.w3.org/2000/svg" viewBox={Icons[props.id][1]} width="50px" height="50px"><path d={Icons[props.id][2]} /></svg>
                        </div>
                    </CardMedia>
                </Grid>
                <Grid item className={classes.accordiongrid} xs={12} sm={12} md={12} lg={12}>
                            <Typography>
                                {props.tipp}
                            </Typography>
                </Grid>
            </Grid>
        </Card>
    );
}



/*
export default function TippsCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Grid container maxwidth="false" align="center" justifyContent="center" alignItems="center" >
                <Grid item className={classes.header} xs={12} sm={12} md={12} lg={12}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography variant="h5" gutterBottom component="div">
                                {props.Headline}
                            </Typography>
                            <Typography variant="body1" gutterBottom component="div">
                                Anwort: {props.Answer}
                            </Typography>
                        </CardContent>
                    </div>
                    <CardMedia>
                        <div className={classes.cover}>
                            <svg fill="#66bb6a" xmlns="http://www.w3.org/2000/svg" viewBox={Icons[props.id][1]} width="50px" height="50px"><path d={Icons[props.id][2]} /></svg>
                        </div>
                    </CardMedia>
                </Grid>
                <Grid item className={classes.accordiongrid} xs={12} sm={12} md={12} lg={12}>
                    <Accordion className={classes.accordion} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            id={"panel1a-header" + props.id}
                        >
                            <Typography variant="subtitle2" color="textSecondary">
                                Tipp
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {props.tipp}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Card>
    );
}
*/