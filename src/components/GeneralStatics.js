import React , { useEffect , useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './Statistics.css';
import {Pie , Line} from 'react-chartjs-2';
import {Link} from 'react-router-dom';
import './DailyCas.css';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  }));
export default function GeneralStatics() {

  
    const [click , setClick] =useState(false);
    const [dates , setDates] = React.useState(null);
    const [data , setData] = React.useState(null);
    const [active , setActive] = React.useState(null);
    const [general , setGeneral] = React.useState({});
    const [allVac , setAllVac] = React.useState({});

    const fetchData = async()=>{
      try{
        const reponse = await axios.get('http://localhost:8000/curves')
        console.log(reponse.data.general.all_mort)
        console.log(reponse.data.general.res)
        console.log(reponse.data.general.all_ret)
        setGeneral(reponse.data.general);
        setAllVac(reponse.data.allVac);
      }catch(e){
        console.log(e);
      }
    }
    useEffect(()=>{
      fetchData();
    }, []);
    console.log('hhhh')
  return (
    <React.Fragment >
        <Grid container className="StaticCat">
            <Grid xs={12} >

                <Grid container spacing={3}>
                  <Grid lg={6}>
                    <Card >
                    <CardHeader
                      title= 'Covid Info' 
                      titleTypographyProps={{ align: 'left' , variant : 'h6'}}
                      subheaderTypographyProps={{ align: 'left' }}
                      />
                      <CardContent className = "covidInfiPart">
                      <Pie
                        data={{
                          labels: ["Active" , "Recovred","Deaths"],
                          datasets: [
                            {
                              lineTension : .2,
                              data: [general.res , general.all_ret, general.all_mort ],
                              backgroundColor: [
                                'rgba(153, 153, 255, 0.4)',
                                'rgba(0, 204, 0, 0.4)',
                                'rgba(255, 0, 0, 0.4)',
                              ],
                              borderColor: [
                                'rgba(153, 153, 255, 0.4)',
                                'rgba(0, 204, 0, 0.4)',
                                'rgba(255, 0, 0, 0.4)',
                              ],

                            },
                          ],
                        }}
                        height={400}
                        width={600}
                        options={{
                          maintainAspectRatio: false,
                          legend: {
                            labels: {
                              fontSize: 10,
                            },
                          },
                        }}
                      />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid lg={6}>
                      <Card >
                        <CardHeader
                          title= 'Vaccin Info' 
                          titleTypographyProps={{ align: 'left' , variant : 'h6'}}
                          subheaderTypographyProps={{ align: 'left' }}
                          />
                          <CardContent className = "covidInfiPart">
                          <Pie
                            data={{
                              labels: [ "Not yet" , "Vaccined"],
                              datasets: [
                                {
                                  lineTension : .2,
                                  data: [  general.nb_pop - allVac.all_vac  ,allVac.all_vac ],
                                  backgroundColor: [
                                    'rgba(153, 153, 255, 0.4)',
                                    'rgba(0, 204, 0, 0.4)',
                                  ],
                                  borderColor: [
                                    'rgba(153, 153, 255, 0.2)',
                                    'rgba(0, 204, 0, 0.2)',],
                                },
                              ],
                            }}
                            height={400}
                            width={600}
                            options={{
                              maintainAspectRatio: false,
                              legend: {
                                labels: {
                                  fontSize: 10,
                                },
                              },
                            }}
                          />
                          </CardContent>
                        </Card>
                  </Grid>
                </Grid>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}
