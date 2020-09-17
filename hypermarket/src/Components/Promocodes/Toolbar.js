import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <h1>Promotions</h1>
      <hr style={{height:"5px",background:"grey"}}/>
      <h2 style={{float:"left"}}>Promo Codes</h2>
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        
      
        <p style={{float:"left"}}>Promo codes are exclusive discount vouchers that can be redeemed by the  customers <br/> during the checkout process. 
          You can create customized promotional codes with a detailed description <br/> that will be visible 
            to your customers on the web and mobile apps.
            </p>
        
       
        <Button
          color="primary"
          variant="contained"
          style={{height:"50px",width:"180px",marginLeft:"40px"}}
        >
          Add Promotion
        </Button>
      </Box>
      <Box mt={3}>
        
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
