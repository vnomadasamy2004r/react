import React from "react";
import "../App.css";
function Styling(){
    return(
        <>
        <div className="box">
        <h2>login form</h2>

        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="password"></input>
        <br></br>
        <button>login</button>
        </div>
        </>
    );
}
export default Styling;