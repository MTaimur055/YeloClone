import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Chart from './Charts';
import Deposits from './Deposits';
import Orders from './Orders';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  linke: {
    color:"white",
    paddingRight:"1rem"
 },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
 
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  
}));

const Homeextention=() => {
  const classes = useStyles();
 
  


  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
    
      
      <main className={classes.content}>
      <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Grid item xs={12} md={4} lg={3}></Grid>
        <Paper className={classes.paper1}>
        <p style={{fontSize:'17px',fontStyle:'italic',fontWeight:'bold'}} >Welcome to your marketplace
        <a href='https://www.youtube.com'> 
        <Button variant="contained" color="primary" disableElevation style={{float:'right', padding:'4px'}}>
        View your website
    </Button>
            </a></p>
            <p >To get your marketplace up and running, there are a few essential steps you need to take, as listed below. <br/>
       Once finished, your marketplace will be ready to receive its first visitor! </p>
     </Paper>
     <Grid/>
          <Grid container spacing={3}>
            {/* Chart */}
            
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            
          </Box>
        </Container>
      </main>
    </div>
  );
}


 
export default  Homeextention;