import React from "react";
import ReactDOM  from "react-dom";
import example from "./example";


function Note(props){
    return (
        <div className="note">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
      );
}

export default Note;