import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TopVilles from './components/TopVilles';
import {BrowserRouter as Router} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import GeneralInfo from './components/GeneralInfo';
import Grid from '@material-ui/core/Grid';


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


function App() {
  const classes = useStyles();

  return (
    <Router>
      <Navbar />
        <Container maxWidth="lg" style={{ marginTop : "20px"}}>

        <div className={classes.root}>
          <Grid  lg={3}>
            <TopVilles/>
          </Grid>
          <Grid lg={9}>
            <GeneralInfo/>
          </Grid>
          </div>
        </Container>
    </Router>
  );
}

export default App;
