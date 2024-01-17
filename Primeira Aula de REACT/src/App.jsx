import MeuComponente from "./components/MeuComponente"

function App() {

  return (
    <div>
      <h1>Olá Mundo, React!</h1>
      <MeuComponente/>
      <MeuComponente/>
      <MeuBotao/>
      <MeuBotao/>
    </div>
  )
}

function MeuBotao() {
  return (
    <button> <a target="blank" href="youtube.com/@toddycommococa">CLIQUE AQUI</a></button>
  )
}

export default App
