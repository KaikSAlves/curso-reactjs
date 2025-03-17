import "./index.scss";

export default function Eventos() {
  return (
    <div className="pagina-eventos pagina">
      <header className="cabecalho">
        <h1>React JS | Eventos</h1>
      </header>

      <section className="secao">
        <h1>Entendendo Eventos </h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          repudiandae dolorum qui sint velit enim alias iste facilis magnam
          numquam incidunt, unde non, ad illum deleniti voluptate laudantium
          autem tempore.
        </p>

        <input type="text" placeholder="Digite aqui algo" />

        <select>
          <option>Selecione alguma coisa</option>
          <option>Item A</option>
          <option>Item B</option>
        </select>

        <div className="grupo">
            <input type="checkbox" /> Opcao 1
            <input type="checkbox" /> Opcao 2
        </div>

        <div className="grupo">
          <div>
            <input type="radio" name="gpo"/> Opcao 1
          </div>
          <div>
            <input type="radio" name="gpo"/>Opcao 1
          </div>
        </div>

        <button>Clique aqui</button>
      </section>
    </div>
  );
}
