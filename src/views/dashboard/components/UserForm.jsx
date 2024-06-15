import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const UserForm = () => {
    const [user, setUser] = useState({
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        descricao: ''
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você faria a chamada para a API para salvar os dados do usuário
        console.log('User data submitted:', user);
    };

    return (
        <div className='firstForm'>
            <h2>Cadastrar Usuário</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="UserForm.ControlInputName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" name='nome' placeholder="Digite seu nome" value={user.nome} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="UserForm.ControlInputEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder='Digite seu Email' value={user.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="UserForm.ControlInputTelefone">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="text" name='telefone' placeholder='Digite seu telefone' value={user.telefone} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="UserForm.ControlInputEndereco">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control type="text" name='endereco' placeholder='Digite seu endereco' value={user.endereco} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="UserForm.ControlTextareaDescricao">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control as="textarea" rows={3} name='descricao' placeholder='Digite sua descrição' value={user.descricao} onChange={handleChange} />
                </Form.Group>

                <Button as="input" type="submit" variant='primary' value="Salvar" />{' '}

            </Form>
        </div>
    );
};

export default UserForm;
