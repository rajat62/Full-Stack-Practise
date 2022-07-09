import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import cricket from "../assests/images/cricket.png";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  outside: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
});

const LandlingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.outside}>
      <section className="body1">
        <div className="bodyImg"><img src={cricket} alt="" /></div>
        <div className="bodyContent">
          <h1>Know your favourite players</h1>
          <p>Explore the best collection on our website</p>
          <Link to="/allusers" className="mylink">All Users</Link>
        </div>
      </section>
    </div>
  );
};

export default LandlingPage;
