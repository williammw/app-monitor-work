
import React, {useEffect, useState} from 'react'
import './style.css'
function MyReactComponent({initial}) {
  const [data, setData] = useState(null)
   
  useEffect(() => { 
    console.log("useEffect")
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json))
    

  },[])
  
      // setup the component
  

  return (
    <div>
      
      <div>MyReactComponent</div>
      <div className="miji">
        {data && data.map((item, index) => (
          <div key={index}>
            <div>{item.name}</div>
            <div>{item.username}</div>
            <div>{initial}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyReactComponent