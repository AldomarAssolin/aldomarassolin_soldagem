import React, { useState } from 'react'

const firstForm = ({user}) => {
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [rule, setRole] = useState(user ? user.rule : '')

    const handleSubmit = (event) => {
        event.preventDefault()
        //console.log('Enviando formulário')
        console.log(name, email, bio,rule)
        setEmail('')
        setName('')
        setBio('')
        setRole('')
    }

  return (
    <div className='firstForm'>
        <form onSubmit={handleSubmit}>
            <div className="form-controll">
                <label htmlFor="name">Nome</label>
                <input type="text" name='name' placeholder='Digite seu nome' onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
            <div className="form-controll">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Digite seu nome' onChange={(e)=>setEmail(e.target.value)} value={email} />
            </div>
            <div className="form-controll">
                <label>descrição</label>
                <textarea name="bio" placeholder='Descrição' onChange={(e)=>setBio(e.target.value)} value={bio}></textarea>
            </div>
            <div className="form-controll">
                <label>Função no sistema</label>
                <select name="rule" onChange={(e)=>setRole(e.target.value)} value={rule}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </div>
            <div className="btn-controll">
                <input type="submit" value="Enviar" />
            </div>
        </form>
    </div>
  )
}

export default firstForm