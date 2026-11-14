import { useEffect, useState } from "react";

function UseEffect(){
    const [alertmessage, setalertmessage]=useState("welcome students");
   useEffect(()=>{
alert(alertmessage);
    },[alertmessage]);

    return(
        <>
        
        </>
    );

}
export default UseEffect;