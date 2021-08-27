import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
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

  
const VilleList = (/*props or */ {villes }) => {
    /*
    const ville = props.ville;
    const nom = props.nom;
    console.log(props ,ville);
    */
    const classes = useStyles();
    return ( 
        <div className="blog-list" >
            {villes.map((ville) => (
                  <div className={classes.root}>
                    <Grid classname="nom_ville"   xs={4} sm={4} md={4} lg={8}>
                    {ville.nom.includes('Gouvernorat') ? ville.nom.includes('de')?ville.nom.includes('l\'')?ville.nom.replace('Gouvernorat de l\'','') :  ville.nom.replace('Gouvernorat de',''):ville.nom.replace('Gouvernorat du','')  : ville.nom}
                  </Grid>
                  <Grid  classname="nb_active"  xs={4} sm={4} md={4} lg={2}>
                    {ville.res >= 1000 ? ville.res/1000 +"k" : ville.res}
                  </Grid>
                  </div>
                ))}
        </div>
     );
}
 
export default VilleList;