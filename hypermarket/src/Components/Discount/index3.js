import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';

import Results from './Results1';
import Results2 from './Results2';
import Toolbar from './Toolbar1';
import Toolbar2 from './Toolbar2';
import data from './data1';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView1 = () => {
  const classes = useStyles();
  const [customers] = useState(data);

  return (
   
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results customers={customers} />
         
          
        </Box>
        <br/>
          <br/>
          <br/>
        <Toolbar2 />
        <Box mt={3}>
          
          <Results2 customers={customers} />
        </Box>
      </Container>
  
  );
};

export default CustomerListView1;
