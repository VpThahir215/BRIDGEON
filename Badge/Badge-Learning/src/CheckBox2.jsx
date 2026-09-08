import React from 'react'
import { useState } from 'react'

const CheckBox2 = () => {
    const arr=["HIMALAYAN 450","YEZDI","TRIUMPH","HERO RALLY 450","HIMALAYAN 411"]
  const [item,setItem]=useState([])
    function handle(val){
if(item.includes(val)){
    setItem(item.filter((pro)=>pro !== val))
}else{
      setItem([...item,val])
}
      
    }
  return (
    <div>
         {
              arr.map((val)=>{
               return(
                   <div key={val}>
                <input onChange={()=>handle(val)} type="checkBox"></input>
                       <span>{val}</span> 
                   </div>
               )
                  
              })
          }
          <h1>Bike</h1>
          {
              item.map((val)=>{
                  return(
                      <div key={val}>
                          <h1>{val}</h1>
                      </div>
                  )
              })
          }
      
    </div>
  )
}

export default CheckBox2
