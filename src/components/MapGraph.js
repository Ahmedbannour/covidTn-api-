import React , { useEffect , useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './GeneralInfo.css';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkDate from "./../data/skateboard-parks.json";
import clsx from 'clsx';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import useFetch from "../useFetch";
import VilleMaps from "./VilleMaps";
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
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },circleBtn: {
    backgroundColor : '#b30000',
    opacity : .7,

  }
}));





export default function MapGraph() {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();
    const [statics , setStatics] = React.useState(null);

    const fetchData = async()=>{
      try{
        const reponse = await axios.get('http://localhost:8000/covid')
        console.log(reponse);
        setStatics(reponse.data);

      }catch(e){
        console.log(e);
      }
    }
    useEffect(()=>{
      fetchData();
    }, []);
  
    const defaultProps = {
      bgcolor: 'rgba( 255 ,0 ,0 ,.7)',
      style: { width: '2rem', height: '2rem' },
    };
    const fortProps = {
      bgcolor: 'rgba( 255 ,0 ,0 ,.7)',
      style: { width: '5rem', height: '5rem' },
    };
    const [viewport, setViewport] = useState({
        latitude: 33.8439408,
        longitude: 9.400138,
        width: "100vw",
        height: "90vh",
        zoom: 5.5,
        maxZoom: 8,
        minZoom:5.5
      });

  return (
    <React.Fragment >
        <Grid container spacing={1} alignItems="flex-end" >
            <Grid xs={12} >
                <Card>
                    <CardHeader
                    title= 'Map' 
                    subheader= 'Sur toute la Tunisie'
                    titleTypographyProps={{ align: 'left' , variant : 'h6'}}
                    subheaderTypographyProps={{ align: 'left' }}
                    />
                    <CardContent >
                    <Card>
                        <CardContent>
                            <div  className={classes.root}>
                                <Grid xs={12} >
                                <ReactMapGL
                                  {...viewport}
                                  mapboxApiAccessToken='pk.eyJ1IjoiYWhtZWRiYTc3IiwiYSI6ImNrc2owOHcwNDI5YXcyb28zZ25neWJodHMifQ.jdTxktMiPf_1IUCH2j0Phg'
                                  mapStyle="mapbox://styles/mapbox/dark-v10"
                                  onViewportChange={viewport => {
                                    setViewport(viewport);
                                  }}
                                >
                                  
                                  {statics ? <VilleMaps statics = {statics} /> : 'Loading ...'}
                                </ReactMapGL>
                                </Grid>
                            </div>
                      </CardContent>
                  </Card>
                </CardContent>

              </Card>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}
