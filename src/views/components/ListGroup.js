import React from 'react'

const ListGroup = ({ children }) => {
    return (
        <ul className='mt-5 py-2'>
            {children}
        </ul>
    )
}

export default ListGroup

/**
 * <li className='text-start mb-3'>Cordialidade e simpatia no trato com as pessoas</li>
    <li className='text-start mb-3'>Capacidade de planejamento e organização para o cumprimento de prazos</li>
    <li className='text-start mb-3'>Zelo pela higiene e organização do local de trabalho</li>
    <li className='text-start mb-3'>Dinamismo para execução demúltiplas tarefas</li>
    <li className='text-start mb-3'>Bom relacionamento interpessoal para trabalho em equipe</li>
    <li className='text-start mb-3'>Capacidade de liderança e tomada de decisões assertivas</li>
 */