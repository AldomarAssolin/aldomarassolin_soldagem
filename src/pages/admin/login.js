import React from 'react'
import { useState } from 'react';


import AppLogo from '../../App.css'
import logo from '../../images/logos/logo192.png';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.prevDefault()

        console.log(email)
        console.log(pass)

        setEmail('')
        setPass('')

    }
    return (
        <div className="login-container">
            <div className={AppLogo}>
                <img src={logo} alt="Logomarca" />
            </div>
            <div className='login-form'>
                <form>
                    <div className="form-control">
                        <label htmlFor='email'>Email:</label>
                        <input type="email" name="email" id="email" placeholder="Digite seu email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label htmlFor='password'>Senha:</label>
                        <input type="password" name="password" id="password" placeholder="Digite sua senha" value={pass} onChange={(e)=>setPass(e.target.value)} />
                    </div>
                    <div className="form-control-btn">
                        <input type="submit" value="Entrar" onClick={handleSubmit} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login