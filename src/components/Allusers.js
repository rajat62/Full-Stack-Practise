import React, { useEffect, useState } from 'react'
import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { getusers } from '../service/api';
import { Link } from 'react-router-dom';
const useStyle = makeStyles({

table: {
  width: "90%",
  margin: "50px 0 0 50px"
}, 
thead:{
  "& > *":{
    fontSize: 20,
    background: "#000000",
    color: "white"
  }
}, 
row:{
  "& > *":{
    fontSize:15
  }
}
});

const Allusers = () => {

  const [users, setusers] = useState([])

  useEffect(()=>{
    getAllusers();
  }, [])

  const classes =  useStyle();
  const getAllusers = async ()=>{
    const response =  await getusers();
    console.log(response.data);
    setusers(response.data);
  }
  return (
   <div>
     <Table className={classes.table}>
       <TableHead>
         <TableRow className={classes.thead}>
           <TableCell>Id</TableCell>
           <TableCell>Name</TableCell>
           <TableCell>Username</TableCell>
           <TableCell>Email</TableCell>
           <TableCell>Phone</TableCell>
           <TableCell></TableCell>
         </TableRow>
       </TableHead>
      <TableBody>
        {
            users.map(user=>(
              
              <TableRow className={classes.row}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Link to={`/edituser/${user.id}`}>
                    <Button style={{fontSize: 20, width:"80px", marginRight:5}} variant="contained" color="primary" >Edit</Button>
                  </Link>
                  <Button style={{fontSize: 20}} variant="contained" color="secondary">Delete</Button>
                </TableCell>
              </TableRow>
            ))
        }
       </TableBody>
     </Table>
   </div>
  )
}

export default Allusers