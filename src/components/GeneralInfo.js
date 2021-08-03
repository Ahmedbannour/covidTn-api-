import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import {Autocomplete} from '@material-ui/lab';
import './GeneralInfo.css';
import Box from '@material-ui/core/Box';


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
  cardHead :{
      color: "#f00"
  }
}));

const options = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];


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


export default function GeneralInfo() {
    const classes = useStyles();
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');

  return (
    <React.Fragment >
        <Grid container spacing={1} alignItems="flex-end" >
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} >
              <Card>
                <CardHeader
                  title= 'Info General ' 
                  subheader= 'Sur toute la Tunisie'
                  action={
                    <IconButton>
                         <div>
                            <Autocomplete
                                value={value}
                                onChange={(event, newValue) => {
                                setValue(newValue);
                                }}
                                inputValue={inputValue}
                                onInputChange={(event, newInputValue) => {
                                setInputValue(newInputValue);
                                }}
                                id="controllable-states-demo"
                                options={options}
                                style={{ width: 140 , borderColor : '#fff' }}
                                renderInput={(params) => <TextField {...params}  variant="outlined" />}
                            />
                            </div>
                    </IconButton>
                  }
                  titleTypographyProps={{ align: 'left' , variant : 'h6'}}
                  subheaderTypographyProps={{ align: 'left' }}
                />
                <CardContent >
                  <Card>
                      
                      <CardContent>
                          <div  className={classes.root}>
                          <Grid  className="cardHead" xs={3} sm={3} md={3} lg={3}>
                                Jours
                            </Grid>
                            <Grid  className="cardHead headC"  xs={3} sm={3} md={3} lg={3}>
                                nouveau cas
                            </Grid>
                            <Grid  className="cardHead headC"  xs={3} sm={3} md={3} lg={3}>
                                nouveau ret
                            </Grid>
                            <Grid  className="cardHead headC"  xs={3} sm={3} md={3} lg={3}>
                                nombre de cas active
                            </Grid>  
                            </div>
                            <br/>
                            <div  className={classes.root}>
                                <Grid  className="cardHeadBody" xs={3} sm={3} md={3} lg={12}>
                                    Premier 10 jours
                                </Grid>
                                <Grid  className="cardBody"  xs={3} sm={3} md={3} lg={12}>
                                <Box className="box"  display="inline">
                                    80
                                </Box>
                                <Box className="box"  display="inline">
                                    {80>50 ? <i class="fas fa-caret-up"> </i> : <i class="fas fa-caret-down"></i>}
                                    <Box className="pourcentage"  display="block">
                                        7%
                                      </Box>
                                </Box>
                                </Grid>
                                <Grid  className="cardBody"  xs={3} sm={3} md={3} lg={12}>
                                  <Box className="box"  display="inline">
                                      40
                                  </Box>
                                  <Box className="box"  display="inline">
                                      {40>50 ? <i class="fas fa-caret-up"> </i> : <i class="fas fa-caret-down"></i>}
                                      <Box className="pourcentage"  display="block">
                                        -12%
                                      </Box>
                                  </Box>
                                </Grid>
                                <Grid  className="cardBody nb_act"  xs={3} sm={3} md={3} lg={12}>
                                      150
                                </Grid>  
                            </div>
                            <div  className={classes.root}>
                                <Grid  className="cardHeadBody" xs={3} sm={3} md={3} lg={3}>
                                    Deuxieme 10 jours
                                </Grid>
                                <Grid  className="cardBody"  xs={3} sm={3} md={3} lg={3}>
                                <Box className="box"  display="inline">
                                    50
                                </Box>
                                <Box className="box"  display="inline">
                                    {80>50 ? <i class="fas fa-caret-up"> </i> : <i class="fas fa-caret-down"></i>}
                                    <Box className="pourcentage"  display="block">
                                        0%
                                      </Box>
                                </Box>
                                </Grid>
                                <Grid  className="cardBody"  xs={3} sm={3} md={3} lg={3}>
                                  <Box className="box"  display="inline">
                                      12
                                  </Box>
                                  <Box className="box"  display="inline">
                                      {40>50 ? <i class="fas fa-caret-up"> </i> : <i class="fas fa-caret-down"></i>}
                                      <Box className="pourcentage"  display="block">
                                        -24%
                                      </Box>
                                  </Box>
                                </Grid>
                                <Grid  className="cardBody nb_act"  xs={3} sm={3} md={3} lg={3}>
                                      75
                                </Grid>  
                            </div>
                            <div  className={classes.root}>
                                <Grid  className="cardHeadBody" xs={3} sm={3} md={3} lg={3}>
                                    Troixieme 10 jours
                                </Grid>
                                <Grid  className="cardBody"  xs={3} sm={3} md={3} lg={3}>
                                <Box className="box"  display="inline">
                                    0
                                </Box>
                                <Box className="box"  display="inline">
                                    {10>50 ? <i class="fas fa-caret-up"> </i> : <i class="fas fa-caret-down"></i>}
                                    <Box className="pourcentage"  display="block">
                                        45%
                                      </Box>
                                </Box>
                                </Grid>
                                <Grid  className="cardBody"  xs={3} sm={3} md={3} lg={3}>
                                  <Box className="box"  display="inline" >
                                      140
                                  </Box>
                                  <Box className="box"  display="inline">
                                      {60>50 ? <i class="fas fa-caret-up"> </i> : <i class="fas fa-caret-down"></i>}
                                      <Box className="pourcentage"  display="block">
                                        10%
                                      </Box>
                                  </Box>
                                </Grid>
                                <Grid  className="cardBody nb_act"  xs={3} sm={3} md={3} lg={3}>
                                      0
                                </Grid>  
                            </div>
                      </CardContent>
                  </Card>
                </CardContent>

              </Card>
            </Grid>
          ))}
        </Grid>
    </React.Fragment>
  );
}