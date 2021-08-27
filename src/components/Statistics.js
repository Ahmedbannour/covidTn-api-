import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import './Statistics.css';
import DailyCas from './DailyCas';
import ActiveCas from './ActiveCas';
import RecovredCas from './RecovredCas';
import DethesCas from './DethesCas';
import VaccinCurve from './VaccinCurve';
import GeneralStatics from './GeneralStatics';
import AllStatics from './AllStatics';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100vw",
    height: "30rem",
    position: 'static',
    minHeight: 200,
    zIndex :0
  },
}));

export default function FloatingActionButtonZoom() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className={classes.root}>
      <AppBar position="relative" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Daily" {...a11yProps(0)} />
          <Tab label="Active" {...a11yProps(1)} />
          <Tab label="Recovred" {...a11yProps(2)} />
          <Tab label="Deaths" {...a11yProps(3)}  />
          <Tab label="Vaccin" {...a11yProps(4)} />
          <Tab label="General" {...a11yProps(5)} />
          <Tab label="All" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <DailyCas />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ActiveCas />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <RecovredCas />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <DethesCas />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <VaccinCurve />
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <GeneralStatics />
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          <AllStatics />
        </TabPanel>
      </SwipeableViews>

    </div>
  );
}