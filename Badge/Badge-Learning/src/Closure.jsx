import React from 'react'

const Closure = () => {
     
    let a=1
    function closure(){
        return function clo(){
            a++
           
             
        }
    }
const c=closure()
    c()
      c()
      c()
      c()
    
    
  return (
    <div>
       <h1 >Closure: {a}</h1>
    </div>
  )
}

export default Closure
