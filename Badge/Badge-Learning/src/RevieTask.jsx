import React from 'react'
import { useState,useEffect } from 'react'

const RevieTask = () => {
    const arr=["HIMALAYAN 450","YEZDI","TRIUMPH","HERO RALLY 450","HIMALAYAN 411"]
 const [search,setSearch]=useState("")
    const [debounce,setDebounce]=useState("")
    const [isSearch,setIsSearch]=useState(false)
    const searched=arr.filter((val)=>{
        const lower=debounce.toLowerCase()
        const mache=val.toLowerCase().includes(lower)
        return(
            mache
        )
    })

    useEffect(()=>{
        setIsSearch(true)
    const timer=setTimeout(()=>{
    setDebounce(search)
        setIsSearch(false)
    },3000)

        return()=>{
            clearTimeout(timer)
            
        }
    },[search])
    
  return (
    <div>
      
          <input onChange={(e)=>setSearch(e.target.value)} placeHolder="Search............"></input>
          {isSearch && <p>Loading...........</p>}
          {
              searched.map((val)=>{
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

export default RevieTask
