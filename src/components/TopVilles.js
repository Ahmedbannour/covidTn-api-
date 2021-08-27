import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AssessmentIcon from '@material-ui/icons/Assessment';
import './TopVilles.css';
import VilleList from './VilleList';
import useFetch from "../useFetch";



const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },cardCont:{
    overflowY : 'visible',
    height :  350
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    color : '#595959'
  },
}));






export default function TopVilles() {
    const classes = useStyles();
    const {data :villes , isPending , error} = useFetch('http://localhost:8000/covid');

  return (
    <React.Fragment >
        <Grid container spacing={1} alignItems="flex-end" >
            <Grid  xs={12} >
              <Card>
                <CardHeader
                  avatar={<AssessmentIcon className={classes.large}  />}
                  title= 'Top Cities ' 
                  subheader= 'With most cases number'
                  titleTypographyProps={{ align: 'left' , variant : 'h6'}}
                  subheaderTypographyProps={{ align: 'left' }}
                />
                <CardContent >
                {/* {villes.map((ville) => (
                  <div className={classes.root}>
                    <Grid item key={ville.nom} xs={4} sm={4} md={4} lg={8}>
                    {ville.nom}
                  </Grid>
                  <Grid  item key={ville.nom} xs={4} sm={4} md={4} lg={2}>
                    {ville.pourcentage}%
                  </Grid>
                  <Grid  item key={ville.nom} xs={4} sm={4} md={4} lg={2}>
                  <Avatar  style={{ background : ville.color , bottom : '10px'}} >
                  
                  </Avatar>
                  </Grid>
                  </div>
                ))} */}
                <Box className={classes.cardCont}  component="div" my={2} overflow="auto">
                    { isPending && <div> Loading ...</div>}
                    { error && <div>{error} </div>}
                    { villes &&<VilleList villes = {villes} />}
                  </Box >
                </CardContent>
               
              </Card>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}