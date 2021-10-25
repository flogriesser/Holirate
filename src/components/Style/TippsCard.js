import React from 'react';
import Card from "@material-ui/core/Card";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@material-ui/core/Grid';

const TippsStyles = makeStyles({
    root: {
        maxWidth: "80%",
        paddingBottom: "5%",
        paddingTop: "5%",
        flexGrow: 1,
        textAlign: 'left',
        color: "primary",
    },
});
/*
export default function TippsCard(props) {
    const classes = TippsStyles();
    return (
        <Card className={classes.root} sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent >
                    <Typography component="h5" variant="h5">
                        {props.Value}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.Type}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

        </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="/static/pictures/hotel.png"
                alt="Live from space album cover"
            />
        </Card>
    );
}
*/


const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        width: '95%',
        paddingBottom: "5%",
        paddingTop: "5%",
        flexGrow: 1,
        textAlign: 'left',
        color: "primary",
    },
    header: {
        display: 'flex',
        width: 'auto',
        maxWidth: "80%",
        flexGrow: 1,
        textAlign: 'left',
        color: "primary",
    },
    details: {
        display: 'flex',
        width: "80%",
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        textAlign: "left"
    },
    cover: {
        width: "30%",
        textAlign: "center"
    },
    accordion: {
        disableGutters: "true",
        paddingLeft:"5%",
        paddingRight:"5%"
    },
    accordiongrid: {
        paddingLeft:"5%",
        paddingRight:"5%"
    },

}));

export default function TippsCard(props) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.card}>
            <Grid container maxwidth="false" align="center" justifyContent="center" alignItems="center" >
                <Grid item className={classes.header} xs={12} sm={12} md={12} lg={12}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {props.Value}
                            </Typography>
                        </CardContent>
                    </div>
                    <CardMedia>
                        <div className={classes.cover}>
                            <img src="/static/pictures/hotel.png" height="50" width="50" />
                        </div>
                    </CardMedia>
                </Grid>
                <Grid item className={classes.accordiongrid} xs={12} sm={12} md={12} lg={12}>
                    <Accordion className={classes.accordion} >
                        <AccordionSummary
                            gutters={false}
                            contentGutters={true}
                            expandIcon={<ExpandMoreIcon />}
                            id="panel1a-header"
                        >
                            <Typography variant="subtitle2" color="textSecondary">
                                Tipp
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {props.Type}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Card>
    );
}
