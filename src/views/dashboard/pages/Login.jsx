import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../OAuth/auth";
import { Button, Form, FormGroup } from "react-bootstrap";

import "../static/css/login.css"

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [, setAuthenticated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (authenticate(username, password)) {
            setAuthenticated(true)
            onLogin(username, password)
            navigate('/dashboard')
        } else {
            alert('Usuário inválido!')
        }
    };

    return (
        <div className="pageLogin d-flex flex-column align-items-center justify-content-center">

            <div className="sectionLogin">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Usuário</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            value={username} 
                            onChange={e => setUsername(e.target.value)}

                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                    </Form.Group>
                    <FormGroup className="text-center">
                        <Button variant="primary" type="submit" value="Enviar" className="px-3">
                            Entrar
                        </Button>
                    </FormGroup>
                    
                </Form>
            </div>
            
            {/* <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome de usuário"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input type="submit" value="Enviar" />
            </form> */}
        </div>
    );
}

export default Login;
