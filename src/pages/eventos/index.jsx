import "./index.scss";


export default function Eventos() {


  function clicou(){
    alert("Ola, o usuario clicou!")
  }

  function movimentouMouse(){
    alert("O usuario acaba de movimentar o mouse!")
  }

  function alterouValor(e){
    let valor = e.target.value;
    alert("O usuario acaba de alterar o valor do input para: " + valor);
  }

  return (
    <div className="pagina-eventos pagina">
      <header className="cabecalho">
        <h1>React JS | Eventos</h1>
      </header>

      <section className="secao">
        <h1>Entendendo Eventos </h1>

        <p onMouseMove={movimentouMouse}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          repudiandae dolorum qui sint velit enim alias iste facilis magnam
          numquam incidunt, unde non, ad illum deleniti voluptate laudantium
          autem tempore.
        </p>

        <input onChange={alterouValor} type="text" placeholder="Digite aqui algo" />

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

        <button onClick={clicou}>Clique aqui</button>
      </section>
    </div>
  );
}
