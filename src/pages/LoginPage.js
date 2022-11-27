import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
    let navigate = useNavigate();

    const [user,setUser] = useState(0)
    
    
    const handleChange = (event) => setUser(event.target.value)
    const eventClick = () => {
        navigate("/user/" + user) 
    }
  return (
    <div className='w-full'>
        <div className=' flex justify-center items-center'>
            <div className=' flex flex-col mt-20 w-[400px] h-[500px] p-20 border items-center space-y-10 bg-slate-50'>
                <h1 className=' text-3xl font-bold'>Login User</h1>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange}/>
                <Button variant="contained" onClick={eventClick}>Login</Button>

            </div>
            
        </div>
    </div>
  )
}
