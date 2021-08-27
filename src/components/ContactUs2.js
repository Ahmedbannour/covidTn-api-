import React , { useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './ContactUs2.css';
import axios from 'axios';
import { FormControl } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function Alert(props) {
    return <MuiAlert  elevation={7}  variant="filled" {...props} />;
  }
  

export default function ContactUs2() {
  const classes = useStyles();
  const url ="";
  const [data,setData] = useState({
      first_name : "" , 
      last_name : "" ,
      email : "" ,
      message :""
  })
  const [reponse , setReponse] = React.useState(null);
  const [message , setMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openS, setOpenS] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setOpenS(false);
  };
  
function handle(e){
    const newData={...data}
    newData[e.target.id] = e.target.value
    setData(newData)
}
    const submit =async(e)=>{
        try{
         
          if(data.first_name == "" && data.last_name =="" && data.email == "" && data.message == ""){
            setOpen(true);
            setMessage("Fill in all the inputs ! you hava an error");
            
          }else if(data.email == "" || (!data.email.includes('@') && !data.email.includes('.com') )){
            setOpen(true)
            setMessage("invalid email , retap it");
          }else{
            const reponse = await axios.get("http://localhost:8000/contact-us",{params : data });
            console.log(reponse);
            document.getElementById("first_name").value =""
            document.getElementById("last_name").value =""
            document.getElementById("email").value =""
            document.getElementById("message").value = ""
            setOpenS(true);
          }
        }catch(e){
          console.log(e);
          setOpen(true)
          setMessage("invalid email , retap it");
        }
    }

  
  return (
    <div className={classes.root}>
        <Grid item xs={12}  container spacing={2}>
            <Grid lg={12}>
                <Snackbar open={open} onClose={handleClose}  autoHideDuration={3000}>
                    <Alert onClose={handleClose} severity="error" >
                        {message}
                    </Alert>
                </Snackbar>
            </Grid>
            <Grid lg={12}>
                <Snackbar open={openS} onClose={handleClose}  autoHideDuration={3000}>
                    <Alert onClose={handleClose} severity="success" >
                        <nobr>All right     <span> <i class="fas fa-smile-wink"></i> </span>     we received your message </nobr>
                    </Alert>
                </Snackbar>
            </Grid>
        </Grid>
        <Grid item xs={12}  container className="contactDiv">
            <Grid item container sm={12} lg={4} className="ContactUsForm">
            <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} className="contactInformaionTitre">
                        Contact Information
                    </Grid>
                    <Grid item xs={12} sm={12} container spacing={3}>
                        <Grid item lg={1} className="iconsInformation">
                        <i class="fas fa-phone-alt"></i>
                        </Grid>
                        <Grid item lg={11} className="information" >
                            +216 54 414 701
                        </Grid>
                    
                        <Grid item lg={1} className="iconsInformation" >
                        <i class="fas fa-map-marker-alt"></i>
                            </Grid>
                            <Grid item lg={11} className="information">
                                5099 , Monastir , Tunisia
                            </Grid>
                        
                        <Grid item lg={1} className="iconsInformation">
                            <i class="fas fa-envelope"></i>
                        </Grid>
                        <Grid item lg={11} className="information">
                                bannour.ahmed@esprit.tn
                            </Grid>
                        </Grid>
                    <Grid item xs={12} sm={12} lg={8} className="socialBloc" container spacing={3}>
                        <Grid item xs={12} lg={3} className="iconsInformation">
                            <i class="fab fa-facebook"></i>
                        </Grid>
                        <Grid item xs={12} lg={3} className="iconsInformation">
                            <i class="fab fa-instagram"></i>
                        </Grid>
                        <Grid item xs={12} lg={3} className="iconsInformation">
                            <i class="fab fa-twitter"></i>
                        </Grid>
                        <Grid item xs={12} lg={3} className="iconsInformation">
                            <i class="fab fa-linkedin"></i>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={8} className="ContactUsbg">
                <div className="gridBgTitle" xs={12} lg={12}>
                    Send us a message
                </div>
                <div className={classes.root}  className="formContent" lg={12}>
                
                <FormControl className={classes.root}  noValidate autoComplete="off" >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        id="first_name"
                        label="First name "
                        type="text"
                        autoComplete="current-name"
                        onChange={(e)=>handle(e)} 
                        fullWidth
                        required
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        id="last_name"
                        label="Last name "
                        type="text"
                        autoComplete="current-name"
                        onChange={(e)=>handle(e)} 
                        fullWidth
                        required
                    />
                    </Grid>
                    <Grid item xs={6} sm={12}>
                    <TextField
                        id="email"
                        label="Email "
                        type="email"
                        autoComplete="current-name"
                        onChange={(e)=>handle(e)} 
                        fullWidth
                        required
                    />
                    </Grid>
                    <Grid item xs={6} sm={12}>
                    <TextField
                        id="message"
                        label="Message "
                        type="text"
                        autoComplete="current-message"
                        multiline
                        rows={4}
                        className="txtfield_message"
                        onChange={(e)=>handle(e)} 
                        fullWidth
                        required
                    />
                    </Grid>
                    <Grid item xs={12} sm={12} className="btnContactForm">
                        <Button type="submit" onClick={(e)=>submit(e)} variant="contained" className="btn">
                            Send
                        </Button>
                    </Grid>
                </Grid>
                </FormControl>
                </div>
            </Grid>
        </Grid>
        
    </div>
  );
}
