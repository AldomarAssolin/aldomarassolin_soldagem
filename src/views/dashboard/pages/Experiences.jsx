import React from 'react'
import ExperiencesDatails from '../components/ExperiencesDatails'

const UsersList = (props) => {
    const experiences = [
        {id:1,nome:'Aldomar',idade:38,maiorIdade:false},
        {id:2,nome:'Pedro',idade:12,maiorIdade:false},
        {id:3,nome:'Davi',idade:8,maiorIdade:false},
        {id:4,nome:'Lizane',idade:33,maiorIdade:false},
        {id:5,nome:'João',idade:38,maiorIdade:false}
      ]
  return (
    <div>
        <div className="people" id='people'>
            <h2>{props.title}</h2>
            {experiences.map((experience)=>(
                <ExperiencesDatails key={experience.id} nome={experience.nome} idade={experience.idade}/>
            ))}
        </div>
    </div>
  )
}

export default UsersList




