import { useState } from "react"

export default function MeuContador() {

    console.log("Renderizando meu contador...")

    let [contador, setContador] = useState(-5) // let contador = -5

    function incrementar() {
        setContador(contador + 1)
    }

    function excluir() {
        document.write("")
    }

    return (
        <div>
            <h1>Meu Contador</h1>
            <h3>{contador}</h3>
            { contador > 9 ? <button onClick={excluir}>DELETAR O SITE COMPLETAMENTE</button> : null}
            <button onClick={incrementar}>Incrementar +1</button>
        </div>
    )
}
