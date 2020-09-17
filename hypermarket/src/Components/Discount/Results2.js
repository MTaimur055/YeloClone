import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import PerfectScrollbar from 'react-perfect-scrollbar';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results2 = ({ className, customers, ...rest }) => {
  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  
 

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };
  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
        
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
               
                <TableCell >
               Name
                </TableCell>
                <TableCell>
                  Value
                </TableCell>
              
                <TableCell>
                Description
                </TableCell>
                <TableCell>
                Valid From
                </TableCell>
               
                <TableCell>
                Valid To
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  
                  
                  <TableCell>
                    
                  </TableCell>
                  <TableCell>
                   
                  </TableCell>
                  <TableCell>
                 
                  </TableCell>
                
                  <TableCell>
                    No Data to show
                  </TableCell>
                  
                  <TableCell>
                 
                  </TableCell>
                
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
        </Box>
      
      </PerfectScrollbar>
     
    </Card>
    
  );
};

Results2.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

export default Results2;
