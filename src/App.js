import logo from './logo.svg';
import './App.css';

import curriculo from './pdf/curriculo_22.pdf'

function App() {
  return (
    <div className="App">
      <h1>Aldomar Assolin</h1>
      <h3>Soldador</h3>
      <div className="message-site">
        <p>Estamos atualizando o site!</p>
        <p>Em breve estaremos no ar novamente.</p>

        <a className="btn bg-info btn-outline-dark m-auto" href={curriculo}>
          <i className="fa fa-download mx-2" /> Currículo em PDF
        </a>

      </div>
    </div>
  );
}

export default App;
