import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CustomizedDialogs from './form'
import { Link } from '@material-ui/core';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name,Edit,Delete) {
  return { name,Edit,Delete};
}
const handledialog = () => {
 return <Link to='./form.jsx'></Link>
};

const rows = [
  createData('Deserts',<Button variant="contained" color="primary">Edit</Button>, <Button variant="contained" color="danger">Delete</Button>),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
     <p> <h1>Categories</h1> <br/><Button variant="contained" color="primary" style={{float:'right',width:'150px',height:'50px',margin:'10px'}} onClick={handledialog}>
       Add Category</Button></p>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Categories name </TableCell>
            <TableCell >Actions</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
          <TableCell style={{marginRight:'100px'}}>{row.Edit}   {row.Delete}</TableCell>
        </TableRow>
       
          ))}
           </TableBody>
         </Table>
         </TableContainer>
  );
}
