import React from 'react'
import { useParams } from 'react-router-dom'
export const HomePage = () => {
  let {id} = useParams()
  
  return (
    <div>
        <h1>Id: {id}</h1>
        <div>HomePage</div>
    </div>
    
  )
}
