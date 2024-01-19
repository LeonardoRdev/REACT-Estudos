import { useState } from "react"

export default function MeuContador() {

    console.log("Renderizando meu contador...")

    let [contador, setContador] = useState(-5) // let contador = -5

    function incrementar() {
        setContador(contador + 1)
    }

    return (
        <div>
            <h1>Meu Contador</h1>
            <h3>{contador}</h3>
            <button onClick={incrementar}>Incrementar +1</button>
        </div>
    )
}
