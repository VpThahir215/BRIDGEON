import { useState } from "react";


function useclickBtn(){
    const [btn,setBtn]=useState(0)
    const incriment=()=>{
        setBtn(btn +1 )
    }
   return {btn,incriment}
}

export default useclickBtn