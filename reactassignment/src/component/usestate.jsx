import { useState } from "react";

function UseState(){
    const [text, settext]=useState("hello");
    return(
        <>
        <h2>{text}</h2>
        <h2>change from hello to welcome on click</h2>
        <button onClick={()=> settext("welcome")}>click to change</button>
        </>
    );
}
export default UseState;