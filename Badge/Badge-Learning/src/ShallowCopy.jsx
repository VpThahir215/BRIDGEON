import React from 'react'

const ShallowCopy = () => {
     let user = {
  name: "Thahir",
  age: 22,
  address: {
    city: "Kozhikode"
  }
};
    let copy={...user}
    copy.address.city = "Kodinhi"
    let deepCopy=structuredClone(user)
           deepCopy.address.city = "Malappuram"
        
    
  return (
    <div>
        <h1>Shallow: {copy.address.city}</h1>
           <h1>OG: {user.address.city}</h1>
             <h1>Deep: {deepCopy.address.city}</h1>
           <h1>OG: {user.address.city}</h1>
          
    </div>
  )
}

export default ShallowCopy
