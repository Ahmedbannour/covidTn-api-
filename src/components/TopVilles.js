import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Avatar from '@material-ui/core/Avatar';
import './TopVilles.css';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
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



const tiers = [
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  }
];

const villes = [
  {
    nom : 'Ariana',
    pourcentage : '20',
    color : 'red'
  },
  {
    nom : 'Manouba',
    pourcentage : '18',
    color : '#ff3333'
  },
  {
    nom : 'Monastir',
    pourcentage : '15',
    color : '#ff6666'
  },
  {
    nom : 'Sousse',
    pourcentage : '12',
    color : '#ff9999'
  },
  {
    nom : 'Mahdia',
    pourcentage : '9',
    color : '#ffe6e6'
  },
]


export default function TopVilles() {
    const classes = useStyles();
    
  return (
    <React.Fragment >

        <Grid container spacing={1} alignItems="flex-end" >
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} >
              <Card>
                <CardHeader
                  avatar={<AssessmentIcon className={classes.large}  />}
                  title= 'Top Villes ' 
                  subheader= 'Selon nombre de cas'
                  titleTypographyProps={{ align: 'left' , variant : 'h6'}}
                  subheaderTypographyProps={{ align: 'left' }}
                />
                <CardContent >
                {villes.map((ville) => (
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
                ))}
                </CardContent>
               
              </Card>
            </Grid>
          ))}
        </Grid>
    </React.Fragment>
  );
}