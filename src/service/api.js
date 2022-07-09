import axios from "axios";

const URL = "http://localhost:3003";

export const getusers = async(id)=>{
      id=id || "";
      return await axios.get(`${URL}/${id}`);
}

export const adduser = async (user)=>{
       await axios.post(`${URL}`, user);
}

export const edituser=async(id, user)=>{
      return await axios.put(`${URL}/${id}`, user);
}