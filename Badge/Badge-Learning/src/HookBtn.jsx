import React, { useState } from 'react'
import useclickBtn from './CustomHook'
const HookBtn = () => {
    const {btn,incriment}=useclickBtn()
  return (
    <div>
        <h1>Button for HOOK:{btn}</h1>
<button onClick={()=>incriment()}>Click</button>
      
    </div>
  )
}

export default HookBtn
