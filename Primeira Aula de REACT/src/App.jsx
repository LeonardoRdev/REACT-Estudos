import MeuComponente from "./components/MeuComponente"

function App() {

  return (
    <div>
      <h1>Olá Mundo, React!</h1>
      <MeuComponente/>
      <MeuComponente/>
      <MeuBotao conteudo="Clique Aqui!"/>
      <MeuBotao conteudo="Agora Neste!"/>
      <MeuBotao conteudo="Terceiro Botão ->" numero={3}/>
    </div>
  )
}

function MeuBotao(props) {
  return (
    <button>{props.conteudo} {props.numero}</button>
  )
}

export default App
