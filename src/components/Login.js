import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './ContactUs2.css';
import { Card, CardContent} from '@material-ui/core';
import './Login.css';
import comingSoon from './../assets/images/coming_soon.svg'; 




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 450
  },
}));

  

export default function ContactUs2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={3} >
            <Grid item xs={12} >
                <Card className={classes.paper} >
                    <CardContent>
                        <img src={comingSoon}  width={300} height={300} />
                    </CardContent>
                    <Grid className="comingSoonFooter">
                        Coming <span>Soon</span>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    </div>
  );
}
