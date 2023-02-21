import React from "react";
import user from "../data/user";
import Links from "./Links";

function About(props) {
  
  
  
  return (
    <div id="about">
      <h2>About Me</h2>
        {props.bio ? <p>{props.bio}</p> : null}
        {/* props.bio IS A VARIABLE in this expression so we dont need {} */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
