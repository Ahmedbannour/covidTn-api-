import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './TopVilles.css';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import  { Marker } from "react-map-gl";

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
  }));
  
const VilleMap = (/*props or */ {statics }) => {
    const classes = useStyles();

    const defaultProps = {
        bgcolor: 'rgba( 255 ,0 ,0 ,.7)',
      };
      const fortProps = {
        bgcolor: 'rgba( 255 ,0 ,0 ,.7)',
        style: { width: '5rem', height: '5rem' },
      };

    return ( 
        <>
            {statics.map((ville) => (
                    <Marker
                      key={ville.id}
                      latitude={parseFloat(ville.Latitude)}
                      longitude={parseFloat(ville.longitude)}
                    >
                      <div className={classes.wrapper}>
                      <Tooltip title={ville.nom +" : " + ville.res}>
                        <Box borderRadius="50%" {...defaultProps} style={{width: ville.res/10 , height: ville.res/10 }}/>
                      </Tooltip>
                      </div>
                    </Marker>
            ))}
        </>
     );
}
 
export default VilleMap;