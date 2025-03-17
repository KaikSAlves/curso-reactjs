import { Link } from "react-router-dom";
import "./index.scss";

export default function Contato() {
  return (
    <div className="pagina-contato pagina">
      <header className="cabecalho">
        <Link to="/">
          <i className="fa fa-arrow-left voltar"></i>
        </Link>
        <h1 className="titulo">Contato</h1>
      </header>
      <section className="secao">
        <h1>Entre em contato!</h1>
        <img className="icone" src="/assets/images/contato.png" />
      </section>
    </div>
  );
}
