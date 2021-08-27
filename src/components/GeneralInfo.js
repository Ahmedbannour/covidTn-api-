import React , { useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import {Autocomplete} from '@material-ui/lab';
import './GeneralInfo.css';
import Box from '@material-ui/core/Box';
import useFetch from "../useFetch";
import GeneralInfoMounth from './GeneralInfoMounth';
import axios from 'axios';

  

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



export default function GeneralInfo() {
    const classes = useStyles();
    const today = new Date();
    const month = today.getMonth();
    const [value, setValue] = React.useState(options[month]);
    const [inputValue, setInputValue] = React.useState(options[month]);
    const [months , setMonthes] = React.useState(null);

    console.log(month+1);
    console.log(months);
    const fetchData = async()=>{
      try{
        const reponse = await axios.get('http://localhost:8000/covid/dataMounth',{params : {month:options.indexOf(value)+1}})
        console.log(reponse);
        setMonthes(reponse.data);
      }catch(e){
        console.log(e);
      }
    }
    useEffect(()=>{
      fetchData();
    }, [value]);

  return (
    <React.Fragment >
        <Grid container spacing={1} alignItems="flex-end" >
            <Grid xs={12} lg={12} >
              <Card>
                <CardHeader
                  title= 'General Information ' 
                  subheader= 'Monthly cases'
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
                                Days
                            </Grid>
                            <Grid  className="cardHead headC"  xs={3} sm={3} md={3} lg={3}>
                                Active cases 
                            </Grid>
                            <Grid  className="cardHead headC"  xs={3} sm={3} md={3} lg={3}>
                                Recovered cases
                            </Grid>
                            <Grid  className="cardHead headC"  xs={3} sm={3} md={3} lg={3}>
                                Deaths cases
                            </Grid>  
                            </div>
                            <br/>
                            
                            <Box className={classes.cardCont}  component="div" my={2} overflow="auto">
                              {months ? <GeneralInfoMounth mounths = {months} /> : 'Loading ...'}
                            </Box >
                            
                      </CardContent>
                  </Card>
                </CardContent>

              </Card>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}