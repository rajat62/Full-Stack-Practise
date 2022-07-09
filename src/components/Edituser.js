import React, { useEffect, useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {FormGroup, FormControl, Input, InputLabel, Button, makeStyles, Typography} from "@material-ui/core";
import { edituser } from '../service/api';
import { getusers } from '../service/api';

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



const Edituser = () => {

  const [user, setuser] = useState(initialValue);
  const {name, username, email, phone} = user;
  const classes = useStyle();
  const history = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    loaduserdata();
  },[])

  const loaduserdata = async ()=>{
   const response  =  await getusers(id);
   setuser(response.data)
  };
  const onValueChange = (e)=>{
    console.log(e.target.value);
    setuser({...user,[e.target.name]:e.target.value});
    console.log(user);
  }

  const  edituserdetail = async ()=>{
    await edituser(id,user);
    history("/allusers");
  }
  return (
   <div>
     <FormGroup className={classes.container}>
       <Typography variant='h4'>Edit User</Typography>
       <FormControl className={classes.controls}>
         <InputLabel>Name</InputLabel>
         <Input onChange={(e)=> onValueChange(e)} value={name}/>
       </FormControl>
       <FormControl className={classes.controls}>
         <InputLabel>Username</InputLabel>
         <Input onChange={(e)=> onValueChange(e)} value={username}/>
       </FormControl>
       <FormControl className={classes.controls}>
         <InputLabel>Email</InputLabel>
         <Input onChange={(e)=> onValueChange(e)} value={email}/>
       </FormControl>
       <FormControl className={classes.controls}>
         <InputLabel>Phone</InputLabel>
         <Input onChange={(e)=> onValueChange(e)} value={phone}/>
       </FormControl>
       <Button variant={'contained'} color={'primary'} onClick={()=> edituserdetail()}>
       Add User
     </Button>
     </FormGroup>
     
   </div>
  )
}

export default Edituser;