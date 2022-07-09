import React from 'react';
import notfound from "../assests/images/shoes.png"

const Notfound = () => {
  return (
    <div style={{  display:"flex", justifyContent: "center", alignItems:"center"}}>
         <img src={notfound} style={{width:1000}}/>
    </div>
  )
}

export default Notfound