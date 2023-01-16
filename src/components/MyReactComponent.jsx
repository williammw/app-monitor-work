
import React, {useEffect, useState} from 'react'
import './style.css'
import CircularProgress from '@mui/material/CircularProgress';


function MyReactComponent({initial}) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => { 
    console.log("useEffect")
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json))  
    setIsLoading(false)
  },[])
  // setup the component
  
  return (
  <div>
    {
      isLoading? <CircularProgress />
        :
      <div>      
      <div>MyReactComponent</div>
      <div className="miji">
        {data && data.map((item, index) => (
          <div key={index}>
            <div>{item.name}</div>
            <div>{item.username}</div>
            <div>------</div>
          </div>
        ))}
      </div>
      </div>   
    }
    </div>
  )
}

export default MyReactComponent