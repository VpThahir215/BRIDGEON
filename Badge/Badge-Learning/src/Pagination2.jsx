import React from 'react'
import { useState } from 'react'

const Pagination2 = () => {
      const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const [page,setPage]=useState(1)
    const perPage=4
    const startIndex=(page -1)*perPage
    const show=arr.slice(startIndex,startIndex+perPage)
  
  return (
    <div>
      {
              show.map((val)=>(
                  <h1>{val}</h1>
              ))
          }
    
 <button onClick={()=>setPage(page -1)}
     disabled={page===1}
     >Previous</button>
          <button onClick={()=>setPage(page +1)} 
              disabled={page===Math.ceil(arr.length / perPage)}
              >Next</button>
    </div>
  )
}

export default Pagination2
