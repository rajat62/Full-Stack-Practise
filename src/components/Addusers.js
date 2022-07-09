import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import {FormGroup, FormControl, Input, InputLabel, Button, makeStyles, Typography} from "@material-ui/core";
import { adduser } from '../service/api';

const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& >*":{
      fontSize: 20,
      marginTop: "20px"
    }

  },
  controls: {
    "& >*":{
      fontSize: 20
    }    
  }

});

const initialValue = {
  name: "",
  username: "",
  email : "",
  phone: ""
};



const Addusers = () => {

  const [user, setuser] = useState(initialValue);
  const {name, username, email, phone} = user;
  const classes = useStyle();
  const history = useNavigate();

  const onValueChange = (e)=>{
    console.log(e.target.value);
    setuser({...user,[e.target.name]:e.target.value});
    console.log(user);
  }

  const  adduserdetail = async ()=>{
    await adduser(user);
    history("/allusers");
  }
  return (
   <div>
     <FormGroup className={classes.container}>
       <Typography variant='h4'>Add User</Typography>
       <FormControl className={classes.controls}>
         <InputLabel>Name</InputLabel>
         <Input onChange={(e)=> onValueChange(e)} name="name"/>
       </FormControl>
       <FormControl className={classes.controls}>
         <InputLabel>Username</InputLabel>
         <Input onChange={(e)=> onValueChange(e)} name="username"/>
       </FormControl>
       <FormControl className={classes.controls}>
         <InputLabel>Email</InputLabel>
         <Input onChange={(e)=> onValueChange(e)} name="email"/>
       </FormControl>
       <FormControl className={classes.controls}>
         <InputLabel>Phone</InputLabel>
         <Input onChange={(e)=> onValueChange(e)} name="phone"/>
       </FormControl>
       <Button variant={'contained'} color={'primary'} onClick={()=> adduserdetail()}>
       Add User
     </Button>
     </FormGroup>
     
   </div>
  )
}

export default Addusers