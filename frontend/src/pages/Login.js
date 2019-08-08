import React,  { useState} from 'react';
import './login.css';

import logo from '../assets/logo.svg';

export default function Login({ history }){
    const [username, setUsername] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        console.log(username);

        history.push('/main');
    }

    return (
        <div className="login-container">
            
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="tindev" />    
                <input 
                    placeholder="Digite seu usuario no Github"
                    value={username}    
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Entrar</button>             
            </form>
        </div>
        
    );
}