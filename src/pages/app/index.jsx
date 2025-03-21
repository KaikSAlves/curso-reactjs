import "./index.scss";

import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="pagina-app pagina">
      <header className="cabecalho">
        <h1 className="titulo" s>
          Estudos de React Js
          <i className="fa fa-heart"></i>
        </h1>
      </header>

      <section className="secao">
        <h1>Estudando ReactJS</h1>

        <input type="text" placeholder="Digite aqui"/>
        <br/><br/>

        <select>
          <option>Item 1</option>
          <option>Item 2</option>
        </select>

        <br/><br/>
        <button>Clique aqui</button>
        <br/><br/>
        
        <ul>
          <li>
            <Link to="/contato">Ir para contato</Link>
          </li>
          <li>
            <Link to="/eventos">Ir para eventos</Link>
          </li>

          <li>
            <Link to="/varEstado">Ir para variáveis de estado</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
