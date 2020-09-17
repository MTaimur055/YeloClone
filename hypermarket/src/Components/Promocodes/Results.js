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

const Results = ({ className, customers, ...rest }) => {
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
                Code
                </TableCell>
                <TableCell>
                  Type
                </TableCell>
                <TableCell>
                  Value
                </TableCell>
                <TableCell>
                  Maximum <br/>Discount
                </TableCell>
                <TableCell>
                  Minimum <br/>Order <br/> Amount
                </TableCell>
                <TableCell>
                 Start Date
                </TableCell>
                <TableCell>
                 End Date
                </TableCell>
                
                <TableCell>
                Description
                </TableCell>
                <TableCell>
                Promo <br/> Application <br/>Mode
                </TableCell>
                <TableCell>
                Promo <br/> Applied On
                </TableCell>
                <TableCell>
                Promo Used <br/> (No. Of <br/>Times)
                </TableCell>
                <TableCell>
                Status
                </TableCell>
                <TableCell>
                Action
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
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.Code}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {customer.Type}
                  </TableCell>
                  <TableCell>
                    {customer.Value}
                  </TableCell>
                  <TableCell>
                  {customer.Maximum_Discount}
                  </TableCell>
                  <TableCell>
                    {customer.Minimum_Order_Amount}
                  </TableCell>
                  <TableCell>
                    {customer.StartDate}
                  </TableCell>
                  <TableCell>
                    {customer.EndDate}
                  </TableCell>
                  <TableCell>
                    {customer.Description}
                  </TableCell>
                  <TableCell>
                    {customer.PromoApplicationMode}
                  </TableCell>
                  <TableCell>
                    {customer.PromoAppliedOn}
                  </TableCell>
                  <TableCell>
                    {customer.PromoUsed}
                  </TableCell>
                  <TableCell>
                  <FormControlLabel
              control={<Switch checked={dense} onClick={handleChangeDense} />}
        
      />
                  </TableCell>
                    <TableCell>
                    <p style={{flexDirection:'inline'}}>< CreateIcon /> <DeleteIcon/></p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

export default Results;
