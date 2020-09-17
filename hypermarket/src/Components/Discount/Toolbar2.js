import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import MenuItem from "@material-ui/core/MenuItem";
import {
  InputLabel,
  Select,
  FormControl,
  InputBase,
  fade,
} from "@material-ui/core";
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

const Toolbar2 = ({ className, ...rest }) => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <h3>Product Wise Discount</h3>
     
     
      
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        
      
     
        
       
        <Button
          color="primary"
          variant="contained"
          style={{height:"50px",width:"180px",marginLeft:"40px"}}
        >
          Add discount
        </Button>
        
      </Box>
      <Box mt={3}>
        
      </Box>
    </div>
  );
};

Toolbar2.propTypes = {
  className: PropTypes.string
};

export default Toolbar2;
