import './index.scss';

import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="pagina-app">
      <h1 className='titulo's>Estudos de React Js</h1>

      <ul>
        <li>
          <Link to='/contato'>Ir para contato</Link>
        </li>
      </ul>
    </div>
  );
}
