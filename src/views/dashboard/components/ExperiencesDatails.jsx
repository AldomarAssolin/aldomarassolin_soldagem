function ExperiencesDatails({ nome, idade }) {
    
  return (
    <div className='user-list'>
        <ul className='list-people'>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
        </ul>
        {idade >= 18 ? <p className="success">Já pode tirar CNH!</p> : <p className="danger">Sem idade para tirar CNH!</p>}
    </div>
  )
}

export default ExperiencesDatails

/*
    <div className='user-list'>
        <ul className='list-people'>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
        </ul>
        {idade >= 18 ? <p className="success">Já pode tirar CNH!</p> : <p className="danger">Sem idade para tirar CNH!</p>}
    </div>
 */