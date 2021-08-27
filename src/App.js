import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ContactUs2 from './components/ContactUs2';
import TopVilles from './components/TopVilles';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GeneralInfo from './components/GeneralInfo';
import Grid from '@material-ui/core/Grid';
import MapGraph from './components/MapGraph';
import Statistics from './components/Statistics';
import DailyCas from './components/DailyCas';
import Login from './components/Login';


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
            <Switch>
              <Route exact path='/'>
                <Grid container spacing={3}>
                  <Grid  lg={3} xs={12}>
                    <TopVilles/>
                  </Grid>
                  <Grid lg={9} xs={12}>
                    <GeneralInfo/>
                  </Grid>
                </Grid>
              </Route>
              <Route exact path='/contact-us'>
                <ContactUs2 lg={12} sm={12}/>
              </Route>
              <Route exact path='/Map'>
                <MapGraph lg={12} sm={12}/>
              </Route>
              <Route exact path='/Statistic'>
                <Statistics lg={12} sm={12}/>
              </Route>
              <Route exact path='/test'>
                <DailyCas lg={12} sm={12}/>
              </Route>
              <Route exact path='/sign-up'>
                <Login lg={12} sm={12}/>
              </Route>
            </Switch>
          </div>
        </Container>
    </Router>
  );
}

export default App;
