import React, { useState } from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate= useNavigate()
    const [email, setEmail] = useState('xyz@gm')
    const [password, setPassword] = useState('123')
    const [confirmPassword, setConfirmPassword] = useState('123')
    const [LoginEmail, setLoginEmail] = useState('')
    const [LoginPassword, setLoginPassword] = useState('')

   
    const formSignup = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            return alert('Passwords do not match')
        }
        
            try {
                const response = await axios.post('http://localhost:5000/signup', {
                    email,
                    password,
                    confirmPassword
                })
                // console.log('Signup successful:', response.data);
                localStorage.setItem('token', response.data.token)
                console.log(localStorage.getItem('token'))
               
            
            } catch (error) {
                console.error(error.message)
            }
        }
        
   

    const formLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email: LoginEmail,
                password: LoginPassword
            })
            localStorage.setItem('token', response.data.token)
            // console.log('Login successful:', response.data);
            navigate('/')
        } catch (error) {
            console.error('Login failed:', error.message)
        }

    }
    return (
        <login>
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />
                <div className="signup" >
                    <form onSubmit={formSignup} encType='multipart/form-data'>
                        <label for="chk" aria-hidden="true">Sign up</label>
                        <input type="email" name="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" name="pswd" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" name="pswd" placeholder="Confirm Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <button className='signupbtn'  >Sign up</button>
                    </form>
                </div>
                <div className="login">
                    <form onSubmit={formLogin}>
                        <label for="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required value={LoginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                        <input type="password" name="pswd" placeholder="Password" required value={LoginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                        <button className='signupbtn'>Login</button>
                    </form>
                </div>
            </div>
        </login>
    )
}

export default Login