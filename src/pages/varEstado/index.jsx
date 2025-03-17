import "./index.scss";
import { useState } from "react";

export default function VarEstado() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    if(contador < 10){
        setContador(contador + 1);
    }
  }

  function diminuir() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  return (
    <div className="pagina-var-estado pagina">
      <header className="cabecalho">
        <h1>React JS | Variáveis de Estado</h1>
      </header>

      <section className="secao">
        <h1>Contador</h1>

        <div className="cont">
          <button onClick={aumentar}>+</button>
          {contador}
          <button onClick={diminuir}>-</button>
        </div>
      </section>
    </div>
  );
}
