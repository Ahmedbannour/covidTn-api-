import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './GeneralInfo';
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
  }));

  
const GeneralInfoMounth = (/*props or */ {mounths }) => {
    /*
    const ville = props.ville;
    const nom = props.nom;
    console.log(props ,ville);
    */
    const p1_act = mounths.first.all_cas - mounths.first.all_ret - mounths.first.all_mort; 
    const p2_act = mounths.second.all_cas - mounths.second.all_ret - mounths.second.all_mort; 
    const p3_act = mounths.third.all_cas - mounths.third.all_ret - mounths.third.all_mort; 
    const p1_act_p = (( 1 -((mounths.first.all_cas / mounths.beforefirst.all_cas))  *100 ) /100).toFixed(2);
    const p2_act_p = (( 1- ((mounths.second.all_cas / mounths.beforesecond.all_cas))  *100 ) /100).toFixed(2);
    const p3_act_p = (( 1 -((mounths.third.all_cas / mounths.beforethird.all_cas))  *100 ) /100).toFixed(2);

    const p1_ret = mounths.first.all_ret; 
    const p2_ret = mounths.second.all_ret;
    const p3_ret = mounths.third.all_ret;
    const p1_ret_p = (( 1 -((mounths.first.all_ret / mounths.beforefirst.all_ret))  *100 ) /100).toFixed(2);
    const p2_ret_p = (( 1- ((mounths.second.all_ret / mounths.beforesecond.all_ret))  *100 ) /100).toFixed(2);
    const p3_ret_p = (( 1 -((mounths.third.all_ret / mounths.beforethird.all_ret))  *100 ) /100).toFixed(2);

    const p1_death = mounths.first.all_mort; 
    const p2_death = mounths.second.all_mort;
    const p3_death = mounths.third.all_mort;

    const classes = useStyles();
    return ( 
        <div className="blog-list" >
                    <>
                    <div  className={classes.root}>
                        <Grid  className="cardHeadBody" xs={3} sm={3} md={3} lg={12}>
                            Premier 10 jours
                        </Grid>
                        <Grid  className="cardBody"  xs={3} sm={3} md={3} lg={12}>
                        <Box className="box"  display="inline">
                            {p1_act >= 1000 ? p1_act/1000 +"k" : p1_act}
                        </Box>
                        <Box className="box"  display="inline">
                            {80>50 ? <i class="fas fa-caret-up"> </i> : <i class="fas fa-caret-down"></i>}
                            <Box className="pourcentage"  display="block">
                                {p1_act_p}
                            </Box>
                        </Box>
                        </Grid>
                        <Grid  className="cardBody"  xs={3} sm={3} md={3} lg={12}>
                        <Box className="box"  display="inline">
                            {p1_ret >= 1000 ? p1_ret/1000 +"k" : p1_ret}
                        </Box>
                        <Box className="box"  display="inline">
                            {40>50 ? <i class="fas fa-caret-up"> </i> : <i class="fas fa-caret-down"></i>}
                            <Box className="pourcentage"  display="block">
                                {p1_ret_p}%
                            </Box>
                        </Box>
                        </Grid>
                        <Grid  className="cardBody nb_act"  xs={3} sm={3} md={3} lg={12}>
                            {p1_death}
                        </Grid>  
                    </div>
                    </>
              <>
                    <div  className={classes.root}>
                                <Grid  className="cardHeadBody" xs={3} sm={3} md={3} lg={3}>
                                    Deuxieme 10 jours
                                </Grid>
                                <Grid  className="cardBody"  xs={3} sm={3} md={3} lg={3}>
                                <Box className="box"  display="inline">
                                  {p2_act >= 1000 ? p2_act/1000 +"k" : p2_act}
                                </Box>
                                <Box className="box"  display="inline">
                                    {80>50 ? <i class="fas fa-caret-up"> </i> : <i class="fas fa-caret-down"></i>}
                                    <Box className="pourcentage"  display="block">
                                      {p2_act_p}
                                    </Box>
                                </Box>
                                </Grid>
                                <Grid  className="cardBody"  xs={3} sm={3} md={3} lg={3}>
                                  <Box className="box"  display="inline">
                                    {p2_ret >= 1000 ? p2_ret/1000 +"k" : p2_ret}
                                  </Box>
                                  <Box className="box"  display="inline">
                                      {40>50 ? <i class="fas fa-caret-up"> </i> : <i class="fas fa-caret-down"></i>}
                                      <Box className="pourcentage"  display="block">
                                        {p2_ret_p}%
                                      </Box>
                                  </Box>
                                </Grid>
                                <Grid  className="cardBody nb_act"  xs={3} sm={3} md={3} lg={3}>
                                      {p2_death}
                                </Grid>  
                            </div>
                            </>
                                  <>
                            <div  className={classes.root}>
                                <Grid  className="cardHeadBody" xs={3} sm={3} md={3} lg={3}>
                                    Troixieme 10 jours
                                </Grid>
                                <Grid  className="cardBody"  xs={3} sm={3} md={3} lg={3}>
                                <Box className="box"  display="inline">
                                {p3_act >= 1000 ? p3_act/1000 +"k" : p3_act}
                                </Box>
                                <Box className="box"  display="inline">
                                    {10>50 ? <i class="fas fa-caret-up"> </i> : <i class="fas fa-caret-down"></i>}
                                    <Box className="pourcentage"  display="block">
                                      {p3_act_p}
                                    </Box>
                                </Box>
                                </Grid>
                                <Grid  className="cardBody"  xs={3} sm={3} md={3} lg={3}>
                                  <Box className="box"  display="inline" >
                                    {p3_ret >= 1000 ? p3_ret/1000 +"k" : p3_ret}
                                  </Box>
                                  <Box className="box"  display="inline">
                                      {60>50 ? <i class="fas fa-caret-up"> </i> : <i class="fas fa-caret-down"></i>}
                                      <Box className="pourcentage"  display="block">
                                        {p3_ret_p}%
                                      </Box>
                                  </Box>
                                </Grid>
                                <Grid  className="cardBody nb_act"  xs={3} sm={3} md={3} lg={3}>
                                        {p3_death}
                                </Grid>  
                            </div>
                            </>
          </div>
     );
}
 
export default GeneralInfoMounth;