import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [LoginEmail,setLoginEmail]=useState('')
    const [LoginPassword,setLoginPassword]=useState('')
    
    const formData=new FormData()
    const formSignup = async(e) => {
        e.preventDefault()
     
        formData.append('email',email)
        formData.append('password',password)
        formData.append('email',confirmPassword)
        try {
            const response=await axios.post('http://localhost:5000/signup',formData)
            console.log('form submitted',response.data)
        } catch (error) {
            console.error(error)
        }
       
    }

    const formLogin = async(e) => {
        e.preventDefault()
        formData.append('email',email)
        formData.append('password',password)
       try {
        axios.post('http://localhost:5000/login',formData)
       } catch (error) {
        console.error(error)
       }
        
    }
    return (
        <login>
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />
                <div className="signup" onSubmit={formSignup}>
                    <form>
                        <label for="chk" aria-hidden="true">Sign up</label>
                        <input type="email" name="email" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="password" name="pswd" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <input type="password" name="pswd" placeholder="Confirm Password" required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                        <button className='signupbtn'  >Sign up</button>
                    </form>
                </div>
                <div className="login">
                    <form onSubmit={formLogin}>
                        <label for="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required value={LoginEmail} onChange={(e)=>setLoginEmail(e.target.value)}/>
                        <input type="password" name="pswd" placeholder="Password" required value={LoginPassword} onChange={(e)=>setLoginPassword(e.target.value)}/>
                        <button className='signupbtn'>Login</button>
                    </form>
                </div>
            </div>
        </login>
    )
}

export default Login