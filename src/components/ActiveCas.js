import React , { useEffect , useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './Statistics.css';
import {Bar , Line} from 'react-chartjs-2';
import {Link} from 'react-router-dom';
import './DailyCas.css';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  }));
export default function ActiveCas() {

  
    const [click , setClick] =useState(false);
    const [dates , setDates] = React.useState(null);
    const [data , setData] = React.useState(null);
    const [active , setActive] = React.useState(null);

    const fetchData = async()=>{
      try{
        const reponse = await axios.get('http://localhost:8000/curves')
        setDates(reponse.data.date);
        setData(reponse.data.data);
        setActive(reponse.data.active);
      }catch(e){
        console.log(e);
      }
    }
    useEffect(()=>{
      fetchData();
    }, []);
    console.log(dates)
    console.log(data)
  return (
    <React.Fragment >
        <Grid container className="StaticCat">
            <Grid xs={12} >
                <Card>
                    <CardHeader
                    title= 'Active Case' 
                    titleTypographyProps={{ align: 'left' , variant : 'h6'}}
                    subheaderTypographyProps={{ align: 'left' }}
                    />
                    <CardContent  className="staticCard" >
                    <Line
                      data={{
                        labels: dates,
                        datasets: [
                          {
                            lineTension : .2,
                            label: 'Active Cas',
                            data: active,
                            backgroundColor: [
                              'rgba(255, 159, 64, 0.2)',
                            ],
                            borderColor: 'rgba(255, 159, 64, 1)',
                            borderWidth: 3,
                            fill :true,
                            lineTension : .2,
                            pointBorderWidth : 0,
                            pointWidth:0,
                          },
                        ],
                      }}
                      height={400}
                      width={600}
                      options={{
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                  drawBorder: false,
                                },
                              }],
                        },
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
    </React.Fragment>
  );
}
