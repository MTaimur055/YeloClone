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

const Toolbar = ({ className, ...rest }) => {
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
      <h3>Discounts</h3>
     
      <FormControl variant="outlined" className={classes.formControl} style={{width:'200px'}}>
            <InputLabel id="demo-simple-select-outlined-label">
              HyperMarket
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
              label="age"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="">Shangrila</MenuItem>
              <MenuItem value="">Pizzeria</MenuItem>
              <MenuItem value="">Mozza</MenuItem>
              <MenuItem value="">Broadway</MenuItem>
              <MenuItem value="">S-treats</MenuItem>
              <MenuItem value="">Pizza by the Bay</MenuItem>
              <MenuItem value="">FoodYork</MenuItem>
              <MenuItem value="">Chocolate Cafe</MenuItem>
            </Select>
          </FormControl>
      
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        
      
     
        
       
        <Button
          color="primary"
          variant="contained"
          style={{height:"50px",width:"180px",marginLeft:"40px"}}
        >
          Set discount
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
